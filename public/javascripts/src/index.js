const canvas = document.getElementById('canvas');
function sizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.onresize = sizeCanvas;
sizeCanvas();

const artist = createArtist(canvas);

const world = createWorld(artist);
createShopper(world);

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
