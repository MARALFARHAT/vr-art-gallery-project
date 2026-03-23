const { cameraView, cameraProjection } = require('./camera');

module.exports = function createDrawCube(regl) {
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
        // front
        [-0.5, -0.5,  0.5],
        [ 0.5, -0.5,  0.5],
        [ 0.5,  0.5,  0.5],
        [-0.5, -0.5,  0.5],
        [ 0.5,  0.5,  0.5],
        [-0.5,  0.5,  0.5],

        // back
        [-0.5, -0.5, -0.5],
        [ 0.5,  0.5, -0.5],
        [ 0.5, -0.5, -0.5],
        [-0.5, -0.5, -0.5],
        [-0.5,  0.5, -0.5],
        [ 0.5,  0.5, -0.5],

        // left
        [-0.5, -0.5, -0.5],
        [-0.5, -0.5,  0.5],
        [-0.5,  0.5,  0.5],
        [-0.5, -0.5, -0.5],
        [-0.5,  0.5,  0.5],
        [-0.5,  0.5, -0.5],

        // right
        [0.5, -0.5, -0.5],
        [0.5,  0.5,  0.5],
        [0.5, -0.5,  0.5],
        [0.5, -0.5, -0.5],
        [0.5,  0.5, -0.5],
        [0.5,  0.5,  0.5],

        // top
        [-0.5, 0.5, -0.5],
        [-0.5, 0.5,  0.5],
        [ 0.5, 0.5,  0.5],
        [-0.5, 0.5, -0.5],
        [ 0.5, 0.5,  0.5],
        [ 0.5, 0.5, -0.5],

        // bottom
        [-0.5, -0.5, -0.5],
        [ 0.5, -0.5,  0.5],
        [-0.5, -0.5,  0.5],
        [-0.5, -0.5, -0.5],
        [ 0.5, -0.5, -0.5],
        [ 0.5, -0.5,  0.5]
      ]
    },
    uniforms: {
      model: regl.prop('model'),
      color: regl.prop('color'),
      view: cameraView,
      projection: cameraProjection
    },
    count: 36
  });
};