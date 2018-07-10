function gameLoop() {
  requestAnimationFrame(gameLoop);

  renderUpdate();

  blockUpdate();

  //cameraUpdate();
}
