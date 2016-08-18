function createArtist(canvas) {
    const ctx = canvas.getContext('2d');
    const defaults = {
        coordinates: {x: 0, y: 0},
        dimensions: {width: canvas.width, height: canvas.height},
    }
    const cameraPosition = {x: -50, y:0};
    const worldSize = {width: 3000, height:3000};

    function drawOrigin() {
        ctx.fillStyle = 'black'
        ctx.beginPath();
        ctx.moveTo(-15 - cameraPosition.x, cameraPosition.y)
        ctx.lineTo(15 - cameraPosition.x, cameraPosition.y)
        ctx.moveTo(cameraPosition.x, -15 - cameraPosition.y)
        ctx.lineTo(cameraPosition.x, 15 - cameraPosition.y)
        ctx.stroke();
    }

    return {
        background: function(colour) {
            ctx.fillStyle = 'lightgreen';
            ctx.fillRect(-1000, -1000, worldSize.width + 1000, worldSize.width + 1000);
            ctx.fillStyle = 'lightgrey';
            ctx.fillRect(0-cameraPosition.x, 0-cameraPosition.y, worldSize.width, worldSize.width);
        },
        draw: function(drawable) {
            if(!drawable) drawable = defaults
            ctx.fillStyle = drawable.colour || 'light-grey';
            ctx.fillRect(drawable.coordinates.x - cameraPosition.x, drawable.coordinates.y - cameraPosition.y, drawable.dimensions.width, drawable.dimensions.height);
        },
        clear: function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        },
        debug: function(text) {
            const textSpecs = ctx.measureText(text);
            ctx.fillStyle = 'black'
            ctx.font = "24px sans-serif";
            ctx.fillText(text, defaults.dimensions.width - 10 - textSpecs.width, 20)
        }
    }
}
