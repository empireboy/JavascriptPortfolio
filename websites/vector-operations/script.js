const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const scalVal = document.getElementById("scalVal");

let A = new Point(100, 100, 25, "red");
let B = new Point(100, 200, 25, "blue");
let C = new Point(100, 300, 25, "black");
let D = new Point(100, 400, 25, "purple");

let a = new Vector2(1, 1);
let b = new Vector2(1, 1);

let sumab = new Vector2(1, 1);
let difab = new Vector2(1, 1);
let scal = new Vector2(1, 1);

A.drag(); B.drag(); C.drag();D.drag();

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, 450, 450);

  a.dx = B.x - A.x;
  a.dy = B.y - A.y;
  a.draw(context, A.x, A.y, 1);

  b.dx = C.x - A.x;
  b.dy = C.y - A.y;
  b.draw(context, A.x, A.y, 1);

  sumab.sumVector(a, b);
  sumab.draw(context, A.x, A.y, 1);

  difab.difVector(a, b);
  difab.draw(context, A.x, A.y, 1);

  scal.dx = D.x - A.x;
  scal.dy = D.y - A.y;
  scal.scalair(scalVal.value);
  scal.draw(context, A.x, A.y, 1);

  A.draw(canvas);
  B.draw(canvas);
  C.draw(canvas);
  D.draw(canvas);
}

animate();
