const fs = require("fs");

module.exports = function (member, client) {
	var data = JSON.parse(fs.readFileSync(__dirname + "/../data/invites.json"));
	var users = JSON.parse(fs.readFileSync(__dirname + "/../data/users.json"));
	require("./Ready_Update.js")(client);
	if(users[member.guild.id] === undefined) return;
	var userlist = Object.keys(users[member.guild.id]);
	
	for(var a=0;a<userlist.length;a++){
		if(users[member.guild.id][userlist[a]].includes(member.user.id)){
			var userid = userlist[a];
			var n = users[member.guild.id][userlist[a]].indexOf(member.user.id);
			users[member.guild.id][userlist[a]].splice(n, 1);
			fs.writeFileSync(__dirname + "/../data/users.json", JSON.stringify(users, null, '\t'));
			require("./Leave_Notify.js")(member, client, users, userid);
		}
	}
}