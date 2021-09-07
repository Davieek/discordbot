const { MessageEmbed, client, GuildMember } = require("discord.js")
const { botid, avatar } = require("../config/nvconfig")
const { color, colorfail, botname, prefix, podaniaChannelId, botp } = require(__dirname + "/../config/nvconfig")


module.exports = {
  name: "podanie",
  args: true,

  run(msg, args) {
    const { channel, guild, author, mentions  } = msg
    const textArg = [...args].slice(0).join(" ")
    if (!textArg) {
      const embed = new MessageEmbed()
      .setTitle(botp)
      .setThumbnail(avatar)
      .setColor(colorfail)
      .setFooter("⨉ " + botname + " ⨉")
      .addField(`Błąd:`, "Musisz wkleić swoje podanie.")
      .addField("Użyj:", prefix + "podanie <Twoje podanie>")

      return channel.send(embed), msg.react("❌")

    } else if (textArg) {
      const pChannel = channel.guild.channels.cache.get(podaniaChannelId)
      const userAvatar = msg.author.displayAvatarURL()
      const embed = new MessageEmbed()
      .setTitle(botp)

      .setColor(color)
      .setFooter("⨉ " + botname + " ⨉ ✅ - Tak ❌ - Nie 📛 - Nie wiem")
      .setThumbnail(userAvatar)
      .setDescription(`Gracz: <@${author.id}>`)
      .addField("Podanie:", `${textArg}`)
      .setTimestamp();
      const embed2 = new MessageEmbed()
      .setTitle(botp)
      
      .setThumbnail(avatar)
      .setColor(color)
      .setFooter("⨉ " + botname + " ⨉")
      .setDescription(`<@${author.id}>, Twoje podanie zostało wysłane do Administracji.`)
      channel.send(embed2)

      return pChannel.send(embed).then(embedMessage => {
        embedMessage.react("✅");
        embedMessage.react("❌");
        embedMessage.react("📛");
        msg.delete()
    });
    }

    
  }  
}