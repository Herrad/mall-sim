function createArtist(canvas) {
    const ctx = canvas.getContext('2d');
    const defaults = {
        coordinates: {x: 0, y: 0},
        dimensions: {width: canvas.width, height: canvas.height},
    }

    return {
        background: function(colour) {
            ctx.fillStyle = colour || 'lightgrey';
            ctx.fillRect(defaults.coordinates.x, defaults.coordinates.y, defaults.dimensions.width, defaults.dimensions.height);
        },
        draw: function(drawable) {
            if(!drawable) drawable = defaults
            ctx.fillStyle = drawable.colour || 'light-grey';
            ctx.fillRect(drawable.coordinates.x, drawable.coordinates.y, drawable.dimensions.width, drawable.dimensions.height);
        },
        clear: function() {
            ctx.clearRect(defaults.coordinates.x, defaults.coordinates.y, defaults.dimensions.width, defaults.dimensions.height)
        },
        debug: function(text) {
            const textSpecs = ctx.measureText(text);
            ctx.fillStyle = 'black'
            ctx.font = "24px sans-serif";
            ctx.fillText(text, defaults.dimensions.width - 10 - textSpecs.width, 20)
        }
    }
}
