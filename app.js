var express = require('express');
var jade = require('jade')

var fs = require('fs');
var http = require('http');

process.on('uncaughtException', function(err) {
    console.log("you sir are a fool and a scoundrel.  ...oh and also " + err + " - " + JSON.stringify(err));
});

var app = express();

app.configure(function() {
    // app.use(express.favicon(__dirname + '/public/favicon.ico', {maxAge: 86400000}));
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');

    // app.use(express.bodyParser());
    app.use(express.json());
    app.use(express.urlencoded());

    app.get('/', index);
    app.use(express.static(__dirname + '/public'));
});

console.log('web server listening');
http.createServer(app).listen(3000);

function index(req, res) {
    res.render('index', { isFrontPage: true });
    res.end();
};