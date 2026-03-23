const mat4 = require('gl-mat4');

function makeFloorModel() {
  const m = [];
  mat4.identity(m);
  return m;
}

function makeBackWallModel() {
  const m = [];
  mat4.identity(m);
  mat4.translate(m, m, [0, 2, -2]);
  mat4.rotateX(m, m, Math.PI / 2);
  return m;
}

function makeLeftWallModel() {
  const m = [];
  mat4.identity(m);
  mat4.translate(m, m, [-2, 2, 0]);
  mat4.rotateZ(m, m, Math.PI / 2);
  return m;
}

function makeRightWallModel() {
  const m = [];
  mat4.identity(m);
  mat4.translate(m, m, [2, 2, 0]);
  mat4.rotateZ(m, m, -Math.PI / 2);
  return m;
}

function makeCeilingModel() {
  const m = [];
  mat4.identity(m);
  mat4.translate(m, m, [0, 4, 0]);
  mat4.rotateX(m, m, Math.PI);
  return m;
}

module.exports = {
  makeFloorModel,
  makeBackWallModel,
  makeLeftWallModel,
  makeRightWallModel,
  makeCeilingModel
};