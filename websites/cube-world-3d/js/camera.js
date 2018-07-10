const camera = new THREE.PerspectiveCamera(45, screenWidth / screenHeight, 1, 50000);
const cameraSpeed = 20;
const cameraRotationSpeed = 0.1;

let light = new THREE.PointLight(0xffffff, 1, 0);
light.position.set(0, 0, 200);
scene.add(light);

function cameraSetup() {
  camera.up = new THREE.Vector3(0, 0, 1);
  camera.position.set(0, 0, 200);
  camera.rotation.set(Math2.degreesToRadians(90), Math2.degreesToRadians(-45), Math2.degreesToRadians(0));
}

function cameraUpdate() {
  //camera.rotation.y += cameraRotationSpeed;
}
