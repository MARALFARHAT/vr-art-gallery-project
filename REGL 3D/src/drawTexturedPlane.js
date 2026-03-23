const { cameraView, cameraProjection } = require('./camera');

module.exports = function createDrawTexturedPlane(regl) {
  return regl({
    vert: `
      precision mediump float;

      attribute vec3 position;
      attribute vec2 uv;

      uniform mat4 projection, view, model;
      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = projection * view * model * vec4(position, 1.0);
      }
    `,
    frag: `
      precision mediump float;

      varying vec2 vUv;
      uniform sampler2D tex;
      uniform vec2 tile;

      void main() {
        vec2 tiledUv = fract(vUv * tile);
        gl_FragColor = texture2D(tex, tiledUv);
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
      ],
      uv: [
        [0, 0],
        [1, 0],
        [1, 1],

        [0, 0],
        [1, 1],
        [0, 1]
      ]
    },
    uniforms: {
      model: regl.prop('model'),
      tex: regl.prop('tex'),
      tile: regl.prop('tile'),
      view: cameraView,
      projection: cameraProjection
    },
    count: 6
  });
};