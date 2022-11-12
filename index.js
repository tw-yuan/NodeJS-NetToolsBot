const express = require('express');
const app = express();
const ping = require('ping');
var Ping = require('ping-lite');

app.get('/ping', function (req, res) {
    var host = req.query.host;

    var ping = new Ping(host);

    ping.send(function (err, ms) {
        console.log(`DST: ${host} Time: ${ms}ms`);
        res.send(`${ms}`);
    });    
});

app.listen(26001, function () {
    console.log('Test App is running on 26001!');
});
//防崩潰
process.on('uncaughtException', error => {
    console.log(error)
});

process.on('unhandledRejection', error => {
    console.log(error)
})