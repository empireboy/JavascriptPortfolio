const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const scalVal = document.getElementById("scalVal");

let pointArray = [];
let bulletArray = [];
let position = [];
let velocity = [];
let acc = [];
let v0 = [];

let pointNumber = 10;

for (let i = 0; i < pointNumber; i++) {
  pointArray[i] = new Point(Math.random()*450, Math.random()*450, 20, getRandomColor());
  position[i] = new Vector2(Math.random()*450, Math.random()*450);
  velocity[i] = new Vector2(Math.random()*5, Math.random()*5);
  acc[i] = new Vector2(0,0);
}

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, 450, 450);

  // DRAW POINTS
  for (let i = 0; i < pointNumber; i++) {
    pointArray[i].x = position[i].dx;
    pointArray[i].y = position[i].dy;

    position[i].add(velocity[i]);
    velocity[i].add(acc[i]);

    if (position[i].dx < 0 || position[i].dx > 450) {
      velocity[i].dx = -velocity[i].dx;
    }

    if (position[i].dy < 0 || position[i].dy > 450) {
      velocity[i].dy = -velocity[i].dy;
    }

    pointArray[i].draw();
    velocity[i].draw(context, pointArray[i].x, pointArray[i].y, 5);
  }

  // DRAW BULLETS
  for (let i = 0; i < bulletArray.length; i++) {
    bulletArray[i].draw();
  }

  input();
}

function input() {
  for (var key in keysDown) {
  value = Number(key);

    switch (value) {
      case 65:  // LEFT A
        for (let i = 0; i < pointNumber; i++) velocity[i].angle -= 0.1;
        break;
      case 68:  // RIGHT D
        for (let i = 0; i < pointNumber; i++) velocity[i].angle += 0.1;
        break;
      case 87:  // UP W
        for (let i = 0; i < pointNumber; i++) velocity[i].r += 0.1;
        break;
      case 83:  // DOWN S
        for (let i = 0; i < pointNumber; i++) velocity[i].r -= 0.1;
        break;
    }
  }
}

function getRandomColor() {
  return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}


animate();

var keysDown = {};

window.addEventListener("keydown", function(event) {
  keysDown[event.keyCode] = true;
});

window.addEventListener("keyup", function(event) {
  delete keysDown[event.keyCode];
});

addEventListener('keydown',(evt)=>{
  switch (evt.keyCode) {
    case 32:  // SHOOT SPACE
      for (let i = 0; i < pointNumber; i++) {
        bulletArray.push(new Point(position[i].dx, position[i].dy, 10, "black"));
        bulletArray[i].velocity = new Vector2(Math.random()*5, Math.random()*5);
        acc[i] = new Vector2(0,0);
      }
      break;
  }
});
