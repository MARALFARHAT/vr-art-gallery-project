const cameraState = require('./cameraState');

const speed = 0.1;
const turnSpeed = 0.05;

window.addEventListener('keydown', (e) => {
  const pos = cameraState.position;

  if (e.key === 'w') {
    pos[0] += Math.sin(cameraState.rotation) * speed;
    pos[2] -= Math.cos(cameraState.rotation) * speed;
  }

  if (e.key === 's') {
    pos[0] -= Math.sin(cameraState.rotation) * speed;
    pos[2] += Math.cos(cameraState.rotation) * speed;
  }

  if (e.key === 'a') {
    pos[0] -= Math.cos(cameraState.rotation) * speed;
    pos[2] -= Math.sin(cameraState.rotation) * speed;
  }

  if (e.key === 'd') {
    pos[0] += Math.cos(cameraState.rotation) * speed;
    pos[2] += Math.sin(cameraState.rotation) * speed;
  }

  if (e.key === 'ArrowLeft') {
    cameraState.rotation += turnSpeed;
  }

  if (e.key === 'ArrowRight') {
    cameraState.rotation -= turnSpeed;
  }
});