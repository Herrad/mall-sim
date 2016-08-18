function createShopper(world, coordinates, colour) {
    coordinates = coordinates || {x: 10, y: 510};
    colour = colour || 'green';
    const directions = {
        up: distance => coordinates.y -= distance,
        down: distance => coordinates.y += distance,
        left: distance => coordinates.x -= distance,
        right: distance => coordinates.x += distance,
    }
    let target;
    function moveToPath() {
        if(!target) target = findNewPath();
        const actions = [];
        if(target.coordinates.x > coordinates.x + 10) actions.push(directions.right);
        if(target.coordinates.x < coordinates.x - 10) actions.push(directions.left);
        if(target.coordinates.y > coordinates.y + 10) actions.push(directions.down);
        if(target.coordinates.y < coordinates.y - 10) actions.push(directions.up);
        if(target.coordinates.x >= coordinates.x - 10 && target.coordinates.x <= coordinates.x + 10 && target.coordinates.y >= coordinates.y -10 && target.coordinates.y <= coordinates.y + 10){
            target = findNewPath();
            return [];
        }
        return actions;
    }

    function findNewPath() {
        if(target && target.nextPath)
            return nextPath;
        console.log('looking for new path')
        return world.nextPath(coordinates);
    }

    function act(time) {
        const actions = moveToPath();
        const distance = time/8 > 10 ? 10 : time/8;
        actions.map(action => action(distance));
    }

    const guy = {
        coordinates: coordinates,
        dimensions: {width: 30, height: 70},
        colour: colour,
        act: act
    };
    world.enter(guy);
}
