const db = require('./db');

const paintings = [
  {
    title: "Artwork 1",
    artist: "Maral",
    image_url: "https://i.imgur.com/o4Bfh8h.jpeg"
  },
  {
    title: "Artwork 2",
    artist: "Maral",
    image_url: "https://i.imgur.com/zyabkYQ.jpeg"
  },
  {
    title: "Artwork 3",
    artist: "Maral",
    image_url: "https://i.imgur.com/H5m1Mai.jpeg"
  },
  {
    title: "Artwork 4",
    artist: "Maral",
    image_url: "https://i.imgur.com/twktM2q.jpeg"
  },
  {
    title: "Artwork 5",
    artist: "Maral",
    image_url: "https://i.imgur.com/xsb6M1Y.jpeg"
  },
  {
    title: "Artwork 6",
    artist: "Maral",
    image_url: "https://i.imgur.com/StB5PAh.jpeg"
  },
  {
    title: "Artwork 7",
    artist: "Maral",
    image_url: "https://i.imgur.com/8E3wLx5.jpeg"
  },
  {
    title: "Artwork 8",
    artist: "Maral",
    image_url: "https://i.imgur.com/VVbnpYg.jpeg"
  },
  {
    title: "Artwork 9",
    artist: "Maral",
    image_url: "https://i.imgur.com/6wEhwTv.jpeg"
  },
  {
    title: "Artwork 10",
    artist: "Maral",
    image_url: "https://i.imgur.com/yofJsMv.jpeg"
  },
  {
    title: "Artwork 11",
    artist: "Maral",
    image_url: "https://i.imgur.com/qHNxhp9.jpeg"
  },
  {
    title: "Artwork 12",
    artist: "Maral",
    image_url: "https://i.imgur.com/O1sdcIM.jpeg"
  },
  {
    title: "Artwork 13",
    artist: "Maral",
    image_url: "https://i.imgur.com/DkfpCuT.jpeg"
  },
  {
    title: "Artwork 14",
    artist: "Maral",
    image_url: "https://i.imgur.com/TWga7Nr.jpeg"
  },
  {
    title: "Artwork 15",
    artist: "Maral",
    image_url: "https://i.imgur.com/39en7ZE.jpeg"
  },
  {
    title: "Artwork 16",
    artist: "Maral",
    image_url: "https://i.imgur.com/3IUXFiC.jpeg"
  },
  {
    title: "Artwork 17",
    artist: "Maral",
    image_url: "https://i.imgur.com/nuagc5H.jpeg"
  },
  {
    title: "Artwork 18",
    artist: "Maral",
    image_url: "https://i.imgur.com/Xc6BIqj.jpeg"
  },
  {
    title: "Artwork 19",
    artist: "Maral",
    image_url: "https://i.imgur.com/V2OsMOo.jpeg"
  },
  {
    title: "Artwork 20",
    artist: "Maral",
    image_url: "https://i.imgur.com/XRtsxLG.jpeg"
  }
];

paintings.forEach(p => {
  db.run(
    `INSERT INTO paintings (title, artist, image_url)
     VALUES (?, ?, ?)`,
    [p.title, p.artist, p.image_url],
    (err) => {
      if (err) {
        console.error("Error:", err.message);
      } else {
        console.log("Inserted:", p.title);
      }
    }
  );
});

setTimeout(() => db.close(), 500);