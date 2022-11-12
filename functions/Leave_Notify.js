const fs = require("fs");
const { Client, Intents } = require('discord.js');
const request = require("request");

module.exports = function (member, client, users, userid){
	var guilds = JSON.parse(fs.readFileSync(__dirname + "/../data/guilds.json"));
	
	var channel = "";
	
request(`https://panel.freeddos.xyz/temp/api/left?key=bqvulihgruhqhl&iid=${userid}&bid=${member.user.id}`, function(error, response, body) {});
	if(guilds[member.guild.id] !== undefined && guilds[member.guild.id] !== "") channel = guilds[member.guild.id];
	else if(member.guild.systemChannel !== null) channel = member.guild.systemChannel.id;
	
	var msg = `<@${member.user.id}>退出群組了! <@${userid}>目前邀請了 ${users[member.guild.id][userid].length} 人`;
	if(channel !== ""){
		client.channels.fetch(channel).then(channel => {
			channel.send(msg);
		});
	}else{
		member.guild.channels.cache.first().send(msg);
	}
}