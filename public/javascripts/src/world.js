function createWorld(artist) {
    const guys = [];
    return {
        enter: function(guy) {
            guys.push(guy);
        },
        tick: function(diff) {
            artist.clear()
            artist.background()
            guys.map(guy => {
                artist.draw(guy);
                guy.act(diff, this.leave)
            });
        },
        leave: function(guy) {
            const i = guys.indexOf(guy);
            guys.splice(i, 1);
        }
    }
}
