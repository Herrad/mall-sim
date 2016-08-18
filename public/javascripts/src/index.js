const canvas = document.getElementById('canvas');

const guy = {
    coordinates: {x: 10, y: 50},
    dimensions: {width: 30, height: 70}
};

const artist = createArtist(canvas);
artist.draw(guy);
