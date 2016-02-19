// Oh hello, this is just something for me, a viewer for my local IP camera.
// The default viewer is pretty terrible.

var image = document.getElementById('camera');
var fpse = document.getElementById('fps');
var date = document.getElementById('date');
var start = new Date().getTime();
var frames = 0;
var fps = 0;

// simple method to limit the request rate
function updateImage() {
  image.src = "http://192.168.1.137/snapshot.cgi?user=view&pwd=pass&" + new Date().getTime();
  frames += 1;
}
image.addEventListener('load', function() {
  fps = (frames / ((new Date().getTime() - start) / 1000)).toFixed(0);
  fpse.innerHTML = 'FPS: ' + fps;
  date.innerHTML = moment().format('LTS');
  updateImage();
});

// start things going
updateImage();
