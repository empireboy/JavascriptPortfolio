const container = document.getElementById("container");
const stats = new Stats();
container.appendChild(stats.dom);

function setup() {

  worldSetup();

  cameraSetup();

  gameLoop();

  renderUpdate();
}

setup();
