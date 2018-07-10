const raycast = new THREE.Raycaster();

function raycastUpdate() {
  //let t2 = performance.now();
  let intersects;
  let surroundingArray;
  for (let x = 0, length = chunk.block.length; x < length; x++) {
    for (let y = 0, length = chunk.block[x].length; y < length; y++) {
      for (let z = 0, length = chunk.block[x][y].length; z < length; z++) {
        if (chunk.block[x][y][z] == undefined) continue;
        // if (chunk.block[i].mesh.visible == false) continue;
        // let t0 = performance.now();
        raycast.ray.origin = camera.position;
        raycast.ray.lookAt(chunk.block[x][y][z].mesh.position).normalize;
        surroundingArray = Chunk.getSurroundingBlocks(x, y, z, true);
        intersects = raycast.intersectObjects(surroundingArray);
        //console.log("Intersectings: " + intersects.length);
        if (intersects.length == 1) {
          chunk.block[x][y][z].material.visible = false;
        } else {
          chunk.block[x][y][z].material.visible = true;
        }


        let dir = new THREE.Vector3(x, y, z);
        dir.normalize();
        let origin = camera.position;
        let length = 10;
        let hex = 0xff0000;
        let arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
        scene.add(arrowHelper);
        // let t1 = performance.now();
        // if ((t1 - t0) >= 100) break;
        //   else console.log("Call to rayastUpdate took " + (t1 - t0) + " milliseconds.");
      }
    }
  }
  // let t3 = performance.now();
  // console.log("Call to rayastUpdate(for loop) took " + (t3 - t2) + " milliseconds.");
  // console.log("Call to rayastUpdate(for loop) took " + (t3 - t2)/1000 + " seconds.");
}
