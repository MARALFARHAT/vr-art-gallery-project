const { cameraView, cameraProjection } = require('./camera');

module.exports = function createDrawPlane(regl) {
  return regl({
    vert: `
      precision mediump float;

      attribute vec3 position;
      uniform mat4 projection, view, model;

      void main() {
        gl_Position = projection * view * model * vec4(position, 1.0);
      }
    `,
    frag: `
      precision mediump float;
      uniform vec4 color;

      void main() {
        gl_FragColor = color;
      }
    `,
    attributes: {
      position: [
        [-2, 0, -2],
        [ 2, 0, -2],
        [ 2, 0,  2],

        [-2, 0, -2],
        [ 2, 0,  2],
        [-2, 0,  2]
      ]
    },
    uniforms: {
      model: regl.prop('model'),
      color: regl.prop('color'),
      view: cameraView,
      projection: cameraProjection
    },
    count: 6
  });
};