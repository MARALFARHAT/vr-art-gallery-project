const db = require('./db');

db.all('SELECT id, image_url FROM paintings', [], (err, rows) => {
  if (err) {
    console.error('Read error:', err.message);
    db.close();
    return;
  }

  const sorted = rows
    .map((row) => {
      const match = row.image_url.match(/DSC_(\d+)\.JPG/i);
      return {
        ...row,
        num: match ? parseInt(match[1], 10) : null
      };
    })
    .filter((row) => row.num !== null)
    .sort((a, b) => a.num - b.num); // smallest DSC first

  let done = 0;
  const total = sorted.length;

  sorted.forEach((row, index) => {
    const newTitle = `Sketch ${index + 1}`;

    db.run(
      'UPDATE paintings SET title = ? WHERE id = ?',
      [newTitle, row.id],
      function (updateErr) {
        if (updateErr) {
          console.error(`Failed for ${row.image_url}:`, updateErr.message);
        } else {
          console.log(`Updated ${row.image_url} -> ${newTitle}`);
        }

        done++;
        if (done === total) {
          console.log(`Finished updating Sketch 1 to Sketch ${total}`);
          db.close();
        }
      }
    );
  });
});