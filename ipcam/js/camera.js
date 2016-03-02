// Oh hello, this is just something for me, a viewer for my local IP camera.
// The default viewer is pretty terrible.

var canvas = document.getElementById('camera');
var context = canvas.getContext('2d');
var image = new Image(); image.crossOrigin = "anonymous";
var fps = document.getElementById('fps');
var date = document.getElementById('date');
var frame, fps;
var floating = [];
var frames = [];
var text;
var db = new Dexie('IPCamStore');

db.version(1).stores({
  videos: 'time, data'
});

db.open().catch(function(error){
  alert('Uh oh : ' + error);
});

// simple method to limit the request rate
function updateImage() {
  frame = new Date().getTime();
  image.src = "http://localhost/proxy/proxy.php?url=" + encodeURIComponent("http://192.168.1.137/snapshot.cgi?user=view&pwd=pass&" + frame);
}

function drawText(text, x, y) {
  context.globalCompositeOperation = 'source-over';
  context.font = "bold 16px Roboto Mono";
  context.fillStyle = 'rgba(0,0,0,0.75)';
  context.beginPath();
  context.fillRect(x, y, context.measureText(text).width + 20, 28);
  context.font = "bold 16px Roboto Mono";
  context.fillStyle = '#000000';
  context.fillText(text, x + 11, y + 21);
  context.fillStyle = '#FFFFFF';
  context.fillText(text, x + 10, y + 20);
}

function drawImage() {
  canvas.width = 640;
	canvas.height = 480;
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  context.globalCompositeOperation = "lighter";
  if (window.innerWidth == 640 && window.innerHeight == 480) {
    drawText("Driveway", 20, 20);
  }
  else {
    drawText("Driveway (" + window.innerWidth + " x " + window.innerHeight + ")", 20, 20);
  }
}

// Simple floating average to smooth out the FPS number
function framesPerSecond() {
  floating.unshift(Math.round( 1000 / (new Date().getTime() - frame), 0));
  floating = floating.slice(0, 9);
  return Math.round(floating.average(), 0);
}

function storeFrames(limit) {
  frames.unshift(canvas.toDataURL('image/webp', 1));
  if (frames.length >= limit) {
    worker.postMessage([frames, fps]);
    frames = [];
  }
}

// listen to the image load event and start a new request
image.addEventListener('load', function() {
  fps = framesPerSecond();
  drawImage();
  updateImage();
  drawText('FPS: ' + fps, 535, 440);
  drawText(moment().format('LTS'), 20, 440);
  storeFrames(fps * 10);
});

var worker = new Worker('js/gifworker.js');

// on click download last 1 min video
document.getElementById('download').addEventListener('click', function() {
  worker.postMessage([frames, fps]);
}, false);

// listen to the worker
worker.addEventListener('message', function(e) {
  db.videos.add({ time: moment(new Date().getTime() - 60000).format('LTS'), data: window.URL.createObjectURL(e.data) });
}, false);

/*

var link = document.createElement("a");
link.download = moment().format('LTS') + '.webm';
link.href = url;
link.click();

*/





// start things going
updateImage();
