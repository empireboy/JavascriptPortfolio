const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let pointArray = [];
let moveablePointArray = [];
let position = [];
let moveablePointPosition = [];
let moveablePointL = [];
let pointNumber = 10;

for (let i = 0; i < pointNumber; i++) {
  pointArray[i] = new Point(Math.random()*450, Math.random()*450, 20, getRandomColor());
  moveablePointArray[i] = new Point(Math.random()*450, Math.random()*450, 10, "black", Math.floor(Math.random()*pointNumber));
  pointArray[i].drag();
  position[i] = new Vector2(pointArray[i].x, pointArray[i].y);
  moveablePointPosition[i] = new Vector2(moveablePointArray[i].x, moveablePointArray[i].y);
}

for (let i = 0; i < pointNumber; i++) {
  moveablePointL[i] = getL(moveablePointArray[i].waypointIndex, i);
}

let to = true;

function animate() {
  context.clearRect(0,0,450,450);
  requestAnimationFrame(animate);

  for (let i = 0; i < pointNumber; i++) {
    l = getL(moveablePointArray[i].waypointIndex, i);
    l.r = 3;
    pointArray[i].draw();
    moveablePointArray[i].draw();
    moveablePointArray[i].x = moveablePointPosition[i].dx;
    moveablePointArray[i].y = moveablePointPosition[i].dy;
    moveablePointPosition[i].add(l);

    if (to) {
      if (moveablePointArray[i].distance(pointArray[moveablePointArray[i].waypointIndex]) <= l.r) {
        if (moveablePointArray[i].waypointIndex > pointArray.length - 2) {
          moveablePointArray[i].waypointIndex = 0;
        } else {
          moveablePointArray[i].waypointIndex++;
        }
      }
    }
  }
}

function getRandomColor() {
  return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}

function getL(I, J) {
  return (new Vector2((pointArray[I].x-moveablePointArray[J].x),(pointArray[I].y-moveablePointArray[J].y)));
}

animate();
