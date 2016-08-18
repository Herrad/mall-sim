function nearestExc(points, location, min) {
    return points.reduce((selected, point) => {
        if((diffPoints(point.coordinates.x, location.x) > min || diffPoints(point.coordinates.y, location.y) > min) &&
            diffPoints(point.coordinates.x, location.x) < diffPoints(selected.coordinates.x, location.x) &&
            diffPoints(point.coordinates.y, location.y) < diffPoints(selected.coordinates.y, location.y)) {
                selected = point;
            }
        return selected;
    }, {coordinates: {x: 10000000, y: 10000000}});
}

function nearest(points, location) {
    return points.reduce((selected, point) => {
        if(diffPoints(point.coordinates.x, location.x) < diffPoints(selected.coordinates.x, location.x) &&
            diffPoints(point.coordinates.y, location.y) < diffPoints(selected.coordinates.y, location.y))
        selected = point;
        return selected;
    }, points[0]);
}

function diffPoints(number1, number2) {
    if(number1 > number2) return number1 - number2;
    return number2 - number1;
}
