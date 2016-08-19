function createWorld(artist) {
    const guys = [];
    const points = [
        { coordinates: {x: 100, y:100} },
        { coordinates: {x: 100, y:1250} },
        { coordinates: {x: 800, y:350} },
        { coordinates: {x: 800, y:30} },
        { coordinates: {x: 1200, y:430} },
        { coordinates: {x: 250, y:250} },
        { coordinates: {x: 250, y:100} }
    ];

    return {
        enter: function(guy) {
            guys.push(guy);
        },
        tick: function(diff) {
            artist.clear()
            artist.background()
            points.map(point => {
                artist.draw({coordinates: point.coordinates, dimensions:{width: 5, height:5}, colour: 'magenta'});
                artist.text(`${point.coordinates.x},${point.coordinates.y}`, point.coordinates, '8px sans-serif');
            })
            guys.map(guy => {
                artist.draw(guy);
                guy.act(diff, this.leave)
            });
        },
        leave: function(guy) {
            const i = guys.indexOf(guy);
            guys.splice(i, 1);
        },
        nextPath: function(location) {
            const near = nearestOutsideRadius(points, {coordinates: location}, 200)
            console.log('path is', near.coordinates);
            return near;
        }
    }
}
