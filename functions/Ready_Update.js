const fs = require("fs");

module.exports = function (client){
	var data = {};
	client.guilds.cache.forEach(guild => {
		data[guild.id] = {};
		guild.invites.fetch().then(invites => {
			invites.forEach(invite => {
				data[guild.id][invite.code] = invite.uses;
			});
			var guildnum = Object.keys(data).length;
			if(client.guilds.cache.size === guildnum) {
				fs.writeFileSync(__dirname + "/../data/invites.json", JSON.stringify(data, null, '\t'));
				return;
			}
		})
	})
}