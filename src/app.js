 import * as THREE from 'https://cdn.skypack.dev/three@0.131.3';
 import { OrbitControls } from 'https://cdn.skypack.dev/three@0.131.3/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000,);
const renderer = new THREE.WebGLRenderer();

// Paleta de colores
const palette = {bgColor: '#000000', boxColor: 0xffffff,planeColor: 0x404040 };

let objects = {};

document.body.onload = () => { main(); };

window.onresize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight, true);
};

function main() {
  // Configurracion inicial
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.setClearColor(palette.bgColor, 1);
  document.body.appendChild(renderer.domElement);
  camera.position.set(10,0,0);
  // Controls
  new OrbitControls(camera, renderer.domElement);
  //Cubo
  Cubo();
  // AUDIO
  Audio();
  // Videos
  Videos();
  // Movimiento
  Movimiento();
  // Habitacion 
  Habitacion();
  // Light
  setupLights();
  
  animate();
}

function Cubo(){
  const geometry = new THREE.BoxGeometry(5, 5, 5, 2, 2, 2);
  const material = new THREE.MeshPhongMaterial({color: palette.boxColor, side: THREE.DoubleSide, wireframe: false});
  const cube = new THREE.Mesh(geometry, material);

  cube.position.y=0
  cube.position.x=5
  cube.position.z=0
  cube.castShadow = true;
  cube.receiveShadow = true;
  //scene.add(cube);
  console.log(objects);

}

function Audio(){
  var audioLoader = new THREE.AudioLoader();
  var listener = new THREE.AudioListener();
  var audio = new THREE.Audio(listener);
  audioLoader.load('./assets/MusicaFondo.mp3', function(buffer) {
      audio.setBuffer(buffer);
      audio.setLoop(true);
      audio.setVolume(0.5);
      audio.play();
  });
}

function Videos(){
//Video1
const video1 = document.getElementById( 'Video1' );
const videoTexture1 = new THREE.VideoTexture(video1);
const videoMaterial1 =  new THREE.MeshBasicMaterial( {map: videoTexture1, side: THREE.DoubleSide, toneMapped: false, } );

const screen1 = new THREE.PlaneGeometry(16, 8, 4);
const videoScreen1 = new THREE.Mesh(screen1, videoMaterial1);

videoScreen1.position.set(0,0,-59.8);
scene.add(videoScreen1);

 //Video2
 const video2 = document.getElementById( 'Video2' );
 const videoTexture2 = new THREE.VideoTexture(video2);
 const videoMaterial2 =  new THREE.MeshBasicMaterial( {map: videoTexture2, side: THREE.DoubleSide, toneMapped: false} );

 
 const screen2 = new THREE.PlaneGeometry(16, 8, 4);
 const videoScreen2 = new THREE.Mesh(screen2, videoMaterial2);
 
 videoScreen2.position.set(0,0,59.8);
 scene.add(videoScreen2);

 //Video3
 const video3 = document.getElementById( 'Video3' );
 const videoTexture3 = new THREE.VideoTexture(video3);
 const videoMaterial3 =  new THREE.MeshBasicMaterial( {map: videoTexture3, side: THREE.DoubleSide, toneMapped: false} );

 
 const screen3 = new THREE.PlaneGeometry(16, 8, 4);
 const videoScreen3 = new THREE.Mesh(screen3, videoMaterial3);
 
 videoScreen3.position.set(-59.8,0,0);
 videoScreen3.rotation.y = Math.PI / 2;
 scene.add(videoScreen3);
}

function Movimiento(){
  window.addEventListener('keydown',(e)=>{
    let tecla=e.key
     console.log(e.key)
       switch (tecla) {
         case 'ArrowRight':
           camera.position.z=camera.position.z+0.5;
         break;
         case 'ArrowLeft':
          camera.position.z=camera.position.z-0.5;
         break;
         case 'ArrowUp':
          camera.position.x=camera.position.x-0.5;
         break;
         case 'ArrowDown':
          camera.position.x=camera.position.x+0.5;
         break;
        case 'd':
          camera.position.z=camera.position.z-0.5;
        break;
        case 'a':
          camera.position.z=camera.position.z+0.5;
        break;
        case 'w':
          camera.position.x=camera.position.x-0.5;
        break;
        case 's':
          camera.position.x=camera.position.x+0.5;
        break;
        case 'q':
          camera.rotation.y=camera.rotation.y+0.5;
         break;
         case 'e':
          camera.rotation.y=camera.rotation.y-0.5;
         break;
        default:
        break;
      }
  })
}

function Habitacion(){
  //Plano piso (1)
  const geometryplano = new THREE.PlaneGeometry(40, 40, 4);
  const materialplano = new THREE.MeshPhongMaterial({
    color: 0x800000,
    side: THREE.DoubleSide,
  });
  const plane = new THREE.Mesh(geometryplano, materialplano);
  plane.position.y=-5
  plane.position.x=0
  plane.position.z=0
  plane.rotation.x = Math.PI / 2;
  plane.castShadow = true;
  plane.receiveShadow = true;

  scene.add(plane);

  //Plano pared (1)
  const geometryplano1 = new THREE.PlaneGeometry(15, 10, 4);
  const materialplano1 = new THREE.MeshPhongMaterial({
    color: 0x2d3323,
    side: THREE.DoubleSide,
  });
  const plane1 = new THREE.Mesh(geometryplano1, materialplano1);
  plane1.position.y=0
  plane1.position.x=12.5
  plane1.position.z=-20

  scene.add(plane1);
  //Plano pared.1 (1)
  const geometryplano2 = new THREE.PlaneGeometry(15, 10, 4);
  const materialplano2 = new THREE.MeshPhongMaterial({
    color: 0x2d3323,
    side: THREE.DoubleSide,
  });
  const plane2 = new THREE.Mesh(geometryplano2, materialplano2);
  plane2.position.y=0
  plane2.position.x=-12.5
  plane2.position.z=-20

  scene.add(plane2);

  //Plano pared3.1 (1)
  const geometryplano3 = new THREE.PlaneGeometry(15, 10, 4);
  const materialplano3 = new THREE.MeshPhongMaterial({
    color: 0x2d3323,
    side: THREE.DoubleSide,
  });
  const plane3 = new THREE.Mesh(geometryplano3, materialplano3);
  plane3.position.y=0
  plane3.position.x=12.5
  plane3.position.z=20
  //plane.rotation.x = Math.PI / 2;

  scene.add(plane3);

  //Plano pared3.2 (1)
  const geometryplano4 = new THREE.PlaneGeometry(15, 10, 4);
  const materialplano4 = new THREE.MeshPhongMaterial({
    color: 0x2d3323,
    side: THREE.DoubleSide,
  });
  const plane4 = new THREE.Mesh(geometryplano4, materialplano4);
  plane4.position.y=0
  plane4.position.x=-12.5
  plane4.position.z=20
  //plane.rotation.x = Math.PI / 2;

  scene.add(plane4);

  //Plano pared4.1 (1)
  const geometryplano5 = new THREE.PlaneGeometry(15, 10, 4);
  const materialplano5 = new THREE.MeshPhongMaterial({
    color: 0x2d3323,
    side: THREE.DoubleSide,
  });
  const plane5 = new THREE.Mesh(geometryplano5, materialplano5);
  plane5.position.y=0
  plane5.position.x=-20
  plane5.position.z=12.5
  plane5.rotation.y = Math.PI / 2;

  scene.add(plane5);

  //Plano pared4.2 (1)
  const geometryplano6 = new THREE.PlaneGeometry(15, 10, 4);
  const materialplano6 = new THREE.MeshPhongMaterial({
    color: 0x2d3323,
    side: THREE.DoubleSide,
  });
  const plane6 = new THREE.Mesh(geometryplano6, materialplano6);
  plane6.position.y=0
  plane6.position.x=-20
  plane6.position.z=-12.5
  plane6.rotation.y = Math.PI / 2;

  scene.add(plane6);

  //Habitacion 2
  //Plano piso (2)
  const geometryplanoh2 = new THREE.PlaneGeometry(40, 40, 4);
  const materialplanoh2 = new THREE.MeshPhongMaterial({
    color: 0xa52a2a,
    side: THREE.DoubleSide,
  });
  const planeh2 = new THREE.Mesh(geometryplanoh2, materialplanoh2);
  planeh2.position.y=-5
  planeh2.position.x=-40
  planeh2.position.z=0
  planeh2.rotation.x = Math.PI / 2;

  scene.add(planeh2);

  //Plano pared (1)
  const geometryplano1h2 = new THREE.PlaneGeometry(40, 10, 4);
  const materialplano1h2 = new THREE.MeshPhongMaterial({
    color: 0x7d8471,
    side: THREE.DoubleSide,
  });
  const plane1h2 = new THREE.Mesh(geometryplano1h2, materialplano1h2);
  plane1h2.position.y=0
  plane1h2.position.x=-40
  plane1h2.position.z=-20
  //plane.rotation.x = Math.PI / 2;

  scene.add(plane1h2);

  //Plano pared2 (1)
  const geometryplano2h2 = new THREE.PlaneGeometry(40, 10, 4);
  const materialplano2h2 = new THREE.MeshPhongMaterial({
    color: 0x8b8c7a,
    side: THREE.DoubleSide,
  });
  const plane2h2 = new THREE.Mesh(geometryplano2h2, materialplano2h2);
  plane2h2.position.y=0
  plane2h2.position.x=-60
  plane2h2.position.z=0
  plane2h2.rotation.y =Math.PI / 2 ;

  scene.add(plane2h2);

  //Plano pared3 (1)
  const geometryplano3h2 = new THREE.PlaneGeometry(40, 10, 4);
  const materialplano3h2 = new THREE.MeshPhongMaterial({
    color: 0x7d8471,
    side: THREE.DoubleSide,
  });
  const plane3h2 = new THREE.Mesh(geometryplano3h2, materialplano3h2);
  plane3h2.position.y=0
  plane3h2.position.x=-40
  plane3h2.position.z=20
  //plane.rotation.x = Math.PI / 2;

  scene.add(plane3h2);

  //Habitacion 3
  //Plano piso (1)
  const geometryplanoh3 = new THREE.PlaneGeometry(40, 40, 4);
  const materialplanoh3 = new THREE.MeshPhongMaterial({
    color: 0xa52a2a,
    side: THREE.DoubleSide,
  });
  const planeh3 = new THREE.Mesh(geometryplanoh3, materialplanoh3);
  planeh3.position.y=-5
  planeh3.position.x=0
  planeh3.position.z=40
  planeh3.rotation.x = Math.PI / 2;

  scene.add(planeh3);

  //Plano pared (1)
  const geometryplano1h3 = new THREE.PlaneGeometry(40, 10, 4);
  const materialplano1h3 = new THREE.MeshPhongMaterial({
    color: 0x7d8471,
    side: THREE.DoubleSide,
  });
  const plane1h3 = new THREE.Mesh(geometryplano1h3, materialplano1h3);
  plane1h3.position.y=0
  plane1h3.position.x=-20
  plane1h3.position.z=40
  plane1h3.rotation.y =Math.PI / 2 ;

  scene.add(plane1h3);

  //Plano pared2 (1)
  const geometryplano2h3 = new THREE.PlaneGeometry(40, 10, 4);
  const materialplano2h3 = new THREE.MeshPhongMaterial({
    color: 0x7d8471,
    side: THREE.DoubleSide,
  });
  const plane2h3 = new THREE.Mesh(geometryplano2h3, materialplano2h3);
  plane2h3.position.y=0
  plane2h3.position.x=20
  plane2h3.position.z=40
  plane2h3.rotation.y =Math.PI / 2 ;

  scene.add(plane2h3);

  //Plano pared3 (1)
  const geometryplano3h3 = new THREE.PlaneGeometry(40, 10, 4);
  const materialplano3h3 = new THREE.MeshPhongMaterial({
    color: 0x8b8c7a,
    side: THREE.DoubleSide,
  });
  const plane3h3 = new THREE.Mesh(geometryplano3h3, materialplano3h3);
  plane3h3.position.y=0
  plane3h3.position.x=0
  plane3h3.position.z=60
  //plane.rotation.x = Math.PI / 2;

  scene.add(plane3h3);

  //Habitacion 4
  //Plano piso (1)
  const geometryplanoh4 = new THREE.PlaneGeometry(40, 40, 4);
  const materialplanoh4 = new THREE.MeshPhongMaterial({
    color: 0xa52a2a,
    side: THREE.DoubleSide,
  });
  const planeh4 = new THREE.Mesh(geometryplanoh4, materialplanoh4);
  planeh4.position.y=-5
  planeh4.position.x=0
  planeh4.position.z=-40
  planeh4.rotation.x = Math.PI / 2;

  scene.add(planeh4);

  //Plano pared (1)
  const geometryplano3h4 = new THREE.PlaneGeometry(40, 10, 4);
  const materialplano3h4 = new THREE.MeshPhongMaterial({
    color: 0x8b8c7a,
    side: THREE.DoubleSide,
  });
  const plane3h4 = new THREE.Mesh(geometryplano3h4, materialplano3h4);
  plane3h4.position.y=0
  plane3h4.position.x=0
  plane3h4.position.z=-60
  //plane.rotation.x = Math.PI / 2;

  scene.add(plane3h4);

  //Plano pared (2)
  const geometryplano1h4 = new THREE.PlaneGeometry(40, 10, 4);
  const materialplano1h4 = new THREE.MeshPhongMaterial({
    color: 0x7d8471,
    side: THREE.DoubleSide,
  });
  const plane1h4 = new THREE.Mesh(geometryplano1h4, materialplano1h4);
  plane1h4.position.y=0
  plane1h4.position.x=-20
  plane1h4.position.z=-40
  plane1h4.rotation.y =Math.PI / 2 ;

  scene.add(plane1h4);

  //Plano pared (3)
  const geometryplano2h4 = new THREE.PlaneGeometry(40, 10, 4);
  const materialplano2h4 = new THREE.MeshPhongMaterial({
    color: 0x7d8471,
    side: THREE.DoubleSide,
  });
  const plane2h4 = new THREE.Mesh(geometryplano2h4, materialplano2h4);
  plane2h4.position.y=0
  plane2h4.position.x=20
  plane2h4.position.z=-40
  plane2h4.rotation.y =Math.PI / 2 ;

  scene.add(plane2h4);

}

function setupLights() {
  const ambient = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambient);

  const PointLight = new THREE.PointLight(0xfafbfd, 1, 100 ); 
  PointLight.position.set( 0, 5, 40);
  scene.add( PointLight );
  const sphereSize = 1;
  const pointLightHelper = new THREE.PointLightHelper( PointLight, sphereSize );
  //scene.add( pointLightHelper );

  const PointLight2 = new THREE.PointLight(0xfafbfd, 1, 100 ); 
  PointLight2.position.set( 0, 5, -40);
  scene.add( PointLight2 );
  const sphereSize2 = 1;
  const pointLightHelper2 = new THREE.PointLightHelper( PointLight2, sphereSize2 );
  //scene.add( pointLightHelper2 );

  const PointLight3 = new THREE.PointLight(0xfafbfd, 1, 100 ); 
  PointLight3.position.set( -40, 5, 0);
  scene.add( PointLight3 );
  const sphereSize3 = 1;
  const pointLightHelper3 = new THREE.PointLightHelper( PointLight3, sphereSize3 );
  //scene.add( pointLightHelper3 );

  const PointLight4 = new THREE.PointLight(0xfafbfd, 1, 100 ); 
  PointLight4.position.set( 0, 10, 0);
  scene.add( PointLight4 );
  const sphereSize4 = 1;
  const pointLightHelper4 = new THREE.PointLightHelper( PointLight4, sphereSize4 );
  //scene.add( pointLightHelper );
  
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

