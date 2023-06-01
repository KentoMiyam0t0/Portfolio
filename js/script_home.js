//Carousel gallery
const carousel1 = document.querySelector('#works .works-wrap1');
const carousel2 = document.querySelector('#works .works-wrap2');
const carousel1Y = carousel1.getBoundingClientRect().top;
const carousel2Y = carousel2.getBoundingClientRect().top;

function animateCarousels() {
  const scrollY = window.scrollY;
  if (scrollY > carousel1Y) {
    carousel1.style.right = 6 + ((scrollY - carousel1Y) / 40) + "vw";
  }
  if (scrollY > carousel2Y) {
    carousel2.style.right = 38 - ((scrollY - carousel2Y) / 40) + "vw";
  }
}

function handleScroll() {
  window.requestAnimationFrame(animateCarousels);
}

window.addEventListener('scroll', handleScroll);

//Typewritter
const typewriter = (param) => {
    let el = document.querySelector(param.el);
    let speed = param.speed;
    let string = param.string.split("");

    string.forEach((char, index) => {
        setTimeout(() => {
            el.textContent += char;
        }, speed * index);
    });
};

typewriter({
    el: "#typewriter",
    speed: 100,
    string: "Don't fear inaction more than failure."
});
setTimeout(() => {
    typewriter({
        el: "#author",
        speed: 100,
        string: "Kento Miyamoto"
    });
}, 4100);

//Particle
let camera, scene, renderer, particles, particle, material, particleCount, points;
let xSpeed = 0.0001;
let ySpeed = 0.00001;

function init() {
  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight - 100;

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2('black', 0.001);

  camera = new THREE.PerspectiveCamera(75, winWidth / winHeight, 1, 1000);
  camera.position.z = 500;

  material = new THREE.PointsMaterial({
    color: 0x3D405B,
    size: 8,
    transparent: false,
    blending: THREE.AdditiveBlending
  });

  particleCount = 5000;
  particles = new THREE.Geometry();

  for (let i = 0; i < particleCount; i++) {
    const px = Math.random() * 2000 - 1000;
    const py = Math.random() * 2000 - 1000;
    const pz = Math.random() * 2000 - 1000;
    particle = new THREE.Vector3(px, py, pz);
    particle.velocity = new THREE.Vector3(0, Math.random(), 0);
    particles.vertices.push(particle);
  }

  points = new THREE.Points(particles, material);
  points.sortParticles = true;
  scene.add(points);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(winWidth, winHeight);
  renderer.setClearColor('#fff', 1);
  document.getElementById('canvas').appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);

  scene.rotation.y += xSpeed;

  for (let i = 0; i < particleCount; i++) {
    const particle = particles.vertices[i];

    if (particle.y > 1000) {
      particle.y = -1000;
      particle.velocity.y = Math.random();
    }
    particle.velocity.y += Math.random() * ySpeed;

    particle.add(particle.velocity);
  }
  points.geometry.verticesNeedUpdate = true;

  render();
}

function render() {
  camera.lookAt(scene.position);
  renderer.render(scene, camera);
}

window.addEventListener('DOMContentLoaded', function() {
  init();
  animate();
});
