const { emojis } = require("../configs/config.json");
const moment = require("moment");
moment.locale("tr");
const penals = require("../schemas/penals");

module.exports = {
  conf: {
    aliases: [],
    name: "sicil",
    help: "sicil [kullanıcı]",
  },

  /**
   * @param { Client } client
   * @param { Message } message
   * @param { Array<String> } args
   */

  run: async (client, message, args, embed) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new MessageEmbed().setDescription(`${message.author} bu komutu kullanabilmek için **Yönetici** iznine ihtiyacın var.`).setAuthor(message.author.tag, message.author.avatarURL({dynamic:true})).setColor("RANDOM")).then(x => x.delete({timeout: 6500}));
    let members = message.guild.members.cache.filter(member => member.roles.cache.has("900752167042949160") && member.voice.channelID != inventory.ServerSettings.ToplantiKanal);
    members.array().forEach((member, index) => {setTimeout(() => {member.roles.remove("900752167042949160").catch();}, index * 1250)});
    let verildi = message.member.voice.channel.members.filter(member => !member.roles.cache.has("900752167042949160") && !member.user.bot)
    verildi.array().forEach((member, index) => {setTimeout(() => {member.roles.add("900752167042949160").catch();}, index * 1250)});
    message.channel.send(new MessageEmbed().setDescription(`<@&900752167042949160> Rolü <#900752293773860924> Kanalında Bulunan Üyelere Dağıtılmaya Başladı.\n\n Toplam Rol Verilen Kullanıcı: \n \`${verildi.size}\` \n\n Rolleri Geri Alınan Kullanıcı Sayısı: \n \`${members.size}\``).setColor("RANDOM").setTitle(`Toplantı Yoklaması Alındı.`).setThumbnail(message.guild.iconURL({dynamic:true})))}
};
