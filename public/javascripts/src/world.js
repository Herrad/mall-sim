function createWorld(artist) {
    const guys = [];
    return {
        enter: function(guy) {
            guys.push(guy);
        },
        tick: function(diff) {
            artist.clear()
            artist.background()
            artist.debug(`${Math.floor(1/diff * 1000)}fps`)
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
