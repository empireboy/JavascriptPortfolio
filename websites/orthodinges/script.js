const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

var A = new Point(100, 100, 20, "red");
var B = new Point(200, 200, 20, "blue");
var C = new Point(300, 300, 20, "orange");

var L = new Line();
var P = new Perpendicular(A.x, A.y);

var V = new Vector2(2, 2);

A.drag(); B.drag(); C.drag();

function loop() {
  context.clearRect(0,0,450,450);
  requestAnimationFrame(loop);

  A.draw();
  B.draw();
  C.draw();

  L.letTwoPointDefineLine(A, B);
  L.draw(0, 450);

  P.calcSlope(A, B, A);
  P.draw(0, 800, A.x, A.y, 1);

  V.dx = C.x - A.x;
  V.dy = C.y - A.y;

  V.draw(context, A.x, A.y, 1);
}

function getRandomColor() {
  return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}

loop();
