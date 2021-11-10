const { emojis } = require("../configs/config.json");
const moment = require("moment");
moment.locale("tr");
const penals = require("../schemas/penals");
const { MessageEmbed } = require("discord.js");


module.exports = {
  conf: {
    aliases: [],
    name: "say",
    help: "say",
  },

  /**
   * @param { Client } client
   * @param { Message } message
   * @param { Array<String> } args
   */

  run: async (client, message, args, embed) => {
    let Tag = ('')

    let TotalMember = message.guild.memberCount
           let Online = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size;
           let Taglı = message.guild.members.cache.filter(u => u.user.username.includes(Tag)).size;
           let toplamTag = Taglı
           let Voice = message.guild.members.cache.filter(s => s.voice.channel).size;
           let Boost = message.guild.premiumSubscriptionCount;
 
 message.channel.send(new MessageEmbed().setDescription(`
 \`•\` Sunucumuzda toplam **${TotalMember}** kullanıcı bulunmaktadır.
 \`•\` Sunucumuzda toplam **${Online}** aktif kullanıcı bulunmaktadır.
 \`•\` Toplam **${Taglı}** kişi tagımızda bulunuyor.
 \`•\` Seste **${Voice}** kullanıcı bulunmaktadır.
 \`•\` Sunucuya toplam **${Boost}** takviye yapılmıştır. 
 `))
 
 
  },
};
