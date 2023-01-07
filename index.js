const {Client, MessageEmbed, Discord} = require('discord.js');
const client = global.client = new Client({ fetchAllMembers: true });
const config = global.config = require("./koruma/Settings/Config.json");
const fs = require("fs");

fs.readdir("./koruma/noxGuard", (err, files) => {
  if(err) return console.error(err);
  files.filter(file => file.endsWith(".js")).forEach(file => {
    let prop = require(`./koruma/noxGuard/${file}`);
      if(!prop.configuration) return;
      client.on(prop.configuration.name, prop);
  });
});

client.login(config.Bot.token);
