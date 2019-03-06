var ctx= canvas.getContext('2d');
var c = document.getElementById("canvas");
$(document).keydown(function(evt2) {
  switch(evt2.keyCode) {
    case 81:
    playert.vy = 0;
    playert.vx = 0;
    playert.translate(playert.vx -= 2);
    break;
    case 90:
    playert.vy = 0;
    playert.vx = 0;
    playert.translate(playert.vy -= 2);
    break;
    case 68:
    playert.vy = 0;
    playert.vx = 0;
    playert.translate(playert.vx += 2);
    break;
    case 83:
    playert.vy = 0;
    playert.vx = 0;
    playert.translate(playert.vy += 2);
    break;
    case 37:
    playero.vy = 0;
    playero.vx = 0;
    playero.translate(playero.vx -= 2);
    break;
    case 39:
    playero.vy = 0;
    playero.vx = 0;
    playero.translate(playero.vx += 2);
    break;
    case 38:
    playero.vy = 0;
    playero.vx = 0;
    playero.translate(playero.vy -= 2);
    break;
    case 40:
    playero.vy = 0;
    playero.vx = 0;
    playero.translate(playero.vy += 2);
    break;
    playero.x = playero.x.clamp(0, CANVAS_WIDTH - playero.width);
  };
});
var check = function () {
	var x = playero.x;
	var y = playero.y;
	if (x < 0 || y < 0 || x > 750 || y > 750) {
		playero.alive = false;
	}
	var imageData = ctx.getImageData(x + 1, y + 1, 5, 5);
	if (imageData.data[3] !== 0) {
		playero.alive = false;
	}
};
var gameOver = function() {
	if (!playero.alive) {
		if (!playero.alive) {
			var result = alert('Jp tu es beau et fort');
		} else {
			result = alert('Jp tu es beau et fort mais tu as perdu');
		}
	} else {
		result = alert('Jp tu es beau et fort et tu as gagné');
	}
};
var playero = {
  color: 'red',
  x: 350,
  y: 375,
  radius: 5,
  vx: 2,
  vy: 0,
  alive: true,
  draw: function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};
var playert = {
  color: 'green',
  x: 400,
  y: 375,
  radius: 5,
  vx: -2,
  vy: 0,
  alive: true,
  draw: function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};
function draw(){
  playero.draw();
  playero.x += playero.vx;
  playero.y += playero.vy;
  playert.draw();
  playert.x += playert.vx;
  playert.y += playert.vy;
}
draw(playero);
draw(playert);
if (!playero.alive || !playert.alive) {
  result;
}


setInterval(draw, 20);
function noscroll() {
  window.scrollTo( 0, 0 );
}

// add listener to disable scroll
window.addEventListener('scroll', noscroll);
