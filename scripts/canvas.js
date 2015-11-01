
var camera, scene, renderer,
particles = [];

initCanvas();
function initCanvas() {
  var domElement = document.getElementById('canvas-container');
  var aboutMe = document.getElementById('about-me');

  camera = new THREE.PerspectiveCamera(80, (aboutMe.clientWidth-30) / aboutMe.clientHeight, 1, 4000 );
  camera.position.z = 1000;

  scene = new THREE.Scene();
  scene.add(camera);

  renderer = new THREE.CanvasRenderer();
  renderer.setSize( aboutMe.clientWidth-30, aboutMe.clientHeight );
  domElement.appendChild( renderer.domElement );
  makeParticles(); 

  setInterval(update,1000/30); 
  window.addEventListener('resize', function(){
    camera.aspect = (aboutMe.clientWidth-30) / aboutMe.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( aboutMe.clientWidth-30, aboutMe.clientHeight );
  }.bind(this), true);
}
function update() {
  updateParticles();
  renderer.render( scene, camera );
}

function makeParticles() { 
  
  var particle, material; 

  for ( var zpos= -1000; zpos < 1000; zpos+=20 ) {

    material = new THREE.ParticleCanvasMaterial( { color: 0x525252, program: particleRender } );
    particle = new THREE.Particle(material);

    particle.position.x = Math.random() * 1000 - 500;
    particle.position.y = Math.random() * 1000 - 500;

    particle.position.z = zpos;

    particle.scale.x = particle.scale.y = 4;
    scene.add( particle );
    particles.push(particle); 
  }
  
}

function particleRender( context ) {
  
  context.beginPath();
  context.arc( 0, 0, 1, 0,  Math.PI * 2, true );
  context.fill();
};


function updateParticles() { 
  for(var i=0; i<particles.length; i++) {

    particle = particles[i]; 
    particle.position.z +=  5;
    if(particle.position.z>1000) particle.position.z-=2000; 

  }
}