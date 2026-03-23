const objectState = require('./objectState');

const step = 0.15;

window.addEventListener('keydown', (e) => {
  console.log('key pressed:', e.key);

  const cube = objectState.cube.position;
  const sphere = objectState.sphere.position;

  if (e.key === 'j') cube[0] -= step;
  if (e.key === 'l') cube[0] += step;
  if (e.key === 'i') cube[2] -= step;
  if (e.key === 'k') cube[2] += step;
  if (e.key === 'u') cube[1] += step;
  if (e.key === 'o') cube[1] -= step;

  if (e.key === 'f') sphere[0] -= step;
  if (e.key === 'h') sphere[0] += step;
  if (e.key === 't') sphere[2] -= step;
  if (e.key === 'g') sphere[2] += step;
  if (e.key === 'r') sphere[1] += step;
  if (e.key === 'y') sphere[1] -= step;

  console.log('cube:', objectState.cube.position);
  console.log('sphere:', objectState.sphere.position);
});