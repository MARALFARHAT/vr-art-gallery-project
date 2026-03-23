const db = require('./db');

const createPaintingsTable = `
CREATE TABLE IF NOT EXISTS paintings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  artist TEXT NOT NULL,
  year INTEGER,
  medium TEXT,
  description TEXT,
  image_url TEXT NOT NULL,
  width INTEGER,
  height INTEGER,
  category TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
`;

db.run(createPaintingsTable, (err) => {
  if (err) {
    console.error('Error creating paintings table:', err.message);
  } else {
    console.log('Paintings table ready');
  }
  db.close();
});