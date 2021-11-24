 import * as THREE from 'https://cdn.skypack.dev/three';
 import { GLTFLoader } from 'https://cdn.skypack.dev/three/examples/jsm/loaders/GLTFLoader.js';
 import { PointerLockControls } from 'https://cdn.skypack.dev/three/examples/jsm/controls/PointerLockControls.js';
 import { FontLoader } from 'https://cdn.skypack.dev/three/examples/jsm/loaders/FontLoader.js';
 import { TextGeometry } from 'https://cdn.skypack.dev/three/examples/jsm/geometries/TextGeometry.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000,);
const renderer = new THREE.WebGLRenderer();
const loader = new FontLoader();

// Paleta de colores
const palette = {bgColor: '#000000', boxColor: 0xffffff,planeColor: 0x404040 };

let loader1 = new GLTFLoader();
let loader2 = new GLTFLoader();
let loader3 = new GLTFLoader();
let Model1,Model2,Model3,controls;  

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
  camera.rotation.y = Math.PI / 2;
 
  //CONTROLS
  Controles();
  //skyBox
  SkyBox();
  //Modelos
  Modelos();
  //AUDIO
  Audio();
  //Videos
  Videos();
  //Posters
  Posters();
  //Habitacion 
  Habitacion();
  //Light
  setupLights();
  //Texto
  Texto();

  animate();
}

function Posters(){
  //Poster Gwen (1)
  const textureLoader = new THREE.TextureLoader();
  const geometryposter1 = new THREE.PlaneGeometry(6, 10, 4);
  const materialposter1 = new THREE.MeshBasicMaterial({
     map:textureLoader.load('./assets/Posters/Gwen.jpg'), 
    side: THREE.DoubleSide,
  });
  const poster1 = new THREE.Mesh(geometryposter1, materialposter1);
  poster1.position.y=1.5
  poster1.position.x=11
  poster1.position.z=-18.9
  poster1.castShadow = true;
  poster1.receiveShadow = true;

  scene.add(poster1);

  //Poster Gwen (2)
  const geometryposter2 = new THREE.PlaneGeometry(6, 10, 4);
  const materialposter2 = new THREE.MeshBasicMaterial({
     map:textureLoader.load('./assets/Posters/Gwen.jpg'), 
    side: THREE.DoubleSide,
  });
  const poster2 = new THREE.Mesh(geometryposter2, materialposter2);
  poster2.position.y=1.5
  poster2.position.x=-11
  poster2.position.z=-18.9
  poster2.castShadow = true;
  poster2.receiveShadow = true;

  scene.add(poster2);

  //Poster Peter (1)
  const geometryposter3 = new THREE.PlaneGeometry(6, 10, 4);
  const materialposter3 = new THREE.MeshBasicMaterial({
     map:textureLoader.load('./assets/Posters/Peter.jpg'), 
    side: THREE.DoubleSide,
  });
  const poster3 = new THREE.Mesh(geometryposter3, materialposter3);
  poster3.position.y=1.5
  poster3.position.x=11
  poster3.position.z=18.9
  poster3.castShadow = true;
  poster3.receiveShadow = true;

  scene.add(poster3);

  //Poster Peter (2)
  const geometryposter4 = new THREE.PlaneGeometry(6, 10, 4);
  const materialposter4 = new THREE.MeshBasicMaterial({
     map:textureLoader.load('./assets/Posters/Peter.jpg'), 
    side: THREE.DoubleSide,
  });
  const poster4 = new THREE.Mesh(geometryposter4, materialposter4);
  poster4.position.y=1.5
  poster4.position.x=-11
  poster4.position.z=18.9
  poster4.castShadow = true;
  poster4.receiveShadow = true;

  scene.add(poster4);

  //Poster Miles (1)
  const geometryposter5 = new THREE.PlaneGeometry(6, 10, 4);
  const materialposter5 = new THREE.MeshBasicMaterial({
     map:textureLoader.load('./assets/Posters/Miles.png'), 
    side: THREE.DoubleSide,
  });
  const poster5 = new THREE.Mesh(geometryposter5, materialposter5);
  poster5.position.y=1.5
  poster5.position.x=-18.9
  poster5.position.z=-11
  poster5.rotation.y= Math.PI / 2;
  poster5.castShadow = true;
  poster5.receiveShadow = true;

  scene.add(poster5);

  //Poster Miles (2)
  const geometryposter6 = new THREE.PlaneGeometry(6, 10, 4);
  const materialposter6 = new THREE.MeshBasicMaterial({
     map:textureLoader.load('./assets/Posters/Miles.png'), 
    side: THREE.DoubleSide,
  });
  const poster6 = new THREE.Mesh(geometryposter6, materialposter6);
  poster6.position.y=1.5
  poster6.position.x=-18.9
  poster6.position.z=11
  poster6.rotation.y= Math.PI / 2;
  poster6.castShadow = true;
  poster6.receiveShadow = true;

  scene.add(poster6);

  //Peter ()
  const geometryposter7 = new THREE.PlaneGeometry(26, 13, 4);
  const materialposter7 = new THREE.MeshBasicMaterial({
     map:textureLoader.load('./assets/Posters/Peter2.jpg'), 
    side: THREE.DoubleSide,
  });
  const poster7 = new THREE.Mesh(geometryposter7, materialposter7);
  poster7.position.y=2
  poster7.position.x=18.9
  poster7.position.z=40
  poster7.rotation.y= Math.PI / 2;
  poster7.castShadow = true;
  poster7.receiveShadow = true;

  scene.add(poster7);

  //Gwen ()
  const geometryposter8 = new THREE.PlaneGeometry(26, 13, 4);
  const materialposter8 = new THREE.MeshBasicMaterial({
     map:textureLoader.load('./assets/Posters/Gwen2.jpg'), 
    side: THREE.DoubleSide,
  });
  const poster8 = new THREE.Mesh(geometryposter8, materialposter8);
  poster8.position.y=2
  poster8.position.x=18.9
  poster8.position.z=-40
  poster8.rotation.y= Math.PI / 2;
  poster8.castShadow = true;
  poster8.receiveShadow = true;

  scene.add(poster8);

  //Miles ()
  const geometryposter9 = new THREE.PlaneGeometry(26, 13, 4);
  const materialposter9 = new THREE.MeshBasicMaterial({
     map:textureLoader.load('./assets/Posters/Miles2.jpg'), 
    side: THREE.DoubleSide,
  });
  const poster9 = new THREE.Mesh(geometryposter9, materialposter9);
  poster9.position.y=2
  poster9.position.x=-40
  poster9.position.z=18.9
  poster9.castShadow = true;
  poster9.receiveShadow = true;

  scene.add(poster9);


}

function Texto(){

  loader.load( 'https://cdn.skypack.dev/three/examples/fonts/gentilis_bold.typeface.json', function ( font ) {
  
    const geometrytext = new TextGeometry( 'Peter Parker', {
      font: font,
      size: 2,
      height: 0.5,
      curveSegments: 3,
      bevelThickness: 0.5,
      bevelSize: 0.2,
      bevelEnabled: true
    } );
    
    var textMaterial = new THREE.MeshPhongMaterial({ color: 0x000080, specular: 0xffffff });
    
    var texto1 = new THREE.Mesh( geometrytext, textMaterial );
    texto1.position.y=5
    texto1.position.x=15
    texto1.position.z=30
    texto1.rotation.y =Math.PI+Math.PI/3 ;
    texto1.receiveShadow = false;
    
    scene.add(texto1);
    

    const geometrytext2 = new TextGeometry( 'Gwen Stacy', {
      font: font,
      size: 2,
      height: 0.5,
      curveSegments: 4,
      bevelThickness: 0.5,
      bevelSize: 0.2,
      bevelEnabled: true
    } );
    
    var textMaterial2 = new THREE.MeshPhongMaterial({ color: 0xff0080, specular: 0xffffff });
    
    var texto2 = new THREE.Mesh( geometrytext2, textMaterial2 );
    texto2.position.y=5
    texto2.position.x=5
    texto2.position.z=-56
    texto2.rotation.y =5+Math.PI/4 ;
    
    scene.add(texto2);

    const geometrytext3 = new TextGeometry( ' Miles\nMorales', {
      font: font,
      size: 1.5,
      height: 0.5,
      curveSegments: 3,
      bevelThickness: 0.5,
      bevelSize: 0.2,
      bevelEnabled: true
    } );
    
    var textMaterial3 = new THREE.MeshPhongMaterial({ color: 0x000000, specular: 0xff0000 });
    
    var texto3 = new THREE.Mesh( geometrytext3, textMaterial3 );
    texto3.position.y=3
    texto3.position.x=-40
    texto3.position.z=10
    texto3.rotation.y = (5+Math.PI)/4 ;
    
    scene.add(texto3);

  } );

}

function Controles(){
  controls = new PointerLockControls( camera, document.body );

				const blocker = document.getElementById( 'blocker' );
				const instructions = document.getElementById( 'instructions' );

				instructions.addEventListener( 'click', function () {

					controls.lock();
        } );

        controls.addEventListener( 'lock', function () {

					instructions.style.display = 'none';
					blocker.style.display = 'none';

				} );

				controls.addEventListener( 'unlock', function () {

					blocker.style.display = 'block';
					instructions.style.display = '';

				} );

				scene.add( controls.getObject() );

				const onKeyDown = function ( event ) {

					switch ( event.code ) {

						case 'ArrowUp':
						case 'KeyW':
							controls.moveForward (1);
							break;

						case 'ArrowLeft':
						case 'KeyA':
							controls.moveRight (-1);
							break;

						case 'ArrowDown':
						case 'KeyS':
							controls.moveForward (-1);
							break;

						case 'ArrowRight':
						case 'KeyD':
							controls.moveRight (1);
							break;

					}

				};

				const onKeyUp = function ( event ) {

					switch ( event.code ) {

						case 'ArrowUp':
						case 'KeyW':
							controls.moveForward (0);
							break;

						case 'ArrowLeft':
						case 'KeyA':
							controls.moveRight (0);
							break;

						case 'ArrowDown':
						case 'KeyS':
							controls.moveForward (0);
							break;

						case 'ArrowRight':
						case 'KeyD':
							controls.moveRight (0);
							break;

					}

				};

				document.addEventListener( 'keydown', onKeyDown );
				document.addEventListener( 'keyup', onKeyUp );      

}

function SkyBox(){
  const Sky = new THREE.TextureLoader();
    const texture = Sky.load(
      './assets/skybox5.png',
      () => {
        const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
        rt.fromEquirectangularTexture(renderer, texture);
        scene.background = rt.texture;
      });
}

function Modelos(){
  loader1.load(
    './assets/Spider/GwenStacy/scene.gltf',
    function (gltf) {
      Model1 = gltf.scene.children[0];
      Model1.position.y = -5;
      Model1.position.x = 0;
      Model1.position.z = -57;
      Model1.castShadow = true;
      Model1.receiveShadow = true;
      Model1.scale.set(0.035,0.035,0.035)
      scene.add(Model1);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log('Un error ocurrio');
    },
  );
  
 
  loader2.load(
    './assets/Spider/MilesMorales/scene.gltf',
    function (gltf) {
      Model2 = gltf.scene.children[0];
      Model2.position.y = 3;
      Model2.position.x = -48;
      Model2.position.z = 0;
      Model2.rotation.z = Math.PI / 2;
      Model2.castShadow = true;
      Model2.receiveShadow = true;
      Model2.scale.set(4,4,4)
      scene.add(Model2);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log('Un error ocurrio');
    },
  );

  loader3.load(
    './assets/Spider/PeterParker/scene.gltf',
    function (gltf) {
      Model3 = gltf.scene.children[0];
      Model3.position.y = 4
      Model3.position.z = 40;
      Model3.rotation.x = Math.PI / 2;
      Model3.rotation.y = 3.15;
      Model3.castShadow = true;
      Model3.receiveShadow = true;
      Model3.scale.set(0.27,0.27,0.27)
      scene.add(Model3);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log('Un error ocurrio');
    },
  );
}

function Habitacion(){
  //Plano piso (1)
  const textureLoader = new THREE.TextureLoader();
  const geometryplano = new THREE.PlaneGeometry(40, 40, 4);
  const materialplano = new THREE.MeshBasicMaterial({
     map:textureLoader.load('./assets/Piso1.jpg'), 
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

  //Plano techo (1)
  const geometrytecho = new THREE.PlaneGeometry(40, 40, 4);
  const materialtecho = new THREE.MeshPhongMaterial({
    color: 0x800000,
    side: THREE.DoubleSide,
  });
  const techo = new THREE.Mesh(geometrytecho, materialtecho);
  techo.position.y=9
  techo.position.x=0
  techo.position.z=0
  techo.rotation.x = Math.PI / 2;

  scene.add(techo);

  //Plano pared (1)
  const geometryplano1 = new THREE.BoxGeometry(15,14, 2, 4,4,4);
  const materialplano1 = new THREE.MeshPhongMaterial({
    color: 0x2d3323,
    side: THREE.DoubleSide,
  });
  const plane1 = new THREE.Mesh(geometryplano1, materialplano1);
  plane1.position.y=2
  plane1.position.x=12.5
  plane1.position.z=-20

  scene.add(plane1);

  //Plano pared (1_1)
  const geometryplano1_1 = new THREE.BoxGeometry(5,14, 2, 4,4,4);
  const materialplano1_1 = new THREE.MeshPhongMaterial({
    color: 0x2d3323,
    side: THREE.DoubleSide,
  });
  const plane1_1 = new THREE.Mesh(geometryplano1_1, materialplano1_1);
  plane1_1.position.y=2
  plane1_1.position.x=20
  plane1_1.position.z=17
  plane1_1.rotation.y = Math.PI / 2;

  scene.add(plane1_1);

  //Plano pared (1_2)
  const geometryplano1_2 = new THREE.BoxGeometry(5,14, 2, 4,4,4);
  const materialplano1_2 = new THREE.MeshPhongMaterial({
    color: 0x2d3323,
    side: THREE.DoubleSide,
  });
  const plane1_2 = new THREE.Mesh(geometryplano1_2, materialplano1_2);
  plane1_2.position.y=2
  plane1_2.position.x=20
  plane1_2.position.z=-17
  plane1_2.rotation.y = Math.PI / 2;

  scene.add(plane1_2);

  //Plano pared (1_3)
  const geometryplano1_3 = new THREE.BoxGeometry(4,14, 2, 4,4,4);
  const materialplano1_3 = new THREE.MeshPhongMaterial({
    color: 0x2d3323,
    side: THREE.DoubleSide,
  });
  const plane1_3 = new THREE.Mesh(geometryplano1_3, materialplano1_3);
  plane1_3.position.y=2
  plane1_3.position.x=20
  plane1_3.position.z=4.5
  plane1_3.rotation.y = Math.PI / 2;

  scene.add(plane1_3);

  //Plano pared (1_4)
  const geometryplano1_4 = new THREE.BoxGeometry(4,14, 2, 4,4,4);
  const materialplano1_4 = new THREE.MeshPhongMaterial({
    color: 0x2d3323,
    side: THREE.DoubleSide,
  });
  const plane1_4 = new THREE.Mesh(geometryplano1_4, materialplano1_4);
  plane1_4.position.y=2
  plane1_4.position.x=20
  plane1_4.position.z=-4.5
  plane1_4.rotation.y = Math.PI / 2;

  scene.add(plane1_4);

  //Plano pared (1_5)
  const geometryplano1_5 = new THREE.BoxGeometry(40,1.5, 2, 4,4,4);
  const materialplano1_5 = new THREE.MeshPhongMaterial({
    color: 0x2d3323,
    side: THREE.DoubleSide,
  });
  const plane1_5 = new THREE.Mesh(geometryplano1_5, materialplano1_5);
  plane1_5.position.y=5
  plane1_5.position.x=20
  plane1_5.position.z=0
  plane1_5.rotation.y = Math.PI / 2;

  scene.add(plane1_5);

  //Plano pared (1_6)
  const geometryplano1_6 = new THREE.BoxGeometry(40,1.5, 2, 4,4,4);
  const materialplano1_6 = new THREE.MeshPhongMaterial({
    color: 0x2d3323,
    side: THREE.DoubleSide,
  });
  const plane1_6 = new THREE.Mesh(geometryplano1_6, materialplano1_6);
  plane1_6.position.y=9
  plane1_6.position.x=20
  plane1_6.position.z=0
  plane1_6.rotation.y = Math.PI / 2;

  scene.add(plane1_6);

  //Plano pared (1_7)
  const geometryplano1_7 = new THREE.BoxGeometry(40,1.5, 2, 4,4,4);
  const materialplano1_7 = new THREE.MeshPhongMaterial({
    color: 0x2d3323,
    side: THREE.DoubleSide,
  });
  const plane1_7 = new THREE.Mesh(geometryplano1_7, materialplano1_7);
  plane1_7.position.y=-5
  plane1_7.position.x=20
  plane1_7.position.z=0
  plane1_7.rotation.y = Math.PI / 2;

  scene.add(plane1_7);

  //Plano Ventana3 (1)
  const geometryVentanah1_1 = new THREE.BoxGeometry(40,14,1,4,4,4);
  const materialVentanah1_1 = new THREE.MeshPhongMaterial({
    color: 0xa0a0a0, transparent: true, opacity: 0.2,
    side: THREE.DoubleSide,
  });
  const Ventanah1_1 = new THREE.Mesh(geometryVentanah1_1, materialVentanah1_1);
  Ventanah1_1.position.y=2
  Ventanah1_1.position.x=20
  Ventanah1_1.position.z=0
  Ventanah1_1.rotation.y =Math.PI / 2 ;

  scene.add(Ventanah1_1);

  //Plano pared.1 (1)
  const geometryplano2 = new THREE.BoxGeometry(15,14, 2, 4,4,4);
  const materialplano2 = new THREE.MeshPhongMaterial({
    color: 0x2d3323,
    side: THREE.DoubleSide,
  });
  const plane2 = new THREE.Mesh(geometryplano2, materialplano2);
  plane2.position.y=2
  plane2.position.x=-12.5
  plane2.position.z=-20
  
  scene.add(plane2);
  
  //Plano pared2 (1)
  const geometryplane2_1 = new THREE.BoxGeometry(16,4,2,4,4,4);
  const materialplane2_1 = new THREE.MeshPhongMaterial({
    color: 0x2d3323,
    side: THREE.DoubleSide,
  });
  const plane2_1 = new THREE.Mesh(geometryplane2_1, materialplane2_1);
  plane2_1.position.y=7
  plane2_1.position.x=0
  plane2_1.position.z=-20

  scene.add(plane2_1);

  //Plano pared3.1 (1)
  const geometryplano3 = new THREE.BoxGeometry(15,14, 2, 4,4,4);
  const materialplano3 = new THREE.MeshPhongMaterial({
    color: 0x2d3323,
    side: THREE.DoubleSide,
  });
  const plane3 = new THREE.Mesh(geometryplano3, materialplano3);
  plane3.position.y=2
  plane3.position.x=12.5
  plane3.position.z=20

  scene.add(plane3);

  //Plano pared3.2 (1)
  const geometryplano4 = new THREE.BoxGeometry(15,14, 2, 4,4,4);
  const materialplano4 = new THREE.MeshPhongMaterial({
    color: 0x2d3323,
    side: THREE.DoubleSide,
  });
  const plane4 = new THREE.Mesh(geometryplano4, materialplano4);
  plane4.position.y=2
  plane4.position.x=-12.5
  plane4.position.z=20

  scene.add(plane4);

  //Plano pared3.3 (1)
  const geometryplane4_1 = new THREE.BoxGeometry(16,4,2,4,4,4);
  const materialplane4_1 = new THREE.MeshPhongMaterial({
    color: 0x2d3323,
    side: THREE.DoubleSide,
  });
  const plane4_1 = new THREE.Mesh(geometryplane4_1, materialplane4_1);
  plane4_1.position.y=7
  plane4_1.position.x=0
  plane4_1.position.z=20

  scene.add(plane4_1);


  //Plano pared4.1 (1)
  const geometryplano5 = new THREE.BoxGeometry(15,14, 2, 4,4,4);
  const materialplano5 = new THREE.MeshPhongMaterial({
    color: 0x2d3323,
    side: THREE.DoubleSide,
  });
  const plane5 = new THREE.Mesh(geometryplano5, materialplano5);
  plane5.position.y=2
  plane5.position.x=-20
  plane5.position.z=12.5
  plane5.rotation.y = Math.PI / 2;

  scene.add(plane5);

  //Plano pared4.2 (1)
  const geometryplano6 = new THREE.BoxGeometry(15,14, 2, 4,4,4);
  const materialplano6 = new THREE.MeshPhongMaterial({
    color: 0x2d3323,
    side: THREE.DoubleSide,
  });
  const plane6 = new THREE.Mesh(geometryplano6, materialplano6);
  plane6.position.y=2
  plane6.position.x=-20
  plane6.position.z=-12.5
  plane6.rotation.y = Math.PI / 2;

  scene.add(plane6);

  //Plano pared4.3 (1)
  const geometryplane6_1 = new THREE.BoxGeometry(16,4,2,4,4,4);
  const materialplane6_1 = new THREE.MeshPhongMaterial({
    color: 0x2d3323,
    side: THREE.DoubleSide,
  });
  const plane6_1 = new THREE.Mesh(geometryplane6_1, materialplane6_1);
  plane6_1.position.y=7
  plane6_1.position.x=-20
  plane6_1.position.z=0
  plane6_1.rotation.y = Math.PI / 2;

  scene.add(plane6_1);

  //Habitacion 2
  //Miles
  //Plano piso (2)
  const geometryplanoh2 = new THREE.PlaneGeometry(40, 40, 4);
  const materialplanoh2 = new THREE.MeshBasicMaterial({
    map:textureLoader.load('./assets/Piso1.jpg'), 
    side: THREE.DoubleSide,
  });
  const planeh2 = new THREE.Mesh(geometryplanoh2, materialplanoh2);
  planeh2.position.y=-5
  planeh2.position.x=-40
  planeh2.position.z=0
  planeh2.rotation.x = Math.PI / 2;

  scene.add(planeh2);

  //Stand
  const geometryStand2 = new THREE.CylinderGeometry( 5, 5, 1, 32 );
  const materialStand2 = new THREE.MeshPhongMaterial( {color: 0x34495e} );
  const Stand2 = new THREE.Mesh( geometryStand2, materialStand2 );
  Stand2.position.set(-48,-5,0)
  scene.add( Stand2 );

  //Plano techo (2)
  const geometrytechoh2 = new THREE.PlaneGeometry(40, 40, 4);
  const materialtechoh2 = new THREE.MeshPhongMaterial({
    color: 0xa52a2a,
    side: THREE.DoubleSide,
  });
  const techoh2 = new THREE.Mesh(geometrytechoh2, materialtechoh2);
  techoh2.position.y=9
  techoh2.position.x=-40
  techoh2.position.z=0
  techoh2.rotation.x = Math.PI / 2;

  scene.add(techoh2);

  //Plano pared (1)
  const geometryplano1h2 = new THREE.BoxGeometry(40,14,2,4,4,4);
  const materialplano1h2 = new THREE.MeshPhongMaterial({
    color: 0x7d8471,
    side: THREE.DoubleSide,
  });
  const plane1h2 = new THREE.Mesh(geometryplano1h2, materialplano1h2);
  plane1h2.position.y=2
  plane1h2.position.x=-40
  plane1h2.position.z=-20

  scene.add(plane1h2);

  //Plano pared2 (1)
  const geometryplano2h2 = new THREE.BoxGeometry(12,14,2,4,4,4);
  const materialplano2h2 = new THREE.MeshPhongMaterial({
    color: 0x8b8c7a,
    side: THREE.DoubleSide,
  });
  const plane2h2 = new THREE.Mesh(geometryplano2h2, materialplano2h2);
  plane2h2.position.y=2
  plane2h2.position.x=-60
  plane2h2.position.z=-14
  plane2h2.rotation.y =Math.PI / 2 ;

  scene.add(plane2h2);

  //Plano pared2 (1)
  const geometryplano2h2_1 = new THREE.BoxGeometry(12,14,2,4,4,4);
  const materialplano2h2_1 = new THREE.MeshPhongMaterial({
    color: 0x8b8c7a,
    side: THREE.DoubleSide,
  });
  const plane2h2_1 = new THREE.Mesh(geometryplano2h2_1, materialplano2h2_1);
  plane2h2_1.position.y=2
  plane2h2_1.position.x=-60
  plane2h2_1.position.z=14
  plane2h2_1.rotation.y =Math.PI / 2 ;

  scene.add(plane2h2_1);

  //Plano Ventana (1)
  const geometryVentanah2 = new THREE.BoxGeometry(16,3,2,4,4,4);
  const materialVentanah2 = new THREE.MeshPhongMaterial({
    color: 0x8b8c7a,
    side: THREE.DoubleSide,
  });
  const Ventanah2 = new THREE.Mesh(geometryVentanah2, materialVentanah2);
  Ventanah2.position.y=-3.5
  Ventanah2.position.x=-60
  Ventanah2.position.z=0
  Ventanah2.rotation.y =Math.PI / 2 ;

  scene.add(Ventanah2);
  
  //Plano Ventana2 (1)
  const geometryVentanah2_1 = new THREE.BoxGeometry(16,3,2,4,4,4);
  const materialVentanah2_1 = new THREE.MeshPhongMaterial({
    color: 0x8b8c7a,
    side: THREE.DoubleSide,
  });
  const Ventanah2_1 = new THREE.Mesh(geometryVentanah2_1, materialVentanah2_1);
  Ventanah2_1.position.y=7.5
  Ventanah2_1.position.x=-60
  Ventanah2_1.position.z=0
  Ventanah2_1.rotation.y =Math.PI / 2 ;

  scene.add(Ventanah2_1);

  //Plano Ventana3 (1)
  const geometryVentanah2_3 = new THREE.BoxGeometry(16,8,1,4,4,4);
  const materialVentanah2_3 = new THREE.MeshPhongMaterial({
    color: 0xa0a0a0, transparent: true, opacity: 0.2,
    side: THREE.DoubleSide,
  });
  const Ventanah2_3 = new THREE.Mesh(geometryVentanah2_3, materialVentanah2_3);
  Ventanah2_3.position.y=2
  Ventanah2_3.position.x=-60
  Ventanah2_3.position.z=0
  Ventanah2_3.rotation.y =Math.PI / 2 ;

  scene.add(Ventanah2_3);

  //Plano pared3 (1)
  const geometryplano3h2 = new THREE.BoxGeometry(40,14,2,4,4,4);
  const materialplano3h2 = new THREE.MeshPhongMaterial({
    color: 0x7d8471,
    side: THREE.DoubleSide,
  });
  const plane3h2 = new THREE.Mesh(geometryplano3h2, materialplano3h2);
  plane3h2.position.y=2
  plane3h2.position.x=-40
  plane3h2.position.z=20

  scene.add(plane3h2);

  //Habitacion 3
  //Peter Parker
  //Plano piso (3)
  const geometryplanoh3 = new THREE.PlaneGeometry(40, 40, 4);
  const materialplanoh3 = new THREE.MeshBasicMaterial({
    map:textureLoader.load('./assets/Piso1.jpg'), 
    side: THREE.DoubleSide,
  });
  const planeh3 = new THREE.Mesh(geometryplanoh3, materialplanoh3);
  planeh3.position.y=-5
  planeh3.position.x=0
  planeh3.position.z=40
  planeh3.rotation.x = Math.PI / 2;

  scene.add(planeh3);

  //Stand
  const geometryStand1 = new THREE.CylinderGeometry( 5, 5, 1, 32 );
  const materialStand1 = new THREE.MeshPhongMaterial( {color: 0x34495e} );
  const Stand1 = new THREE.Mesh( geometryStand1, materialStand1 );
  Stand1.position.set(1,-5,40)
  scene.add( Stand1 );

  //Plano techo (3)
  const geometrytechoh3 = new THREE.PlaneGeometry(40, 40, 4);
  const materialtechoh3 = new THREE.MeshPhongMaterial({
    color: 0xa52a2a,
    side: THREE.DoubleSide,
  });
  const techoh3 = new THREE.Mesh(geometrytechoh3, materialtechoh3);
  techoh3.position.y=9
  techoh3.position.x=0
  techoh3.position.z=40
  techoh3.rotation.x = Math.PI / 2;

  scene.add(techoh3);

  //Plano pared (1)
  const geometryplano1h3 = new THREE.BoxGeometry(40,14,2,4,4,4);
  const materialplano1h3 = new THREE.MeshPhongMaterial({
    color: 0x7d8471,
    side: THREE.DoubleSide,
  });
  const plane1h3 = new THREE.Mesh(geometryplano1h3, materialplano1h3);
  plane1h3.position.y=2
  plane1h3.position.x=-20
  plane1h3.position.z=40
  plane1h3.rotation.y =Math.PI / 2 ;

  scene.add(plane1h3);

  //Plano pared2 (1)
  const geometryplano2h3 = new THREE.BoxGeometry(40,14,2,4,4,4);
  const materialplano2h3 = new THREE.MeshPhongMaterial({
    color: 0x7d8471,
    side: THREE.DoubleSide,
  });
  const plane2h3 = new THREE.Mesh(geometryplano2h3, materialplano2h3);
  plane2h3.position.y=2
  plane2h3.position.x=20
  plane2h3.position.z=40
  plane2h3.rotation.y =Math.PI / 2 ;

  scene.add(plane2h3);

  //Plano pared3 (1)
  const geometryplano3h3 = new THREE.BoxGeometry(12,14,2,4,4,4);
  const materialplano3h3 = new THREE.MeshPhongMaterial({
    color: 0x8b8c7a,
    side: THREE.DoubleSide,
  });
  const plane3h3 = new THREE.Mesh(geometryplano3h3, materialplano3h3);
  plane3h3.position.y=2
  plane3h3.position.x=14
  plane3h3.position.z=60

  scene.add(plane3h3);

  //Plano pared3_1 (1)
  const geometryplano3h3_1 = new THREE.BoxGeometry(12,14,2,4,4,4);
  const materialplano3h3_1 = new THREE.MeshPhongMaterial({
    color: 0x8b8c7a,
    side: THREE.DoubleSide,
  });
  const plane3h3_1 = new THREE.Mesh(geometryplano3h3_1, materialplano3h3_1);
  plane3h3_1.position.y=2
  plane3h3_1.position.x=-14
  plane3h3_1.position.z=60

  scene.add(plane3h3_1);

  //Plano Ventana (1)
  const geometryVentanah3 = new THREE.BoxGeometry(16,3,2,4,4,4);
  const materialVentanah3 = new THREE.MeshPhongMaterial({
    color: 0x8b8c7a,
    side: THREE.DoubleSide,
  });
  const Ventanah3 = new THREE.Mesh(geometryVentanah3, materialVentanah3);
  Ventanah3.position.y=-3.5
  Ventanah3.position.x=0
  Ventanah3.position.z=60

  scene.add(Ventanah3);
  
  //Plano Ventana2 (1)
  const geometryVentanah3_1 = new THREE.BoxGeometry(16,3,2,4,4,4);
  const materialVentanah3_1 = new THREE.MeshPhongMaterial({
    color: 0x8b8c7a,
    side: THREE.DoubleSide,
  });
  const Ventanah3_1 = new THREE.Mesh(geometryVentanah3_1, materialVentanah3_1);
  Ventanah3_1.position.y=7.5
  Ventanah3_1.position.x=0
  Ventanah3_1.position.z=60

  scene.add(Ventanah3_1);

  //Plano Ventana3 (1)
  const geometryVentanah3_3 = new THREE.BoxGeometry(16,8,1,4,4,4);
  const materialVentanah3_3 = new THREE.MeshPhongMaterial({
    color: 0xa0a0a0, transparent: true, opacity: 0.2,
    side: THREE.DoubleSide,
  });
  const Ventanah3_3 = new THREE.Mesh(geometryVentanah3_3, materialVentanah3_3);
  Ventanah3_3.position.y=2
  Ventanah3_3.position.x=0
  Ventanah3_3.position.z=60

  scene.add(Ventanah3_3);

  //Habitacion 4
  //Gwen Stacy
  //Plano piso (4)
  const geometryplanoh4 = new THREE.PlaneGeometry(40, 40, 4);
  const materialplanoh4 = new THREE.MeshBasicMaterial({
    map:textureLoader.load('./assets/Piso1.jpg'), 
    side: THREE.DoubleSide,
  });
  const planeh4 = new THREE.Mesh(geometryplanoh4, materialplanoh4);
  planeh4.position.y=-5
  planeh4.position.x=0
  planeh4.position.z=-40
  planeh4.rotation.x = Math.PI / 2;

  scene.add(planeh4);

  //Plano techo (4)
  const geometrytechoh4 = new THREE.PlaneGeometry(40, 40, 4);
  const materialtechoh4 = new THREE.MeshPhongMaterial({
    color: 0xa52a2a,
    side: THREE.DoubleSide,
  });
  const techoh4 = new THREE.Mesh(geometrytechoh4, materialtechoh4);
  techoh4.position.y=9
  techoh4.position.x=0
  techoh4.position.z=-40
  techoh4.rotation.x = Math.PI / 2;

  scene.add(techoh4);

  //Plano pared (1)
  const geometryplano3h4 = new THREE.BoxGeometry(5,14,2,4,4,4);
  const materialplano3h4 = new THREE.MeshPhongMaterial({
    color: 0x8b8c7a,
    side: THREE.DoubleSide,
  });
  const plane3h4 = new THREE.Mesh(geometryplano3h4, materialplano3h4);
  plane3h4.position.y=2
  plane3h4.position.x=-17.5
  plane3h4.position.z=-60

  scene.add(plane3h4);

  //Plano pared (1)
  const geometryplano3h4_1 = new THREE.BoxGeometry(12,14,2,4,4,4);
  const materialplano3h4_1 = new THREE.MeshPhongMaterial({
    color: 0x8b8c7a,
    side: THREE.DoubleSide,
  });
  const plane3h4_1 = new THREE.Mesh(geometryplano3h4_1, materialplano3h4_1);
  plane3h4_1.position.y=2
  plane3h4_1.position.x=0
  plane3h4_1.position.z=-60

  scene.add(plane3h4_1);

  //Plano pared (1)
  const geometryplano3h4_2 = new THREE.BoxGeometry(5,14,2,4,4,4);
  const materialplano3h4_2 = new THREE.MeshPhongMaterial({
    color: 0x8b8c7a,
    side: THREE.DoubleSide,
  });
  const plane3h4_2 = new THREE.Mesh(geometryplano3h4_2, materialplano3h4_2);
  plane3h4_2.position.y=2
  plane3h4_2.position.x=17.5
  plane3h4_2.position.z=-60

  scene.add(plane3h4_2);

  //Plano Ventana (1)
  const geometryVentanah4 = new THREE.BoxGeometry(40,1.5,2,4,4,4);
  const materialVentanah4 = new THREE.MeshPhongMaterial({
    color: 0x8b8c7a,
    side: THREE.DoubleSide,
  });
  const Ventanah4 = new THREE.Mesh(geometryVentanah4, materialVentanah4);
  Ventanah4.position.y=-4.5
  Ventanah4.position.x=0
  Ventanah4.position.z=-60

  scene.add(Ventanah4);
  
  //Plano Ventana2 (1)
  const geometryVentanah4_1 = new THREE.BoxGeometry(40,1.5,2,4,4,4);
  const materialVentanah4_1 = new THREE.MeshPhongMaterial({
    color: 0x8b8c7a,
    side: THREE.DoubleSide,
  });
  const Ventanah4_1 = new THREE.Mesh(geometryVentanah4_1, materialVentanah4_1);
  Ventanah4_1.position.y=8.5
  Ventanah4_1.position.x=0
  Ventanah4_1.position.z=-60

  scene.add(Ventanah4_1);

  //Plano Ventana3 (1)
  const geometryVentanah4_3 = new THREE.BoxGeometry(9,12,1,4,4,4);
  const materialVentanah4_3 = new THREE.MeshPhongMaterial({
    color: 0xa0a0a0, transparent: true, opacity: 0.2,
    side: THREE.DoubleSide,
  });
  const Ventanah4_3 = new THREE.Mesh(geometryVentanah4_3, materialVentanah4_3);
  Ventanah4_3.position.y=2
  Ventanah4_3.position.x=-10.5
  Ventanah4_3.position.z=-60

  scene.add(Ventanah4_3);

  //Plano Ventana3 (1)
  const geometryVentanah4_4 = new THREE.BoxGeometry(9,12,1,4,4,4);
  const materialVentanah4_4 = new THREE.MeshPhongMaterial({
    color: 0xa0a0a0, transparent: true, opacity: 0.2,
    side: THREE.DoubleSide,
  });
  const Ventanah4_4 = new THREE.Mesh(geometryVentanah4_4, materialVentanah4_4);
  Ventanah4_4.position.y=2
  Ventanah4_4.position.x=10.5
  Ventanah4_4.position.z=-60

  scene.add(Ventanah4_4);

  //Plano pared (2)
  const geometryplano1h4 = new THREE.BoxGeometry(40,14,2,4,4,4);
  const materialplano1h4 = new THREE.MeshPhongMaterial({
    color: 0x7d8471,
    side: THREE.DoubleSide,
  });
  const plane1h4 = new THREE.Mesh(geometryplano1h4, materialplano1h4);
  plane1h4.position.y=2
  plane1h4.position.x=-20
  plane1h4.position.z=-40
  plane1h4.rotation.y =Math.PI / 2 ;

  scene.add(plane1h4);

  //Plano pared (3)
  const geometryplano2h4 = new THREE.BoxGeometry(40,14,2,4,4,4);
  const materialplano2h4 = new THREE.MeshPhongMaterial({
    color: 0x7d8471,
    side: THREE.DoubleSide,
  });
  const plane2h4 = new THREE.Mesh(geometryplano2h4, materialplano2h4);
  plane2h4.position.y=2
  plane2h4.position.x=20
  plane2h4.position.z=-40
  plane2h4.rotation.y =Math.PI / 2 ;

  scene.add(plane2h4);

}

function Audio(){
  var audioLoader = new THREE.AudioLoader();
  var listener = new THREE.AudioListener();
  var audio = new THREE.Audio(listener);
  audioLoader.load('./assets/SunFlower.mp3', function(buffer) {
      audio.setBuffer(buffer);
      audio.setLoop(true);
      audio.setVolume(0.25);
      audio.play();
  });
}

function Videos(){
 //Video1
 const video1 = document.getElementById( 'Video1' );
 const videoTexture1 = new THREE.VideoTexture(video1);
 const videoMaterial1 =  new THREE.MeshBasicMaterial( {map: videoTexture1, side: THREE.DoubleSide, toneMapped: false, } );

 const screen1 = new THREE.PlaneGeometry(24, 12, 4);
 const videoScreen1 = new THREE.Mesh(screen1, videoMaterial1);

 videoScreen1.position.set(-18.5,2,-40);
 videoScreen1.rotation.y = Math.PI / 2;
 scene.add(videoScreen1);

 //Video2
 const video2 = document.getElementById( 'Video2' );
 const videoTexture2 = new THREE.VideoTexture(video2);
 const videoMaterial2 =  new THREE.MeshBasicMaterial( {map: videoTexture2, side: THREE.DoubleSide, toneMapped: false} );

 
 const screen2 = new THREE.PlaneGeometry(24, 12, 4);
 const videoScreen2 = new THREE.Mesh(screen2, videoMaterial2);
 
 videoScreen2.position.set(-18.5,2,40);
 videoScreen2.rotation.y = Math.PI / 2;
 scene.add(videoScreen2);

 //Video3
 const video3 = document.getElementById( 'Video3' );
 const videoTexture3 = new THREE.VideoTexture(video3);
 const videoMaterial3 =  new THREE.MeshBasicMaterial( {map: videoTexture3, side: THREE.DoubleSide, toneMapped: false} );

 const screen3 = new THREE.PlaneGeometry(24, 12, 4);
 const videoScreen3 = new THREE.Mesh(screen3, videoMaterial3);
 
 videoScreen3.position.set(-40,2,-18.5);
 
 scene.add(videoScreen3);
}

function setupLights() {
  const ambient = new THREE.AmbientLight(0xffffff, 0.27);
  scene.add(ambient);

  const PointLight = new THREE.PointLight(0xf6f6f6, 1, 100 ); 
  PointLight.position.set( -10, 3, 35);
  scene.add( PointLight );
  
  const PointLight2 = new THREE.PointLight(0xf6f6f6, 1, 100 ); 
  PointLight2.position.set( 0, 7, -25);
  scene.add( PointLight2 );

  const PointLight3 = new THREE.PointLight(0xf6f6f6, 1, 100 ); 
  PointLight3.position.set( -40, 5, 0);
  scene.add( PointLight3 );

  const PointLight4 = new THREE.PointLight(0xf6f6f6, 1, 100 ); 
  PointLight4.position.set( 0, 8, 0);
  scene.add( PointLight4 );

}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera); 

}