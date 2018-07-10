let block;
let time = 0;
let forward = true;

function blockInitialize() {
  block = new GameObject3D(new Point(0, 0), new Vector2(0, 0), new Vector2(0, 0), new Vector2(0, 0));
  block.setGeometryBox(10, 10, 10);
  block.setMaterialNormal();
  block.setMesh(block.geometry, block.material);
  block.setPosition(0, 0, 0);
  scene.add(block.mesh);
}

function blockUpdate() {
  block.mesh.rotation.y += Math2.degreesToRadians(3);
  block.mesh.scale.x = time * 100;
  block.mesh.scale.y = time * 3;
  block.mesh.scale.z = time * 10;
  block.mesh.position.x = time * 2;
  block.mesh.position.y = block.mesh.position.x * 2;
  block.mesh.position.z = block.mesh.position.x * time * 500;
  if (forward) {
    time += 0.01;
  } else {
    time -= 0.01;
  }
  //block.mesh.scale.y += 0.01;
  //block.mesh.scale.z += 0.05;
  if (time > 0.5) {
    forward = false;
    time = 0.5;
  } else if (time < 0) {
    forward = true;
    time = 0;
  }
  console.log(time);
  //if (block.mesh.scale.y >= 10) block.mesh.scale.y = 0;
  //if (block.mesh.scale.z >= 10) block.mesh.scale.z = 0;
  //camera.position.set(Random.randomRange(-100, 100), Random.randomRange(-100, 100), Random.randomRange(-100, 100));
  camera.lookAt(0, 0, 0);
}
