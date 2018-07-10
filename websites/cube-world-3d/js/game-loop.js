function gameLoop() {
  requestAnimationFrame(gameLoop);

  keyboardUpdate();

  stats.update();
  //cameraUpdate();
}
