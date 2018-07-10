class GameObject3D {

  constructor(point, pos, vel, acc) {
    this.point = point;
    this.pos = pos;
    this.vel = vel;
    this.acc = acc;

    this._name = "undefined";
    this._geometry = null;
    this._texture = null;
    this._material = null;
    this._mesh = null;
    this._radius = null
    this._rotationX = 0;
    this._rotationY = 0;
    this._rotationZ = 0;
    this._positionX = 0;
    this._positionY = 0;
    this._positionZ = 0;
  }

  get nickname() {
    return this._name;
  }

  set nickname(name_in) {
    this._name = name_in;
  }

  get geometry() {
    return this._geometry;
  }

  set geometry(geometry_in) {
    this._geometry = geometry_in;
  }

  get texture() {
    return this._texture;
  }

  set texture(texture_in) {
    this._texture = texture_in;
  }

  get material() {
    return this._material;
  }

  set material(material_in) {
    this._material = material_in;
  }

  get mesh() {
    return this._mesh;
  }

  set mesh(mesh_in) {
    this._mesh = mesh_in;
  }

  setGeometryBox(sizeX, sizeY, sizeZ) {
    this._geometry = new THREE.BoxGeometry(sizeX, sizeY, sizeZ);
  }

  get radius() {
    return this._radius;
  }

  setGeometrySphere(radius, widthSegments, heightSegments) {
    this._geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
    this._radius = radius;
  }

  setTexture(textureLocation) {
    this._texture = new THREE.TextureLoader().load(textureLocation);
  }

  setMaterialBasic(color, texture) {
    this._material = new THREE.MeshBasicMaterial({color:color,map:texture});
  }

  setMaterialToon(color, texture) {
    this._material = new THREE.MeshToonMaterial({color:color,map:texture});
  }

  setMaterialNormal() {
    this._material = new THREE.MeshNormalMaterial();
  }

  setMesh(geometry, material) {
    this._mesh = new THREE.Mesh(geometry, material);
  }

  get positionX() {
    return this._positionX;
  }

  get positionY() {
    return this._positionY;
  }

  get positionZ() {
    return this._positionZ;
  }

  setPosition(x, y, z) {
    this._mesh.position.x = x;
    this._mesh.position.y = y;
    this._mesh.position.z = z;
    this._positionX = x;
    this._positionY = y;
    this._positionZ = z;
  }

  get rotationX() {
    return Math2.radiansToDegrees(this._rotationX);
  }

  get rotationY() {
    return Math2.radiansToDegrees(this._rotationY);
  }

  get rotationZ() {
    return Math2.radiansToDegrees(this._rotationZ);
  }

  setRotation(x, y, z) {
    this._mesh.rotation.x = Math2.degreesToRadians(x);
    this._mesh.rotation.y = Math2.degreesToRadians(y);
    this._mesh.rotation.z = Math2.degreesToRadians(z);
    this._rotationX = Math2.degreesToRadians(x);
    this._rotationY = Math2.degreesToRadians(y);
    this._rotationZ = Math2.degreesToRadians(z);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.point.x = this.pos.dx;
    this.point.y = this.pos.dy;
    this.setPosition(this.point.x, 0, this.point.y);
  }

  deactivate() {
    this._material.visible = false;
  }
}

function getGameObject3DByName(name) {
  if (sun.name == name) return sun;
  for (let i = 0; i < planet.length; i++) {
    if (planet[i].name == name) return planet[i];

    if (planet[i].moon != undefined) {
      for (let j = 0; j < planet[i].moon.length; j++) {
        if (planet[i].moon[j].name == name) return planet[i].moon[j];
      }
    }
  }
}
