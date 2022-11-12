const fs = require("fs");

module.exports = function (member, client) {
	var data = JSON.parse(fs.readFileSync(__dirname + "/../data/invites.json"));
	var users = JSON.parse(fs.readFileSync(__dirname + "/../data/users.json"));
	require("./Ready_Update.js")(client);
	
	member.guild.invites.fetch().then(invites => {
		invites.forEach(invite => {
			if(data[member.guild.id][invite.code] !== invite.uses){
				if(users[member.guild.id] === undefined) users[member.guild.id] = {};
				if(users[member.guild.id][invite.inviter.id] === undefined) users[member.guild.id][invite.inviter.id] = new Array();
				if(!users[member.guild.id][invite.inviter.id].includes(member.user.id)) users[member.guild.id][invite.inviter.id].push(member.user.id);
				fs.writeFileSync(__dirname + "/../data/users.json", JSON.stringify(users, null ,'\t'));
				require("./Join_Notify.js")(member, client, users, invite.inviter.id);
			}
		});
	})
}