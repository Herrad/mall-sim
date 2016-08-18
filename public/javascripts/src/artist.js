function createArtist(canvas) {
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'lightgrey'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    return {
        draw: function(drawable) {
            ctx.fillStyle = drawable.colour || 'green';
            ctx.fillRect(drawable.coordinates.x, drawable.coordinates.y, drawable.dimensions.width, drawable.dimensions.height);
        }
    }
}
