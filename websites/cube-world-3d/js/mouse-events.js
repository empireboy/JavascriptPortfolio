var mouse = new THREE.Vector2();

// function onMouseClick() {
//   if (intersects.length > 0) {
//     planet[planetIndex] = new GameObject3D(new Point(0, 0), new Vector2(0, 0), new Vector2(0, 0), new Vector2(0, 0));
//     planet[planetIndex].setGeometryBox(10, 10, 10);
//     planet[planetIndex].setTexture("textures/grass.jpg");
//     planet[planetIndex].setMaterialBasic(0xeeeeee, planet[planetIndex].texture);
//     planet[planetIndex].setMesh(planet[planetIndex].geometry, planet[planetIndex].material);
//     planet[planetIndex].setPosition(intersects[0].object.position.x, intersects[0].object.position.y, 10 * planetIndex);
//     planet[planetIndex].material.color.set( 0xff0000 );
//     scene.add(planet[planetIndex].mesh);
//     planetIndex++;
//   }
// }

function onMouseMove( event ) {
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

window.addEventListener('mousemove', onMouseMove, false );
//window.addEventListener('click', onMouseClick, false );
