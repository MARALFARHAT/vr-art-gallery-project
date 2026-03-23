const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use('/images', express.static('api/images'));

// GET all paintings
app.get('/api/paintings', (req, res) => {
db.all(`
  SELECT * FROM paintings
  ORDER BY CAST(SUBSTR(title, 8) AS INTEGER) ASC
`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// POST new painting
app.post('/api/paintings', (req, res) => {
  const { title, artist, image_url } = req.body;

  if (!title || !artist || !image_url) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const sql = `
    INSERT INTO paintings (title, artist, image_url)
    VALUES (?, ?, ?)
  `;

  db.run(sql, [title, artist, image_url], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({
      id: this.lastID,
      title,
      artist,
      image_url
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});