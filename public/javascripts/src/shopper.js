function createShopper(world) {
    function moveToPath() {

    }

    function findNewPath() {
        
    }

    const guy = {
        coordinates: {x: 10, y: 510},
        dimensions: {width: 30, height: 70},
        colour: 'green',
        act: function(timePassed, leave) {
            this.coordinates.x += timePassed/8;
            if(this.coordinates.x > 600) leave(this);
        }
    };
    world.enter(guy);
}
