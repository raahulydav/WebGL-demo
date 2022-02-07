import "./style.css";
import * as THREE from "three";

// scene
const scene = new THREE.Scene();

// object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// size
const size = {
  width: 800,
  height: 500,
};

// camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 2;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera);

//  renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(size.width, size.height);

renderer.render(scene, camera);
