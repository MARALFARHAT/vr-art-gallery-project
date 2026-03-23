const regl = require('regl')();
require('./controls');
require('./objectControls');

const objectState = require('./objectState');
const createDrawCube = require('./drawCube');
const makeCubeModel = require('./makeCubeModel');
const makePaintingModel = require('./makePaintingModel');
const createDrawPlane = require('./drawPlane');
const createDrawTexturedPlane = require('./drawTexturedPlane');
const loadTextures = require('./loadTextures');
const createDrawSphere = require('./drawSphere');
const makeSphereModel = require('./makeSphereModel');
const {
  makeFloorModel,
  makeBackWallModel,
  makeLeftWallModel,
  makeRightWallModel,
  makeCeilingModel
} = require('./models');

const drawPlane = createDrawPlane(regl);
const drawTexturedPlane = createDrawTexturedPlane(regl);
const drawCube = createDrawCube(regl);
const drawSphere = createDrawSphere(regl);
async function start() {
  const textures = await loadTextures(regl);

  regl.frame(() => {
    regl.clear({
      color: [0, 0, 0, 1],
      depth: 1
    });
drawCube({
  model: makeCubeModel(
    objectState.cube.position[0],
    objectState.cube.position[1],
    objectState.cube.position[2],
    objectState.cube.scale
  ),
  color: [0.6, 0.1, 0.8, 1]
});

drawSphere({
  model: makeSphereModel(
    objectState.sphere.position[0],
    objectState.sphere.position[1],
    objectState.sphere.position[2],
    objectState.sphere.scale
  ),
  color: [1.0, 0.4, 0.7, 1]
});
    drawTexturedPlane({
  model: makeFloorModel(),
  tex: textures.floor,
  tile: [4, 4]
});

drawTexturedPlane({
  model: makeBackWallModel(),
  tex: textures.wall,
  tile: [3, 2]
});

drawTexturedPlane({
  model: makeLeftWallModel(),
  tex: textures.wall,
  tile: [3, 2]
});

drawTexturedPlane({
  model: makeRightWallModel(),
  tex: textures.wall,
  tile: [3, 2]
});

drawTexturedPlane({
  model: makeCeilingModel(),
  tex: textures.ceiling,
  tile: [4, 4]
});

    drawPlane({
      model: makePaintingModel(),
      color: [1, 0, 0, 1]
    });
    drawPlane({
    model: makePaintingModel(0, 2, -1.99, 0.25, 0.35),
    color: [1, 0, 0, 1]
  });

  drawPlane({
    model: makePaintingModel(-1.1, 2.2, -1.99, 0.2, 0.3),
    color: [0, 0, 1, 1]
  });

  drawPlane({
    model: makePaintingModel(1.1, 1.8, -1.99, 0.22, 0.32),
    color: [0, 1, 0, 1]
  });
  });
}

start().catch(err => {
  console.error(err);
  document.body.innerHTML = '<pre style="color:red;">' + String(err && err.message ? err.message : err) + '</pre>';
});