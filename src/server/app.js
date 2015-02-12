/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');
var port = process.env.PORT || 8001;
var httpProxy = require('http-proxy');

var environment = process.env.NODE_ENV;

app.use(favicon(__dirname + '/favicon.ico'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(logger('dev'));

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

switch (environment){
    case 'build':
        console.log('** BUILD **');
        app.use(express.static('./build/'));
        app.use('/*', express.static('./build/index.html'));
        break;
    default:
        console.log('** DEV **');
        app.use(proxyMiddleware);
        app.use(express.static('./src/client/'));
        app.use(express.static('./'));
        app.use('/*', express.static('./src/client/index.html'));
        app.use(proxyMiddleware);
        break;
}

var proxy = httpProxy.createProxyServer({
    target: 'http://localhost:3000/dc-campaign-finance'
});

proxy.on('error', function(proxyRes, req, res){
    console.log(res);
    res.close();
});

function proxyMiddleware(req, res, next) {
    console.log(req);
    if(req.url.indexOf('api') !== -1) {
        proxy.web(req, res);
    } else {
        next();
    }
}


app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname  +
        '\nprocess.cwd = ' + process.cwd());
});