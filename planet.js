var perspectiveCamera, stalkerCamera, scene, renderer;

var geometry, material, mesh;

var planet, planetRadious, rocket, phi, theta, velocity, asteroidPhi, ang1, ang2;

var cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9;

var cone1, cone2, cone3, cone4, cone5, dodecahedron1, dodecahedron2;

var tetrahedron1, tetrahedron2, tetrahedron3, octahedron1;

var asteroid1,asteroid2;

var gameOn = true;

var startTime,endTime;

var cameraToggle;

var trashNumber;

let keysPressed = new Set();

let asteroids = new Set();

let trash = new Set();

let velVector = new THREE.Vector3();

let isUp, isDown, isLeft, isRight;

const playAgain = "(Choose difficulty to play again!)";

const helpMsg = "Using the arrows, comand the rocket in order to clear the orbit of the planet from space trash as \
fast as you can!\nBe careful, there are two big asteroids orbiting the planet that will destroy the rocket if collided \
with!\nHeads up: careful around the poles, the rocket might have a harder time dodging the asteroids in this area.";

function createPlanet(x, y, z) {
  velocity = Math.PI/200;
  planetRadious = 20;
  
  //Planet
  planet = new THREE.Object3D();
  createDividedSphere(planet, planetRadious, 64, 32, 0xFF0000, 0x00FF00, 0x0000FF, 0xFFFF00);
  planet.position.set(x, y, z);
  scene.add(planet);
  
  
  //Rocket
  rocket = new THREE.Object3D();
  createRocket(rocket, planetRadious/11, 0xFFFFFF, 0x1D2121, 0xA1BABA);
  rocket.userData = { radius: planetRadious/22 }
  
  phi = 0;
  theta = 0;
  rocket.position.setFromSphericalCoords(planetRadious * 1.2, phi, theta);
  
  scene.add(rocket);
}

function createGarbage(level) {
  if(level == 0) return;

  //Garbage 1
  cube1 = new THREE.Object3D();
  createCube(cube1, planetRadious/20, planetRadious/20, planetRadious/20, 0x0000FF);
  mesh.geometry.computeBoundingSphere();
  
  ang1 = Math.random() * 2*Math.PI + 0;
  ang2 = Math.random() * 2*Math.PI + 0;
  cube1.position.setFromSphericalCoords(planetRadious * 1.2, ang1, ang2);
  cube1.userData = { radius: mesh.geometry.boundingSphere.radius }
  
  trash.add(cube1);
  scene.add(cube1);
  
  //Garbage 2
  cube2 = new THREE.Object3D();
  createCube(cube2, planetRadious/22, planetRadious/21, planetRadious/20, 0xC9FBFB);
  mesh.geometry.computeBoundingSphere();
  
  ang1 = Math.random() * 2*Math.PI + 0;
  ang2 = Math.random() * 2*Math.PI + 0;
  cube2.position.setFromSphericalCoords(planetRadious * 1.2, ang1, ang2);
  cube2.userData = { radius: mesh.geometry.boundingSphere.radius }
  
  trash.add(cube2);
  scene.add(cube2);
  
  //Garbage 3
  cube3 = new THREE.Object3D();
  createCube(cube3, planetRadious/20, planetRadious/22, planetRadious/21, 0xD3C60A);
  mesh.geometry.computeBoundingSphere();
  
  ang1 = Math.random() * 2*Math.PI + 0;
  ang2 = Math.random() * 2*Math.PI + 0;
  cube3.position.setFromSphericalCoords(planetRadious * 1.2, ang1, ang2);
  cube3.userData = { radius: mesh.geometry.boundingSphere.radius }
  
  trash.add(cube3);
  scene.add(cube3);
  
  //Garbage 4
  cube4 = new THREE.Object3D();
  createCube(cube4, planetRadious/22, planetRadious/22, planetRadious/20, 0x9800C5);
  mesh.geometry.computeBoundingSphere();
  
  ang1 = Math.random() * 2*Math.PI + 0;
  ang2 = Math.random() * 2*Math.PI + 0;
  cube4.position.setFromSphericalCoords(planetRadious * 1.2, ang1, ang2);
  cube4.userData = { radius: mesh.geometry.boundingSphere.radius }
  
  trash.add(cube4);
  scene.add(cube4);
  
  //Garbage 5
  cube5 = new THREE.Object3D();
  createCube(cube5, planetRadious/20, planetRadious/20, planetRadious/20, 0x52FF27);
  mesh.geometry.computeBoundingSphere();
  
  ang1 = Math.random() * 2*Math.PI + 0;
  ang2 = Math.random() * 2*Math.PI + 0;
  cube5.position.setFromSphericalCoords(planetRadious * 1.2, ang1, ang2);
  cube5.userData = { radius: mesh.geometry.boundingSphere.radius }
  
  trash.add(cube5);
  scene.add(cube5);
  
  if (level == 5){
    trashNumber = 5;
    return;
  }
  
  //Garbage 6
  cube6 = new THREE.Object3D();
  createCube(cube6, planetRadious/20, planetRadious/20, planetRadious/20, 0xEF1FEF);
  mesh.geometry.computeBoundingSphere();
  
  ang1 = Math.random() * 2*Math.PI + 0;
  ang2 = Math.random() * 2*Math.PI + 0;
  cube6.position.setFromSphericalCoords(planetRadious * 1.2, ang1, ang2);
  cube6.userData = { radius: mesh.geometry.boundingSphere.radius }
  
  trash.add(cube6);
  scene.add(cube6);
  
  //Garbage 7
  cube7 = new THREE.Object3D();
  createCube(cube7, planetRadious/20, planetRadious/20, planetRadious/20, 0xC71C27);
  mesh.geometry.computeBoundingSphere();
  
  ang1 = Math.random() * 2*Math.PI + 0;
  ang2 = Math.random() * 2*Math.PI + 0;
  cube7.position.setFromSphericalCoords(planetRadious * 1.2, ang1, ang2);
  cube7.userData = { radius: mesh.geometry.boundingSphere.radius }
  
  trash.add(cube7);
  scene.add(cube7);
  
  //Garbage 8
  cube8 = new THREE.Object3D();
  createCube(cube8, planetRadious/20, planetRadious/20, planetRadious/20, 0xFFFB00);
  mesh.geometry.computeBoundingSphere();
  
  ang1 = Math.random() * 2*Math.PI + 0;
  ang2 = Math.random() * 2*Math.PI + 0;
  cube8.position.setFromSphericalCoords(planetRadious * 1.2, ang1, ang2);
  cube8.userData = { radius: mesh.geometry.boundingSphere.radius }
  
  trash.add(cube8);
  scene.add(cube8);
  
  //Garbage 9
  cube9 = new THREE.Object3D();
  createCube(cube9, planetRadious/20, planetRadious/20, planetRadious/20, 0x00B74E);
  mesh.geometry.computeBoundingSphere();
  
  ang1 = Math.random() * 2*Math.PI + 0;
  ang2 = Math.random() * 2*Math.PI + 0;
  cube9.position.setFromSphericalCoords(planetRadious * 1.2, ang1, ang2);
  cube9.userData = { radius: mesh.geometry.boundingSphere.radius }
  
  trash.add(cube9);
  scene.add(cube9);
  
  //Garbage 10
  cone1 = new THREE.Object3D();
  createCone(cone1, planetRadious/40, planetRadious/20, 3, 1, 0x00B74E);
  mesh.geometry.computeBoundingSphere();
  
  ang1 = Math.random() * 2*Math.PI + 0;
  ang2 = Math.random() * 2*Math.PI + 0;
  cone1.position.setFromSphericalCoords(planetRadious * 1.2, ang1, ang2);
  cone1.userData = { radius: mesh.geometry.boundingSphere.radius }
  
  trash.add(cone1);
  scene.add(cone1);
  
  if (level == 10){
    trashNumber = 10;
    return;
  }
  
  //Garbage 11
  cone2 = new THREE.Object3D();
  createCone(cone2, planetRadious/40, planetRadious/20, 3, 1, 0x0027C6);
  mesh.geometry.computeBoundingSphere();
  
  ang1 = Math.random() * 2*Math.PI + 0;
  ang2 = Math.random() * 2*Math.PI + 0;
  cone2.position.setFromSphericalCoords(planetRadious * 1.2, ang1, ang2);
  cone2.userData = { radius: mesh.geometry.boundingSphere.radius }
  
  trash.add(cone2);
  scene.add(cone2);
  
  //Garbage 12
  cone3 = new THREE.Object3D();
  createCone(cone3, planetRadious/30, planetRadious/25, 10, 1, 0xFF6FB7);
  mesh.geometry.computeBoundingSphere();
  
  ang1 = Math.random() * 2*Math.PI + 0;
  ang2 = Math.random() * 2*Math.PI + 0;
  cone3.position.setFromSphericalCoords(planetRadious * 1.2, ang1, ang2);
  cone3.userData = { radius: mesh.geometry.boundingSphere.radius }
  
  trash.add(cone3);
  scene.add(cone3);
  
  //Garbage 13
  cone4 = new THREE.Object3D();
  createCone(cone4, planetRadious/20, planetRadious/22, 4, 1, 0xA1DE00);
  mesh.geometry.computeBoundingSphere();
  
  ang1 = Math.random() * 2*Math.PI + 0;
  ang2 = Math.random() * 2*Math.PI + 0;
  cone4.position.setFromSphericalCoords(planetRadious * 1.2, ang1, ang2);
  cone4.userData = { radius: mesh.geometry.boundingSphere.radius }
  
  trash.add(cone4);
  scene.add(cone4);
  
  //Garbage 14
  cone5 = new THREE.Object3D();
  createCone(cone5, planetRadious/50, planetRadious/22, 6, 1, 0xB43900);
  mesh.geometry.computeBoundingSphere();
  
  ang1 = Math.random() * 2*Math.PI + 0;
  ang2 = Math.random() * 2*Math.PI + 0;
  cone5.position.setFromSphericalCoords(planetRadious * 1.2, ang1, ang2);
  cone5.userData = { radius: mesh.geometry.boundingSphere.radius }
  
  trash.add(cone5);
  scene.add(cone5);
  
  //Garbage 15
  dodecahedron1 = new THREE.Object3D();
  createDodecahedron(dodecahedron1, planetRadious/20, 1, 0x4B6400);
  mesh.geometry.computeBoundingSphere();
  
  ang1 = Math.random() * 2*Math.PI + 0;
  ang2 = Math.random() * 2*Math.PI + 0;
  dodecahedron1.position.setFromSphericalCoords(planetRadious * 1.2, ang1, ang2);
  dodecahedron1.userData = { radius: mesh.geometry.boundingSphere.radius }
  
  trash.add(dodecahedron1);
  scene.add(dodecahedron1);
  
  //Garbage 16
  dodecahedron2 = new THREE.Object3D();
  createDodecahedron(dodecahedron2, planetRadious/23, 20, 0x52FF87);
  mesh.geometry.computeBoundingSphere();
  
  ang1 = Math.random() * 2*Math.PI + 0;
  ang2 = Math.random() * 2*Math.PI + 0;
  dodecahedron2.position.setFromSphericalCoords(planetRadious * 1.2, ang1, ang2);
  dodecahedron2.userData = { radius: mesh.geometry.boundingSphere.radius }
  
  trash.add(dodecahedron2);
  scene.add(dodecahedron2);
  
  //Garbage 17
  tetrahedron1 = new THREE.Object3D();
  createTetrahedron(tetrahedron1, planetRadious/23, 0, 0x0C9D00);
  mesh.geometry.computeBoundingSphere();
  
  ang1 = Math.random() * 2*Math.PI + 0;
  ang2 = Math.random() * 2*Math.PI + 0;
  tetrahedron1.position.setFromSphericalCoords(planetRadious * 1.2, ang1, ang2);
  tetrahedron1.userData = { radius: mesh.geometry.boundingSphere.radius }
  
  trash.add(tetrahedron1);
  scene.add(tetrahedron1);
  
  //Garbage 18
  tetrahedron2 = new THREE.Object3D();
  createTetrahedron(tetrahedron2, planetRadious/21, 1, 0xFFFFFF);
  mesh.geometry.computeBoundingSphere();
  
  ang1 = Math.random() * 2*Math.PI + 0;
  ang2 = Math.random() * 2*Math.PI + 0;
  tetrahedron2.position.setFromSphericalCoords(planetRadious * 1.2, ang1, ang2);
  tetrahedron2.userData = { radius: mesh.geometry.boundingSphere.radius }
  
  trash.add(tetrahedron2);
  scene.add(tetrahedron2);
  
  //Garbage 19
  tetrahedron3 = new THREE.Object3D();
  createTetrahedron(tetrahedron3, planetRadious/22, 2, 0xA46D6D);
  mesh.geometry.computeBoundingSphere();
  
  ang1 = Math.random() * 2*Math.PI + 0;
  ang2 = Math.random() * 2*Math.PI + 0;
  tetrahedron3.position.setFromSphericalCoords(planetRadious * 1.2, ang1, ang2);
  tetrahedron3.userData = { radius: mesh.geometry.boundingSphere.radius }
  
  trash.add(tetrahedron3);
  scene.add(tetrahedron3);
  
  //Garbage 20
  octahedron1 = new THREE.Object3D();
  createOctahedron(octahedron1, planetRadious/24, 0, 0x612D55);
  mesh.geometry.computeBoundingSphere();
  
  ang1 = Math.random() * 2*Math.PI + 0;
  ang2 = Math.random() * 2*Math.PI + 0;
  octahedron1.position.setFromSphericalCoords(planetRadious * 1.2, ang1, ang2);
  octahedron1.userData = { radius: mesh.geometry.boundingSphere.radius }
  
  trash.add(octahedron1);
  scene.add(octahedron1);
  
  trashNumber = 20;
}

function createAsteroids(){
  asteroidPhi=Math.PI/2;
  asteroid1 = new THREE.Object3D();
  createSphere(asteroid1, 2.5, 64,32, 0, 2*Math.PI, 0, 2*Math.PI, 0xff0000 );
  asteroid1.position.setFromSphericalCoords(planetRadious * 1.2,0,0);
  mesh.geometry.computeBoundingSphere();
  asteroid1.userData = { radius: mesh.geometry.boundingSphere.radius }
  
  scene.add(asteroid1);
  asteroids.add(asteroid1);
  
  asteroid2 = new THREE.Object3D();
  createSphere(asteroid2, 2.5, 64,32, 0, 2*Math.PI, 0, 2*Math.PI, 0xff0000 );
  asteroid2.position.setFromSphericalCoords(planetRadious * 1.2,0,Math.PI/2);
  mesh.geometry.computeBoundingSphere();
  asteroid2.userData = { radius: mesh.geometry.boundingSphere.radius }
  
  scene.add(asteroid2);
  asteroids.add(asteroid2);
}

function processCollision(obj) {
  trash.delete(obj);
  scene.remove(obj);
  trashNumber--;
  document.getElementById("txt").innerHTML = "Don't get hit by the red asteroids! Trash left: " + trashNumber;
  if(trashNumber == 0){
    gameOn = false;
    endTime = performance.now();
    let timeElapsed = (endTime-startTime)/1000.0;
    document.getElementById("txt").innerHTML = 'You did it!! Time: ' + timeElapsed.toFixed(2) + "s " + playAgain;
    
  }
}


function createSphere(obj, r, w, h, pStart, pHeight, tStart, tLenght, col) {
  'use strict';
  
  material = new THREE.MeshPhongMaterial({ color: col, shininess: 100 });
  geometry = new THREE.SphereGeometry(r, w, h, pStart, pHeight, tStart, tLenght);
  
  mesh = new THREE.Mesh(geometry, material);
  
  obj.add(mesh);
}

function createCylinder(obj, rTop, rBot, h, rSeg, hSeg, col) {
  geometry = new THREE.CylinderGeometry(rTop, rBot, h, rSeg, hSeg)
  material = new THREE.MeshLambertMaterial( { color: col } );
  
  mesh = new THREE.Mesh( geometry, material );
  
  obj.add(mesh);
}

function createCapsule(obj, r, l, cSeg, hSeg, col) {
  geometry = new THREE.CapsuleGeometry(r, l, cSeg, hSeg)
  material = new THREE.MeshLambertMaterial( { color: col } );
  
  mesh = new THREE.Mesh( geometry, material );
  
  obj.add(mesh);
}

function createCube(obj, w, h, d, col) {
  'use strict';
  
  geometry = new THREE.BoxGeometry(w, h, d);
  material = new THREE.MeshLambertMaterial({ color: col });
  
  mesh = new THREE.Mesh(geometry, material);
  
  obj.add(mesh);
}

function createCone(obj, r, h, rseg, hseg, col) {
  'use strict';
  
  geometry = new THREE.ConeGeometry( r, h, rseg, hseg);
  material = new THREE.MeshLambertMaterial({ color: col });
  
  mesh = new THREE.Mesh(geometry, material);
  
  obj.add(mesh);
}

function createDodecahedron(obj, r, d, col) {
  geometry = new THREE.DodecahedronGeometry(r, d)
  material = new THREE.MeshLambertMaterial( { color: col } );
  
  mesh = new THREE.Mesh( geometry, material );
  
  obj.add(mesh);
}

function createTetrahedron(obj, r, d, col) {
  geometry = new THREE.TetrahedronGeometry(r, d)
  material = new THREE.MeshLambertMaterial( { color: col } );
  
  mesh = new THREE.Mesh( geometry, material );
  
  obj.add(mesh);
}

function createOctahedron(obj, r, d, col) {
  geometry = new THREE.OctahedronGeometry(r, d)
  material = new THREE.MeshLambertMaterial( { color: col } );
  
  mesh = new THREE.Mesh( geometry, material );
  
  obj.add(mesh);
}

function createDividedSphere(obj, r, w, h, col1, col2, col3, col4) {
  var helper = new THREE.Object3D();
  
  var cir1 = new THREE.Object3D();
  createSphere(cir1, r, w, h, 0, Math.PI/2, 0, Math.PI, col1);
  
  var cir2 = new THREE.Object3D();
  createSphere(cir2, r, w, h, 0, Math.PI/2, 0, Math.PI, col2);
  cir2.rotation.y -= Math.PI/2;
  
  var cir3 = new THREE.Object3D();
  createSphere(cir3, r, w, h, 0, Math.PI/2, 0, Math.PI, col3);
  cir3.rotation.y -= Math.PI;
  
  var cir4 = new THREE.Object3D();
  createSphere(cir4, r, w, h, 0, Math.PI/2, 0, Math.PI, col4);
  cir4.rotation.y -= Math.PI*3/2;
  
  helper.add(cir1);
  helper.add(cir2);
  helper.add(cir3);
  helper.add(cir4);
  obj.add(helper);
}

function createRocket(obj, totalh, col1, col2, col3) {
  var prop1 = new THREE.Object3D();
  createCapsule(prop1, totalh * 0.05, totalh * 0.7, 2, 10, col3);
  
  var prop2 = new THREE.Object3D();
  createCapsule(prop2, totalh * 0.05, totalh * 0.7, 2, 10, col3);
  
  var prop3 = new THREE.Object3D();
  createCapsule(prop3, totalh * 0.05, totalh * 0.7, 2, 10, col3);
  
  var prop4 = new THREE.Object3D();
  createCapsule(prop4, totalh * 0.05, totalh * 0.7, 2, 10, col3);
  
  var head = new THREE.Object3D();
  createCylinder(head, totalh * 0.025, totalh * 0.15, totalh * 0.2, 16, 1, col1);
  
  var body = new THREE.Object3D();
  createCylinder(body, totalh * 0.15, totalh * 0.15, totalh * 0.8, 16, 16, col2);
  
  prop1.position.set(totalh * 0.17, -totalh * 0.22, 0);
  prop2.position.set(-totalh * 0.17, -totalh * 0.22, 0);
  prop3.position.set(0, -totalh * 0.22, totalh * 0.17);
  prop4.position.set(0, -totalh * 0.22, -totalh * 0.17);
  head.position.set(0, totalh * 0.5, 0);
  
  body.add(prop1);
  body.add(prop2);
  body.add(prop3);
  body.add(prop4);
  body.add(head);
  obj.add(body);
}

function createScene(level) {
  'use strict';
  
  scene = new THREE.Scene();
  scene.position.set(0, 0, 0);
  
  createPlanet(0, 0, 0, 20);
  
  const light = new THREE.AmbientLight( 0x404040,2 ); 
  scene.add( light );
  
  const sun = new THREE.PointLight( 0xffffff, 1, 100 );
  sun.position.set( 30, 30, 0 );
  scene.add( sun );
  
  createGarbage(level);
  createAsteroids();
}

function reset(level){
  trash.forEach(obj => {
    trash.delete(obj);
    scene.remove(obj);
  });
  asteroids.forEach(obj => {
    asteroids.delete(obj);
    scene.remove(obj);
  })
  scene.remove(rocket);
  
  createScene(level);
  createCamera();
  
  gameOn = true;
  startTime = performance.now();
  document.getElementById("txt").innerHTML = "Don't get hit by the red balls! Trash left: " + trashNumber;
}

function createCamera() {
  'use strict';
  var width = window.innerWidth;
  var height = window.innerHeight;
  perspectiveCamera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);
  perspectiveCamera.position.x = 30;
  perspectiveCamera.position.y = 30; //70
  perspectiveCamera.position.z = 30;
  perspectiveCamera.lookAt(scene.position);

  stalkerCamera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);
  stalkerCamera.position.x = 70;
  stalkerCamera.position.y = 30;
  stalkerCamera.position.z = 20;
  stalkerCamera.lookAt(scene.position);
}

function onResize() {
  'use strict';
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  if (window.innerHeight > 0 && window.innerWidth > 0) {
    perspectiveCamera.aspect = window.innerWidth / window.innerHeight;
    perspectiveCamera.updateProjectionMatrix();
    stalkerCamera.aspect = window.innerWidth / window.innerHeight;
    stalkerCamera.updateProjectionMatrix();
  }
  
}

function handleKeydown(event) {
  keysPressed.add(event.key);
  
  keysPressed.forEach(button => {
    if (button === "ArrowUp") {
      isUp = true;
    }
    if (button === "ArrowDown") {
      isDown = true;
    }
    if (button === "ArrowLeft") {
      isLeft = true;
    }
    if (button === "ArrowRight") {
      isRight = true;
    }
  })
}

function handleKeyup(event) {
  keysPressed.delete(event.key)
  if (event.key === "ArrowUp") {
    isUp = false;
  }
  if (event.key === "ArrowDown") {
    isDown = false;
  }
  if (event.key === "ArrowLeft") {
    isLeft = false;
  }
  if (event.key === "ArrowRight") {
    isRight = false;
  }
}

function render() {
  'use strict';
  if(cameraToggle) {
    renderer.render(scene, perspectiveCamera);
  }
  else {
    renderer.render(scene, stalkerCamera);
  }
}

function init() {
  'use strict';
  renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  createScene(0);
  createCamera();
  
  gameOn = false;
  cameraToggle = true;
  
  render();
  
  document.getElementById("Button5").onclick = function(){reset(5);};
  document.getElementById("Button10").onclick = function(){reset(10);};
  document.getElementById("Button20").onclick = function(){reset(20);};
  document.getElementById("ButtonC").onclick = function(){cameraToggle = !cameraToggle;};
  document.getElementById("ButtonHelp").onclick = function(){alert(helpMsg)};
  
  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("keyup", handleKeyup);
  window.addEventListener("resize", onResize);
}


function checkCollisions(){
  trash.forEach(obj =>{
    var r = Math.pow(obj.userData.radius + rocket.userData.radius, 2);
    var d = Math.pow(obj.position.x - rocket.position.x, 2) + Math.pow(obj.position.y - rocket.position.y, 2) + Math.pow(obj.position.z - rocket.position.z, 2);
    if (r >= d) {
      processCollision(obj);
    }
  });
  asteroids.forEach(obj =>{
    var r = Math.pow(obj.userData.radius + rocket.userData.radius, 2);
    var d = Math.pow(obj.position.x - rocket.position.x, 2) + Math.pow(obj.position.y - rocket.position.y, 2) + Math.pow(obj.position.z - rocket.position.z, 2);
    if (r >= d) {
      gameOn = false;
      endTime = performance.now();
      let timeElapsed = (endTime-startTime)/1000.0;
      document.getElementById("txt").innerHTML = 'You died! Time: ' + timeElapsed.toFixed(2) + "s  Trash remaining: " + trashNumber + " " + playAgain;
      console.log(rocket.position);
      return;
    }
  });
}

function animate() {
  'use strict';
  
  let iVector = new THREE.Vector3();
  iVector.copy(rocket.position);
  
  var s = new THREE.Spherical();
  s.setFromCartesianCoords(perspectiveCamera.position.x,perspectiveCamera.position.y,perspectiveCamera.position.z);
  var picheck = false;
  if(gameOn){
    if(isUp) {
      if (phi > Math.PI) picheck = true;
      phi -= velocity;
      if (phi <= Math.PI && picheck) perspectiveCamera.up.set(0,-perspectiveCamera.up.y,0);
      if (phi <= 0) {
        phi += 2*Math.PI;
        perspectiveCamera.up.set(0,-perspectiveCamera.up.y,0);
      }
    }
    if(isDown) {
      if (phi < Math.PI) picheck = true;
      phi += velocity;
      if (phi >= Math.PI && picheck) perspectiveCamera.up.set(0,-perspectiveCamera.up.y,0);
      if (phi >= 2*Math.PI) {
        phi -= 2*Math.PI;
        perspectiveCamera.up.set(0,-perspectiveCamera.up.y,0);
        
      }
    }
    if(isLeft) {
      theta -= velocity;
      if (theta <= 0) {
        theta += 2*Math.PI;
      }
    }
    if(isRight) {
      theta += velocity;
      if (theta >= 2*Math.PI) {
        theta -= 2*Math.PI;
      }
    }
    
    rocket.position.setFromSphericalCoords(planetRadious * 1.2, phi, theta);
    
    planet.rotateY(0.01)
    
    asteroidPhi += 0.03;
    if(asteroidPhi > Math.PI) asteroidPhi=-Math.PI;    
  }
  
  asteroid1.position.setFromSphericalCoords(planetRadious * 1.2,asteroidPhi,0);
  asteroid2.position.setFromSphericalCoords(planetRadious * 1.2,asteroidPhi,Math.PI/2);
  
  perspectiveCamera.position.setFromSphericalCoords(s.radius,phi, theta);
  perspectiveCamera.lookAt(scene.position);
  
  if(!rocket.position.equals(iVector)){
    velVector.copy(rocket.position);
    velVector.addScaledVector(iVector,-1);
    velVector.setLength(3);
  }
  
  let rVec = new THREE.Vector3();
  
  
  stalkerCamera.position.x = rocket.position.x - velVector.x;
  stalkerCamera.position.y = rocket.position.y - velVector.y;
  stalkerCamera.position.z = rocket.position.z - velVector.z;
  
  rVec.copy(stalkerCamera.position);
  rVec.normalize();
  stalkerCamera.position.addScaledVector(rVec,1.2);
  let v = new THREE.Vector3();
  v.copy(rocket.position);
  v.add(velVector);
  rocket.lookAt(v);
  rocket.rotateX(Math.PI/2);
  stalkerCamera.lookAt(rocket.position);
  
  if (gameOn) checkCollisions();
  
  
  render();
  
  requestAnimationFrame(animate);
}
