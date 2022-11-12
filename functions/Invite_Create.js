const fs = require("fs");

module.exports = function (invite) {
	var data = JSON.parse(fs.readFileSync(__dirname + "/../data/invites.json"));
	data[invite.guild.id][invite.code] = 0;
	fs.writeFileSync(__dirname + "/../data/invites.json", JSON.stringify(data, null, '\t'));
}