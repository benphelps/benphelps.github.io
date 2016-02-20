importScripts("whammy.js");
importScripts("b64.js");

self.addEventListener('message', function(e) {
  var data = e.data[0].reverse();

  self.postMessage(['s', 'Building gif...']);

  var encoder = new Whammy.Video(e.data[1]);

  for (var i = 0; i < data.length; i++) {
    encoder.add(data[i]);
  }

  var url;

  self.postMessage(['s', 'Rendering...']);
  encoder.compile(false, function(output){
    self.postMessage(['s', 'Downloading...']);
    self.postMessage([output]);
    self.postMessage(['s', false]);
  });



}, false);
