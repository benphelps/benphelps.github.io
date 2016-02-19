// Oh hello, this is just something for me, a viewer for my local IP camera.
// The default viewer is pretty terrible.

var image = document.getElementById('camera');
var fps = document.getElementById('fps');
var date = document.getElementById('date');
var frame;
var floating = [];

// simple method to limit the request rate
function updateImage() {
  frame = new Date().getTime();
  image.src = "http://192.168.1.137/snapshot.cgi?user=view&pwd=pass&" + frame;
}

// Simple floating average to smooth out the FPS number
function framesPerSecond() {
  floating.unshift(Math.round( 1000 / (new Date().getTime() - frame), 0));
  floating = floating.slice(0, 9);
  return Math.round(floating.average(), 0);
}

// listen to the image load event and start a new request
image.addEventListener('load', function() {
  fps.innerHTML = 'FPS: ' + framesPerSecond();
  date.innerHTML = moment().format('LTS');
  updateImage();
});

// start things going
updateImage();
