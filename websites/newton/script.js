const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var background_color = getRandomColor();

let moon, earth;

function setUp() {
  moon = new GameObject(new Point(0, 0, 20, "aliceblue"), new Vector2(500, 300), new Vector2(1, -2), new Vector2(0, 0));
  earth = new GameObject(new Point(0, 0, 40, "blue"), new Vector2(canvas.width/2, canvas.height/2), new Vector2(0, 0), new Vector2(0, 0));
  loop();
}

function loop() {
  //context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(loop);
  context.fillStyle = background_color;
  context.fillRect(0, 0, canvas.width, canvas.height);

  moon.acc.difVector(earth.pos, moon.pos);
  let r = moon.acc.r;
  moon.acc.r = 3000 / (r*r);
  moon.update();
  earth.update();
  earth.draw();
  moon.draw();
}

function getRandomColor() {
  return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}

setUp();
