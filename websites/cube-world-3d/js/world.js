//let planet = new Array();
let geometry = new THREE.BoxGeometry(10, 10, 10);
let material = new THREE.MeshNormalMaterial();
let waterTextureLoader = new THREE.TextureLoader().load("textures/water.gif");
let waterMaterial = new THREE.MeshBasicMaterial({color:0xeeeeee,map:waterTextureLoader});
let chunk = undefined;

const classicalNoise = new ClassicalNoise();

function worldSetup() {
  const world = new World();
  world.chunkSetup(50, 50);
  world.createChunk(0, 0);
}

class World {

  constructor() {
    this._chunkWidth = undefined;
    this._chunkHeight = undefined;
    this._chunk = undefined;
  }

  get chunkWidth() {
    return this._chunkWidth;
  }

  get chunkHeight() {
    return this._chunkHeight;
  }

  chunkSetup(chunkWidth, chunkHeight) {
    this._chunkWidth = chunkWidth;
    this._chunkHeight = chunkHeight;
  }

  createChunk(x, y) {
    let newChunk = new Chunk(x, y, this._chunkWidth, this._chunkHeight);
    newChunk.setup();
    chunk = newChunk;
  }
}

class Chunk extends World {

  constructor(x, y, width, height) {
    super();
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
    this._type = undefined;
    this._terrainHeight = 20;
    this._block = undefined;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  get block() {
    return this._block;
  }

  setup() {
    this.blockInit();
    this.randomType();
    this.createCubeMap();
  }

  blockInit() {
    this._block = new Array(this._width);
    for (let i = 0; i < this._height; i++) {
      this._block[i] = new Array(this._height);
    }

    for (let i = 0; i < this._height; i++) {
      for (let j = 0; j < this._height; j++) {
        this._block[i][j] = new Array(this._height);
      }
    }
  }

  createCubeMap() {
    for (let x = 0, width = this._width; x < width; x++) {
      for (let y = 0, height = this._height; y < height; y++) {
        let z = Math.round(classicalNoise.noise(x*0.03, y*0.03, 10)*this._terrainHeight);

        this.createCube(x, y, z);
      }
    }
  }

  createCube(x, y, z, texture) {
    let block = new GameObject3D(new Point(0, 0), new Vector2(0, 0), new Vector2(0, 0), new Vector2(0, 0));
    block.geometry = geometry;
    if (texture != undefined) block.setTexture(texture);
    block.material = new THREE.MeshNormalMaterial();
    block.setMesh(block.geometry, block.material);
    block.setPosition((this._x * 10 * this._width) + 10 * x, (this._y * 10 * this._height) + 10 * y, 10 * z);
    this._block[x][y][z] = block;
    scene.add(block.mesh);
  }

  createCubes(x, y, z, length) {
    for (let blockIndex = 0; blockIndex < length; blockIndex++) {
      this.createCube(x, y, z);
      z--;
    }
  }

  createCubesTill(x, y, z, tillNumber) {
    while (z > tillNumber) {
      this.createCube(x, y, z);
      z--;
    }
  }

  randomType() {
    this._type = Math.round(Random.randomRange(0, 0));
  }

  static getSurroundingBlocks(x, y, z, includeMe) {
    let surroundingArray = new Array();
    let xx, yy, zz, surroundingArrayIndex = 0;
    for (let i = 0; i <= 5; i++) {
      xx = x; yy = y; zz = z;

      if (i == 0) xx = x - 1;
      else if (i == 1) xx = x + 1;
      else if (i == 2) yy = y - 1;
      else if (i == 3) yy = y + 1;
      else if (i == 4) zz = z - 1;
      else if (i == 5) zz = z + 1;

      // Out of bounds
      if (
        xx >= chunk.width ||
        xx < 0 ||
        yy >= chunk.height ||
        yy < 0 ||
        zz >= chunk.height ||
        zz < 0
      ) {
        continue;
      }

      if (chunk.block[xx][yy][zz] == undefined) continue;

      surroundingArray[surroundingArrayIndex] = chunk.block[xx][yy][zz].mesh;
      surroundingArrayIndex++;
    }
    if (includeMe) {
      surroundingArray[surroundingArrayIndex] = chunk.block[x][y][z].mesh;
      surroundingArrayIndex++;
    }
    return surroundingArray;
  }
}

// class ChunkArray {
//
//   constructor() {
//     this._length = 0;
//   }
//
//   get length() {
//     return this._length;
//   }
//
//   add(block) {
//     this[this._length] = block;
//     this._length++;
//   }
// }
//
// ChunkArray.prototype = Array.prototype;
