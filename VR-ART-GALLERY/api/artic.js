'use strict';

const searchURL = 'http://localhost:3001/api/paintings';

module.exports = {
  fetchList: async function (from, count) {
    const json = await fetch(searchURL).then(res => res.json());

    return json.slice(from, from + count).map(item => ({
      image_id: item.image_url.startsWith('http')
        ? item.image_url
        : 'http://localhost:3001' + item.image_url,
      title: item.title,
      artist_title: item.artist
    }));
  },

  fetchImage: async function (obj) {
    console.log('Loading image:', obj.image_id);

    const response = await fetch(obj.image_id);
    const blob = await response.blob();

    if (!blob || blob.size === 0) {
      console.error('Image failed:', obj.image_id);
    }

    return {
      title: obj.title + ' - ' + obj.artist_title,
      image: blob
    };
  }
};