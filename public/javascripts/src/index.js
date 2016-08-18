const canvas = document.getElementById('canvas');

const guy = {
    coordinates: {x: 10, y: 510},
    dimensions: {width: 30, height: 70},
    colour: 'green',
    act: function(timePassed, leave) {
        this.coordinates.x += timePassed/4;
        if(this.coordinates.x > 600) leave(this);
    }
};

const artist = createArtist(canvas);

const world = createWorld(artist);
world.enter(guy);

let now = Date.now();
let prev = now;
let diff = 0;

function run() {
    prev = now;
    now = Date.now();
    diff = now - prev;
    world.tick(diff);
    setTimeout(run, 1000/60);
}
run();
