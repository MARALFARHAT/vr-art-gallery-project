function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new window.Image();

    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Failed to load image: ' + src));

    img.src = src;
  });
}

module.exports = async function loadTextures(regl) {
  const [floorImg, wallImg, ceilingImg] = await Promise.all([
    loadImage('src/textures/floor.jpg'),
    loadImage('src/textures/wall.jpg'),
    loadImage('src/textures/ceiling.jpg')
  ]);

  return {
    floor: regl.texture({
      data: floorImg,
      mag: 'linear',
      min: 'linear'
    }),
    wall: regl.texture({
      data: wallImg,
      mag: 'linear',
      min: 'linear'
    }),
    ceiling: regl.texture({
      data: ceilingImg,
      mag: 'linear',
      min: 'linear'
    })
  };
};