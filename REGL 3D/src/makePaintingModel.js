const mat4 = require('gl-mat4');

function makePaintingModel(x, y, z, width = 0.25, height = 0.35) {
  const m = [];
  mat4.identity(m);

  // place on wall
  mat4.translate(m, m, [x, y, z]);

  // orient like back wall
  mat4.rotateX(m, m, Math.PI / 2);

  // scale plane into painting shape
  mat4.scale(m, m, [width, 1, height]);

  return m;
}

module.exports = makePaintingModel;