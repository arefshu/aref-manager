const { Client, Collection } = require("discord.js");
const client = (global.client = new Client({ fetchAllMembers: true }));
const settings = require("./src/configs/settings.json");
client.commands = new Collection();
client.aliases = new Collection();
client.cooldown = new Map();
require("./src/handlers/commandHandler");
require("./src/handlers/eventHandler");
require("./src/handlers/mongoHandler");
require("./src/handlers/functionHandler")(client);

client
  .login(settings.token)
  .then(() => console.log("[BOT] Bot connected!"))
  .catch(() => console.log("[BOT] Bot can't connected!"));

  client.on("ready", () =>{
    client.channels.cache.get('').join()
    })

    client.on("message", message => {
      if(message.content.toLowerCase() == "!tag") 
      return message.channel.send(`\`${inventory.ServerSettings.ServerTag}\``)
  });
  
  client.on("message", message => {
      if(message.content.toLowerCase() == "-tag") 
      return message.channel.send(`\`${inventory.ServerSettings.ServerTag}\``)
  });
  
  client.on("message", message => {
      if(message.content.toLowerCase() == "u!tag") 
      return message.channel.send(`\`${inventory.ServerSettings.ServerTag}\``)
  });
  
  client.on("message", message => {
      if(message.content.toLowerCase() == "u.tag") 
      return message.channel.send(`\`${inventory.ServerSettings.ServerTag}\``)
  });
  
  client.on("message", message => {
      if(message.content.toLowerCase() == "u-tag") 
      return message.channel.send(`\`${inventory.ServerSettings.ServerTag}\``)
  });
  
  client.on("message", message => {
      if(message.content.toLowerCase() == ".tag") 
      return message.channel.send(`\`${inventory.ServerSettings.ServerTag}\``)
  });
  
  client.on("message", message => {
      if(message.content.toLowerCase() == "t!tag") 
      return message.channel.send(`\`${inventory.ServerSettings.ServerTag}\``)
  });
  
  client.on("message", message => {
      if(message.content.toLowerCase() == "tag") 
      return message.channel.send(`\`${inventory.ServerSettings.ServerTag}\``)
  });