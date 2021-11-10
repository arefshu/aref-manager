const { emojis } = require("../configs/config.json");
const moment = require("moment");
moment.locale("tr");
const penals = require("../schemas/penals");
const { MessageEmbed } = require("discord.js");


module.exports = {
  conf: {
    aliases: [],
    name: "rolsüz",
    help: "rolsüz",
  },

  /**
   * @param { Client } client
   * @param { Message } message
   * @param { Array<String> } args
   */

  run: async (client, message, args, embed) => {
    if (!message.member.roles.cache.get(''))
    return message.channel.send(new MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
    .setDescription(`Gerekli yetkiye sahip değilsin.`)
    .setColor('BLACK')).then(x => x.delete({timeout: 5000}));
    
    let rolsuztanim = message.guild.members.cache.filter(m => m.roles.cache.filter(r => r.id !== message.guild.id).size == 0)
    
    if(args[0] == "ver") {
        rolsuztanim.forEach(r => {
    r.roles.add("") //rolsüz id
    })
    const ver = new MessageEmbed()
    .setAuthor(" "+message.author.username +" ", message.author.avatarURL())
    .setDescription("Sunucuda rolü olmayan \`"+ rolsuztanim.size +"\` kişiye kayıtsız rolü verildi!")
    .setColor("BLACK")
    message.channel.send(ver)
    } else if(!args[0]) {
    const kayıtsız2 = new MessageEmbed()
    .setAuthor(""+message.author.username +" ", message.author.avatarURL())
    .setDescription("Sunucumuzda rolü olmayan \`"+ rolsuztanim.size +"\` kişi var. Bu kişilere kayıtsız rolü vermek için \`.rolsüz ver\` komutunu uygulayın!")
    .setColor("BLACK")
    message.channel.send(kayıtsız2)
    }
  },
};
