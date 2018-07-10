const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let pointArray = [];
let position = [];
let velocity = [];
let acc = [];
let v0 = [];

let pointNumber = 10;

for (let i = 0; i < pointNumber; i++) {
  pointArray[i] = new Point(Math.random()*450, Math.random()*450, 20, getRandomColor());
  position[i] = new Vector2(Math.random()*450, Math.random()*450);
  velocity[i] = new Vector2(Math.random()*5, Math.random()*5);
  acc[i] = new Vector2(0,1);
  v0[i] = velocity[i].dy = Math.sqrt(2*(450-position[i].dy));
}

function animate() {
  context.clearRect(0,0,450,450);
  requestAnimationFrame(animate);

  for (let i = 0; i < pointNumber; i++) {
    pointArray[i].x = position[i].dx;
    pointArray[i].y = position[i].dy;

    position[i].add(velocity[i]);
    velocity[i].add(acc[i]);

    if (position[i].dx < 0 || position[i].dx > 450) {
      velocity[i].dx = -velocity[i].dx;
    }

    if (position[i].dy < 0 || position[i].dy > 450) {
      velocity[i].dy = v0[i];
      velocity[i].dy = -velocity[i].dy;
    }

    pointArray[i].draw();
    velocity[i].draw(context, pointArray[i].x, pointArray[i].y, 5);
  }
}

function getRandomColor() {
  return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}

animate();
