const { cameraView, cameraProjection } = require('./camera');

function createSphereMesh(radius = 0.5, latBands = 16, lonBands = 16) {
  const positions = [];

  for (let lat = 0; lat < latBands; lat++) {
    const theta1 = (lat / latBands) * Math.PI;
    const theta2 = ((lat + 1) / latBands) * Math.PI;

    for (let lon = 0; lon < lonBands; lon++) {
      const phi1 = (lon / lonBands) * Math.PI * 2;
      const phi2 = ((lon + 1) / lonBands) * Math.PI * 2;

      const p1 = [
        radius * Math.sin(theta1) * Math.cos(phi1),
        radius * Math.cos(theta1),
        radius * Math.sin(theta1) * Math.sin(phi1)
      ];

      const p2 = [
        radius * Math.sin(theta2) * Math.cos(phi1),
        radius * Math.cos(theta2),
        radius * Math.sin(theta2) * Math.sin(phi1)
      ];

      const p3 = [
        radius * Math.sin(theta2) * Math.cos(phi2),
        radius * Math.cos(theta2),
        radius * Math.sin(theta2) * Math.sin(phi2)
      ];

      const p4 = [
        radius * Math.sin(theta1) * Math.cos(phi2),
        radius * Math.cos(theta1),
        radius * Math.sin(theta1) * Math.sin(phi2)
      ];

      positions.push(
        p1, p2, p3,
        p1, p3, p4
      );
    }
  }

  return positions;
}

module.exports = function createDrawSphere(regl) {
  const positions = createSphereMesh(0.5, 20, 20);

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
      position: positions
    },
    uniforms: {
      model: regl.prop('model'),
      color: regl.prop('color'),
      view: cameraView,
      projection: cameraProjection
    },
    count: positions.length
  });
};