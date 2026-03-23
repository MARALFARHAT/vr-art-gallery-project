const db = require('./db');

const updates = [
  { title: 'Sketch 1', image_url: 'https://i.imgur.com/o4Bfh8h.jpg' },
  { title: 'Sketch 2', image_url: 'https://i.imgur.com/REPLACE2.jpg' }
];

updates.forEach(({ title, image_url }) => {
  db.run(
    'UPDATE paintings SET image_url = ? WHERE title = ?',
    [image_url, title],
    (err) => {
      if (err) {
        console.error(`Failed for ${title}:`, err.message);
      } else {
        console.log(`Updated ${title}`);
      }
    }
  );
});

setTimeout(() => db.close(), 500);