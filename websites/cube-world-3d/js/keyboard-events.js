let keysDown = {};

window.addEventListener("keydown", function(event) {
  keysDown[event.keyCode] = true;
});

window.addEventListener("keyup", function(event) {
  delete keysDown[event.keyCode];
});

function keyboardUpdate() {
  let anyKeyPress = false;
  for(var key in keysDown) {
    let value = Number(key);

    switch (value) {
      case 87: onKeyUp(); break;
      case 83: onKeyDown(); break;
      case 65: onKeyLeft(); break;
      case 68: onKeyRight(); break;
      case 37: onKeyRotationLeft(); break;
      case 39: onKeyRotationRight(); break;
      case 38: onKeyHeightUp(); break;
      case 40: onKeyHeightDown(); break;
    }

    anyKeyPress = true;
  }
  if (anyKeyPress) {
    renderUpdate();
    raycastUpdate();
  }
}

function onKeyLeft() {
  camera.translateX(-cameraSpeed);
}

function onKeyRight() {
  camera.translateX(cameraSpeed);
}

function onKeyUp() {
  camera.translateZ(-cameraSpeed);
}

function onKeyDown() {
  camera.translateZ(cameraSpeed);
}

function onKeyRotationLeft() {
  camera.rotation.y += cameraRotationSpeed;
}

function onKeyRotationRight() {
  camera.rotation.y -= cameraRotationSpeed;
}

function onKeyHeightUp() {
  camera.position.z += cameraSpeed;
}

function onKeyHeightDown() {
  camera.position.z -= cameraSpeed;
}
