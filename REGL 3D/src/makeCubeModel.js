const mat4 = require('gl-mat4');

function makeCubeModel(x, y, z, scale = 1) {
  const m = [];
  mat4.identity(m);
  mat4.translate(m, m, [x, y, z]);
  mat4.scale(m, m, [scale, scale, scale]);
  return m;
}

module.exports = makeCubeModel;