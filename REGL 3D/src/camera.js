const mat4 = require('gl-mat4');
const cameraState = require('./cameraState');

function cameraView() {
  const v = [];

  const { position, rotation } = cameraState;

  const target = [
    position[0] + Math.sin(rotation),
    position[1],
    position[2] - Math.cos(rotation)
  ];

  mat4.lookAt(
    v,
    position,
    target,
    [0, 1, 0]
  );

  return v;
}

function cameraProjection({ viewportWidth, viewportHeight }) {
  const p = [];
  mat4.perspective(
    p,
    Math.PI / 4,
    viewportWidth / viewportHeight,
    0.01,
    100
  );
  return p;
}

module.exports = {
  cameraView,
  cameraProjection
};