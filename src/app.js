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

  camera.position.z = 100;
  camera.position.y = 70;
  camera.position.x = -70;

  //camera.position.set(0,5,56);

  //cubo
  const geometry = new THREE.BoxGeometry(5, 5, 5, 2, 2, 2);
  const material = new THREE.MeshBasicMaterial({color: palette.boxColor, side: THREE.DoubleSide, wireframe: true});
  const cube = new THREE.Mesh(geometry, material);

  cube.position.y=5
  cube.position.x=0
  cube.position.z=60
  scene.add(cube);
  console.log(objects);

  //Plano piso (1)
  const geometryplano = new THREE.PlaneGeometry(60, 60, 4);
  const materialplano = new THREE.MeshBasicMaterial({
    color: 0x5f9ea0,
    side: THREE.DoubleSide,
  });
  const plane = new THREE.Mesh(geometryplano, materialplano);
  plane.position.y=0
  plane.position.x=0
  plane.position.z=0
  plane.rotation.x = Math.PI / 2;

  scene.add(plane);

  //Plano pared (1)
  const geometryplano1 = new THREE.PlaneGeometry(60, 10, 4);
  const materialplano1 = new THREE.MeshBasicMaterial({
    color: 0xf0ffff,
    side: THREE.DoubleSide,
  });
  const plane1 = new THREE.Mesh(geometryplano1, materialplano1);
  plane1.position.y=5
  plane1.position.x=0
  plane1.position.z=-30
  //plane.rotation.x = Math.PI / 2;

  scene.add(plane1);

  //Plano pared2 (1)
  const geometryplano2 = new THREE.PlaneGeometry(60, 10, 4);
  const materialplano2 = new THREE.MeshBasicMaterial({
    color: 0xf0ffff,
    side: THREE.DoubleSide,
  });
  const plane2 = new THREE.Mesh(geometryplano2, materialplano2);
  plane2.position.y=5
  plane2.position.x=30
  plane2.position.z=0
  plane2.rotation.y =Math.PI / 2 ;

  scene.add(plane2);

  //Plano pared3.1 (1)
  const geometryplano3 = new THREE.PlaneGeometry(28, 10, 4);
  const materialplano3 = new THREE.MeshBasicMaterial({
    color: 0xf0ffff,
    side: THREE.DoubleSide,
  });
  const plane3 = new THREE.Mesh(geometryplano3, materialplano3);
  plane3.position.y=5
  plane3.position.x=17
  plane3.position.z=30
  //plane.rotation.x = Math.PI / 2;

  scene.add(plane3);

  //Plano pared3.2 (1)
  const geometryplano4 = new THREE.PlaneGeometry(28, 10, 4);
  const materialplano4 = new THREE.MeshBasicMaterial({
    color: 0xf0ffff,
    side: THREE.DoubleSide,
  });
  const plane4 = new THREE.Mesh(geometryplano4, materialplano4);
  plane4.position.y=5
  plane4.position.x=-17
  plane4.position.z=30
  //plane.rotation.x = Math.PI / 2;

  scene.add(plane4);

  //Plano pared4.1 (1)
  const geometryplano5 = new THREE.PlaneGeometry(28, 10, 4);
  const materialplano5 = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
  });
  const plane5 = new THREE.Mesh(geometryplano5, materialplano5);
  plane5.position.y=5
  plane5.position.x=-30
  plane5.position.z=17
  plane5.rotation.y = Math.PI / 2;

  scene.add(plane5);

  //Plano pared4.2 (1)
  const geometryplano6 = new THREE.PlaneGeometry(28, 10, 4);
  const materialplano6 = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
  });
  const plane6 = new THREE.Mesh(geometryplano6, materialplano6);
  plane6.position.y=5
  plane6.position.x=-30
  plane6.position.z=-17
  plane6.rotation.y = Math.PI / 2;

  scene.add(plane6);

  //Habitacion 2
  //Plano piso (1)
  const geometryplanoh2 = new THREE.PlaneGeometry(60, 60, 4);
  const materialplanoh2 = new THREE.MeshBasicMaterial({
    color: palette.planeColor,
    side: THREE.DoubleSide,
  });
  const planeh2 = new THREE.Mesh(geometryplanoh2, materialplanoh2);
  planeh2.position.y=0
  planeh2.position.x=-60
  planeh2.position.z=0
  planeh2.rotation.x = Math.PI / 2;

  scene.add(planeh2);

  //Plano pared (1)
  const geometryplano1h2 = new THREE.PlaneGeometry(60, 10, 4);
  const materialplano1h2 = new THREE.MeshBasicMaterial({
    color: 0xf0ffff,
    side: THREE.DoubleSide,
  });
  const plane1h2 = new THREE.Mesh(geometryplano1h2, materialplano1h2);
  plane1h2.position.y=5
  plane1h2.position.x=-60
  plane1h2.position.z=-30
  //plane.rotation.x = Math.PI / 2;

  scene.add(plane1h2);

  //Plano pared2 (1)
  const geometryplano2h2 = new THREE.PlaneGeometry(60, 10, 4);
  const materialplano2h2 = new THREE.MeshBasicMaterial({
    color: 0xf0ffff,
    side: THREE.DoubleSide,
  });
  const plane2h2 = new THREE.Mesh(geometryplano2h2, materialplano2h2);
  plane2h2.position.y=5
  plane2h2.position.x=-90
  plane2h2.position.z=0
  plane2h2.rotation.y =Math.PI / 2 ;

  scene.add(plane2h2);

  //Plano pared3 (1)
  const geometryplano3h2 = new THREE.PlaneGeometry(60, 10, 4);
  const materialplano3h2 = new THREE.MeshBasicMaterial({
    color: 0xf0ffff,
    side: THREE.DoubleSide,
  });
  const plane3h2 = new THREE.Mesh(geometryplano3h2, materialplano3h2);
  plane3h2.position.y=5
  plane3h2.position.x=-60
  plane3h2.position.z=30
  //plane.rotation.x = Math.PI / 2;

  scene.add(plane3h2);

  //Habitacion 3
  //Plano piso (1)
  const geometryplanoh3 = new THREE.PlaneGeometry(60, 60, 4);
  const materialplanoh3 = new THREE.MeshBasicMaterial({
    color: 0x808080,
    side: THREE.DoubleSide,
  });
  const planeh3 = new THREE.Mesh(geometryplanoh3, materialplanoh3);
  planeh3.position.y=0
  planeh3.position.x=0
  planeh3.position.z=60
  planeh3.rotation.x = Math.PI / 2;

  scene.add(planeh3);

  //Plano pared (1)
  const geometryplano1h3 = new THREE.PlaneGeometry(60, 10, 4);
  const materialplano1h3 = new THREE.MeshBasicMaterial({
    color: 0xf0ffff,
    side: THREE.DoubleSide,
  });
  const plane1h3 = new THREE.Mesh(geometryplano1h3, materialplano1h3);
  plane1h3.position.y=5
  plane1h3.position.x=-30
  plane1h3.position.z=60
  plane1h3.rotation.y =Math.PI / 2 ;

  scene.add(plane1h3);

  //Plano pared2 (1)
  const geometryplano2h3 = new THREE.PlaneGeometry(60, 10, 4);
  const materialplano2h3 = new THREE.MeshBasicMaterial({
    color: 0xf0ffff,
    side: THREE.DoubleSide,
  });
  const plane2h3 = new THREE.Mesh(geometryplano2h3, materialplano2h3);
  plane2h3.position.y=5
  plane2h3.position.x=30
  plane2h3.position.z=60
  plane2h3.rotation.y =Math.PI / 2 ;

  scene.add(plane2h3);

  //Plano pared3 (1)
  const geometryplano3h3 = new THREE.PlaneGeometry(60, 10, 4);
  const materialplano3h3 = new THREE.MeshBasicMaterial({
    color: 0xf0ffff,
    side: THREE.DoubleSide,
  });
  const plane3h3 = new THREE.Mesh(geometryplano3h3, materialplano3h3);
  plane3h3.position.y=5
  plane3h3.position.x=0
  plane3h3.position.z=90
  //plane.rotation.x = Math.PI / 2;

  scene.add(plane3h3);

  
  // Controls
  new OrbitControls(camera, renderer.domElement);

  //Movimiento

 window.addEventListener('keydown',(e)=>{
   let tecla=e.key
    console.log(e.key)
      switch (tecla) {
        case 'ArrowRight':
          cube.position.x=cube.position.x+0.5;
        break;
        case 'ArrowLeft':
          cube.position.x=cube.position.x-0.5;
        break;
        case 'ArrowUp':
          cube.position.z=cube.position.z-0.5;
        break;
        case 'ArrowDown':
          cube.position.z=cube.position.z+0.5;
        break;
       case 'd':
        cube.position.x=cube.position.x-0.5;
       break;
       case 'a':
        cube.position.x=cube.position.x+0.5;
       break;
       case 'w':
        cube.position.z=cube.position.z-0.5;
       break;
       case 's':
        cube.position.z=cube.position.z+0.5;
       break;
       case 'q':
        cube.rotation.y=cube.rotation.y-0.5;
        break;
        case 'e':
          cube.rotation.y=cube.rotation.y+0.5;
        break;
       default:
       break;
     }
 })

 /* window.addEventListener('keydown',(e)=>{
  let tecla=e.key
   console.log(e.key)
     switch (tecla) {
       case 'ArrowRight':
         camera.position.x=camera.position.x+0.5;
       break;
       case 'ArrowLeft':
        camera.position.x=camera.position.x-0.5;
       break;
       case 'ArrowUp':
        camera.position.z=camera.position.z-0.5;
       break;
       case 'ArrowDown':
        camera.position.z=camera.position.z+0.5;
       break;
      case 'd':
        camera.position.x=camera.position.x-0.5;
      break;
      case 'a':
        camera.position.x=camera.position.x+0.5;
      break;
      case 'w':
        camera.position.z=camera.position.z-0.5;
      break;
      case 's':
        camera.position.z=camera.position.z+0.5;
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
}) */

  
  animate();
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

