const fs = require("fs");
const { Client, Intents } = require('discord.js');

const request = require("request");

module.exports = function (member, client, users, userid) {
	var users = JSON.parse(fs.readFileSync(__dirname + "/../data/users.json"));
	var userlist = Object.keys(users[member.guild.id]);

	var guilds = JSON.parse(fs.readFileSync(__dirname + "/../data/guilds.json"));

	request(`https://panel.freeddos.xyz/temp/api/invite?key=bqvulihgruhqhl&iid=${userid}&bid=${member.user.id}`, function (error, response, body) { });
	for (var a = 0; a < userlist.length; a++) {
		if (users[member.guild.id][userlist[a]].includes(member.user.id)) {
			var msg = `<@${userid}> 邀請了 <@${member.user.id}>! 他目前已經邀請了 ${users[member.guild.id][userid].length} 人`;

			var channel = "";
			if (guilds[member.guild.id] !== undefined && guilds[member.guild.id] !== "") channel = guilds[member.guild.id];
			else if (member.guild.systemChannel !== null) channel = member.guild.systemChannel.id;

			if (channel !== "") {
				client.channels.fetch(channel).then(channel => {
					channel.send(msg);
				});
			} else {
				member.guild.channels.cache.first().send(msg);
			}
		}
	}
}