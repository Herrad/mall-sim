function nearestOutsideRadius(points, location, radius) {
    return points.reduce((selected, point) => {
        if(!selected.coordinates || (getLineBetween(point, location) > radius &&
            getLineBetween(point, location) < getLineBetween(selected, location))) {
                console.log('switched to', point.coordinates)
                selected = point;
            }
        return selected;
    }, {coordinates: {x: 10000000, y: 10000000}});
}

function diffPoints(number1, number2) {
    if(number1 > number2) return number1 - number2;
    return number2 - number1;
}

function getLineBetween(point1, point2) {
    const a = diffPoints(point1.coordinates.x, point2.coordinates.x);
    const b = diffPoints(point1.coordinates.y, point2.coordinates.y);
    if(point1.coordinates.x === point2.coordinates.x) return diffPoints(point1.coordinates.x, point2.coordinates.x);
    if(point1.coordinates.y === point2.coordinates.y) return diffPoints(point1.coordinates.y, point2.coordinates.y);

    return Math.sqrt(a*a + b*b);
}
