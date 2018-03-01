const express = require('express');
const hbs = require('hbs');
const favicon = require('serve-favicon');
const http = require('http');

var server = function () {
    const app = express();
    let httpServer;
    const applicationRoot = `${__dirname}/`;

    app.set('view engine', 'html');
    app.set('views', applicationRoot + 'views');
    app.engine('html', hbs.__express);
    app.use('/public', express.static(applicationRoot + 'public'));
    app.use(favicon(applicationRoot + 'public' + '/favicon.ico'));

    app.get('/', function (req, res){
        return res.render('index.html');
    })

    return {
        start: function (options) {
            httpServer = http.createServer(app);
            httpServer.listen(options.port)

            console.log('Listening on', options.port);
        },
        stop: function (callback) {
            httpServer.stop(callback);
        }
    };
};

if (require.main === module) {
    new server().start({
        port: 1234
    });
}

module.exports = server;
