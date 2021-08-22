var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var c = {}
var cw = canvas.width = window.innerWidth;
c.x = cw / 2;
var ch = canvas.height = window.innerHeight;
c.y = ch / 2;


var rad = Math.PI / 180;
var frames = 0;

function Particula() {
  this.x = -this.r;
  this.y = -this.r;
  this.r = 10;

  this.dibujar = function() {
    ctx.fillStyle = "#6ab150";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fill();
  }

  this.actualizar = function(momento, frames) { //53, 59, 61, 67 números primos!
    this.x = c.x + Math.cos(momento / 23 + Math.cos(momento / 29 + frames * rad)) * (c.x - 2 * this.r);
    this.y = c.y + Math.sin(momento / 31 + Math.cos(momento / 37 + frames * rad)) * (c.y - 2 * this.r);
  }
}

particula = new Particula();
particula.dibujar();

function Animar() {
  elId = window.requestAnimationFrame(Animar);
  frames += .15;
  ctx.clearRect(0, 0, cw, ch);
  var momento = new Date().getTime() / 30;
  particula.actualizar(momento, frames);
  particula.dibujar();

}

requestId = window.requestAnimationFrame(Animar);