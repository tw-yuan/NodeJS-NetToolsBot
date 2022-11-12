const fs = require("fs");
const ms = require('ms');
const schedule = require('node-schedule');
const request = require("request");
const { exec } = require("child_process");
const express = require('express');
const app = express();
const ping = require('ping');

app.get('/ping', function (req, res) {
    var host = req.query.host;

    res.send("Not Auth");

    ping.promise.probe(host)
        .then(function (res) {
            console.log(res);
            res.send(res);
        });
});

app.listen(26001, function () {
    console.log('FAD後端已啟用於26001端口!');
});
//防崩潰
process.on('uncaughtException', error => {
    console.log(error)
});

process.on('unhandledRejection', error => {
    console.log(error)
})