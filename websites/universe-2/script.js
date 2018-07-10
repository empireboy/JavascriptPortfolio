const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let moon, earth, sun, mercury, venus, mars;

var planet_number = Math.floor(randomRange(2, 100));
var planet_array = new Array(planet_number-1);
var planet_size_min = 3;
var planet_size_max = 20;
var planet_speed_min = 0.003;
var planet_speed_max = 0.01;
var planet_range_min = 100;
var planet_range_max = 300;
var moon_number = Math.floor(randomRange(1, 1));
var moon_array = new Array(moon_number-1);
var moon_size_min = 3;
var moon_size_max = 8;
var moon_speed_min = 0.03;
var moon_speed_max = 0.1;
var moon_range_min = 20;
var moon_range_max = 50;
var sun_size = 50;
var fill_rect_timer = 100;

function setUp() {
  for (let i = 0; i < planet_array.length; i++) {
    planet_array[i] = new GameObject(new Point(0,0,randomRange(planet_size_min, planet_size_max),getRandomColor()), new Vector2(randomRange(canvas.width/2-100, canvas.width/2+100), randomRange(canvas.height/2-100, canvas.height/2+100)), new Vector2(1,-2), new Vector2(0,0));
    planet_array[i].pos_rel = new Vector2(randomRange(planet_range_min, planet_range_max), 0);
    planet_array[i].pos_rel.angle = randomRange(0, 360);
    planet_array[i].dAngle = randomRange(planet_speed_min, planet_speed_max);
    planet_array[i].vel = new Vector2(randomRange(1,5), randomRange(1,5));
  }
  for (let i = 0; i < moon_array.length; i++) {
    moon_array[i] = new GameObject(new Point(0,0,randomRange(moon_size_min, moon_size_max),getRandomColor()), new Vector2(randomRange(0, canvas.width), randomRange(0, canvas.height)), new Vector2(0,0), new Vector2(0,0));
    moon_array[i].pos_rel = new Vector2(randomRange(moon_range_min, moon_range_max), 0);
    moon_array[i].pos_rel.angle = randomRange(0, 360);
    moon_array[i].dAngle = randomRange(moon_speed_min, moon_speed_max);
    moon_array[i].planet_index = Math.floor(randomRange(0, planet_array.length));
    moon_array[i].vel = new Vector2(randomRange(1,5), randomRange(1,5));
  }
  sun = new GameObject(new Point(0,0,sun_size,"yellow"), new Vector2(canvas.width/2,canvas.height/2), new Vector2(0,0), new Vector2(0,0));
  sun.pos_rel = new Vector2(randomRange(planet_range_min, planet_range_max), 0);
  sun.dAngle = randomRange(planet_speed_min, planet_speed_max);
  loop();
}

function loop() {
  //context.fillStyle = "rgba(0,0,0,0.05)";
  context.fillStyle = "black";

  /*if (fill_rect_timer <= 0) {
    context.fillRect(0,0,canvas.width,canvas.height);
    fill_rect_timer = 100;
  } else fill_rect_timer--;*/

  context.fillRect(0,0,canvas.width,canvas.height);

  requestAnimationFrame(loop);

  sun.update();
  sun.draw(context);

  planetLoop();
  moonLoop();
}

function planetLoop() {
  for (let i = 0; i < planet_array.length; i++) {
    planet_array[i].acc.difVector(sun.pos, planet_array[i].pos);
    let r = planet_array[i].acc.r;
    planet_array[i].acc.r = 3000 / (r*r);
    planet_array[i].update();
    planet_array[i].draw(context);
  }
}

function moonLoop() {
  for (let i = 0; i < moon_array.length; i++) {
    moon_array[i].acc.difVector(planet_array[moon_array[i].planet_index].pos, moon_array[i].pos_rel);
    let r = moon_array[i].acc.r;
    moon_array[i].acc.r = 3000 / (r*r);
    moon_array[i].update();
    moon_array[i].draw(context);
  }
}

function getRandomColor() {
  return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}

function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

setUp();
