(function() {
  var Client, Player, client, config, container,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  container = $("#container");

  config = {
    apiKey: 'AIzaSyAkTwnhQ8aisGnvxFiLQ4dror2sSZO6REQ',
    authDomain: 'leer-3a598.firebaseapp.com',
    databaseURL: 'https://leer-3a598.firebaseio.com',
    storageBucket: 'leer-3a598.appspot.com',
    messagingSenderId: '740612348645'
  };

  firebase.initializeApp(config);

  Player = (function() {
    function Player(room_ref, room) {
      this.room_ref = room_ref;
      this.room = room;
      return this.init();
    }

    Player.prototype.players = {
      youtube: (function() {
        function _Class() {
          this.child_changed = bind(this.child_changed, this);
          this.ready = false;
          this.state = false;
          this.player = false;
          this.nonce = false;
          this.time = Date.now();
        }

        _Class.prototype.init = function(room_ref, room) {
          var firstScriptTag, source, tag, template;
          this.room_ref = room_ref;
          this.room = room;
          source = $("#youtube-template").html();
          template = Handlebars.compile(source);
          container.html(template());
          this.state = this.room.media.status.state;
          tag = document.createElement('script');
          tag.src = "https://www.youtube.com/iframe_api";
          firstScriptTag = document.getElementsByTagName('script')[0];
          document.getElementsByTagName('script')[0].parentNode.insertBefore(tag, firstScriptTag);
          window.onYouTubeIframeAPIReady = (function(_this) {
            return function() {
              _this.player = new YT.Player('player', {
                height: '390',
                width: '640',
                videoId: _this.room.media.resource,
                events: {
                  'onReady': function(event) {
                    return _this.ready = true;
                  },
                  'onStateChange': function(event) {
                    var state;
                    if (_this.ready && _this.state !== event.data) {
                      state = false;
                      _this.nonce = Math.random();
                      console.log('State Change: ' + event.data);
                      if (event.data === YT.PlayerState.PAUSED) {
                        state = 'paused';
                      } else if (event.data === YT.PlayerState.PLAYING) {
                        state = 'playing';
                      }
                      if (state) {
                        return _this.state = _this.room_ref.child('media').child('status').update({
                          state: state,
                          seek: _this.player.getCurrentTime(),
                          nonce: _this.nonce,
                          time: Date.now()
                        });
                      }
                    }
                  }
                }
              });
            };
          })(this);
          return console.log('Player initialized!');
        };

        _Class.prototype.play = function(videoId) {};

        _Class.prototype.stop = function() {
          console.log('Stop!');
          return this.player.stopVideo();
        };

        _Class.prototype.time = function() {
          return this.player.getCurrentTime();
        };

        _Class.prototype.seek = function(time) {
          return this.player.seekTo(time);
        };

        _Class.prototype.child_changed = function(data) {
          var status;
          if (this.ready && data.key === 'media') {
            status = data.val().status;
            console.log(this.time < (Date.now() - 1000));
            if (this.nonce !== status.nonce && this.time < (Date.now() - 1000) && status.state !== this.state) {
              if (status.state === 'paused') {
                this.player.seekTo(status.seek);
                this.player.pauseVideo();
              } else if (status.state === 'playing') {
                this.player.seekTo(status.seek);
                this.player.playVideo();
              }
              return this.time = Date.now();
            }
          }
        };

        return _Class;

      })()
    };

    Player.prototype.init = function() {
      var yt;
      if (this.players[this.room.media.type]) {
        yt = new this.players[this.room.media.type]();
        yt.init(this.room_ref, this.room);
        return yt;
      }
      return false;
    };

    return Player;

  })();

  Client = (function() {
    function Client() {}

    Client.prototype.username = 'phelps';

    Client.prototype.room_id = 'zuMej9Yaz';

    Client.prototype.room_ref = false;

    Client.prototype.room = false;

    Client.prototype.player = false;

    Client.prototype.controller = false;

    Client.prototype.init = function() {
      this.room_ref = firebase.database().ref(this.room_id);
      this.room_ref.once('value').then((function(_this) {
        return function(snapshot) {
          _this.room = snapshot.val();
          if (_this.room === null) {
            _this.room = {
              founder: _this.username,
              media: {
                type: 'youtube',
                resource: 'Dtfew6xyQ8g',
                status: {
                  state: 2,
                  seek: 0
                }
              },
              viewers: {
                phelps: 0,
                brandon: 0
              }
            };
            _this.room_ref.set(_this.room);
          }
          _this.player = new Player(_this.room_ref, _this.room);
          _this.room_ref.on('value', function(snapshot) {
            _this.room = snapshot.val();
            return _this.update(snapshot);
          });
          return _this.room_ref.on('child_changed', _this.player.child_changed);
        };
      })(this));
      return console.log('Client initialized!');
    };

    Client.prototype.update = function(snapshot) {
      return console.log('Update!');
    };

    return Client;

  })();

  client = new Client;

  client.init();

}).call(this);

//# sourceMappingURL=leer.js.map
