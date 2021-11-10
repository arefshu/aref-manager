const snipe = require("../schemas/snipe");
const moment = require("moment");
require("moment-duration-format");
const { MessageEmbed } = require("discord.js");

module.exports = {
  conf: {
    aliases: [],
    name: "tag-kontrol",
    help: "tag-kontrol",
  },

  /**
   * @param { Client } client
   * @param { Message } message
   * @param { Array<String> } args
   */

  run: async (client, message, args, embed) => {
    let tag = ""
    let rol = ""
    let taglilar = message.guild.members.cache.filter(s => s.user.username.includes(tag) && !s.roles.cache.has(rol))
    let tagsizlar = message.guild.members.cache.filter(s => !s.user.username.includes(tag) && s.roles.cache.has(rol))

    taglilar.array().forEach(async (member, index) => {
        setTimeout(async () => {
            await member.roles.add(rol)
        }, index * 1000)
    })
    tagsizlar.array().forEach(async (member, index) => {
        setTimeout(async () => {
            await member.roles.remove(rol)
        }, index * 1000)
    })
    embed.setDescription(`
**${taglilar.size}** Adet kullanıcıya taglı rolü verilecek
**${tagsizlar.size}** Adet kullanıcıdan taglı rolü alınacak.
`)
    message.channel.send(embed)
}
};
