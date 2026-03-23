const fs = require('fs');

fs.readdir('./images', (err, files) => {
  if (err) {
    console.error('Failed to read images folder:', err.message);
    return;
  }

  const imageFiles = files
    .filter(file => /\.(png|jpg|jpeg|webp)$/i.test(file))
    .sort();

  const list = imageFiles.map(file => ({
    title: file.split('.').slice(0, -1).join('.'),
    file
  }));

  const json = JSON.stringify({ images: list }, null, 4);
  fs.writeFileSync('./images/images.json', json);

  console.log(`Generated images.json with ${list.length} entries`);
});