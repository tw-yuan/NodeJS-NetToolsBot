const fs = require("fs");
const { token } = require("./config.json");
const { nodename } = require("./config.json");
const { Client, Intents, Permissions, MessageEmbed } = require('discord.js');
const client = new Client({ intents: new Intents(32767) });
var Ping = require('ping-lite');
var validateIP = require('validate-ip-node');


client.on('ready', () => { //當機器人啟動完成
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity("Game");
	client.user.setActivity("Made By YuanYuan#5067", {
		type: "PLAYING"
	});
});


client.on('messageCreate', message => {
	if (message.content.startsWith("=ping ")) {

		var nocmd = message.content.replace("=ping ", '');
		host = nocmd.replace(/\  /g, " ");
		if (validateIP(host) == true) {
			
			var ping = new Ping(host);

			ping.send(function (err, ms) {
				message.channel.send(`[${nodename}] - ${ms}ms`);
			});
		}
		return;

	}
})

client.login(token);
//防崩潰
process.on('uncaughtException', error => {
	console.log(error)
});

process.on('unhandledRejection', error => {
	console.log(error)
})