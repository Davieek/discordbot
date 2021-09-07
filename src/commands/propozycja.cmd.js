const { MessageEmbed, client } = require("discord.js")
const { avatar } = require("../config/nvconfig")
const { color, colorfail, botname, prefix, propoChannelId, botp } = require(__dirname + "/../config/nvconfig")


module.exports = {
  name: "propozycja",
  args: true,

  run(msg, args) {
    const { channel, guild, author, mentions  } = msg
    const textArg = [...args].slice(0).join(" ")
    const serverArg = (args[0])

    if (!serverArg) {
      const embed = new MessageEmbed()
      .setTitle(botp)

      .setColor(colorfail)
      .setFooter("⨉ " + botname + " ⨉")
      .addField(`Błąd:`, "Musisz wybrać czy chcesz napisać propozycje na server minecraft czy na server discord.")
      .addField("Użyj:", prefix + "propozycja <wiadomość>")

      return channel.send(embed)
    } else if (!textArg) {
      const embed = new MessageEmbed()
      .setTitle(botp)

      .setColor(colorfail)
      .setFooter("⨉ " + botname + " ⨉")
      .addField(`Błąd:`, "Musisz napisać propozycje.")
      .addField("Użyj:", prefix + "propozycja <wiadomość>")
      return channel.send(embed)

    } else {
      const pChannel = channel.guild.channels.cache.get(propoChannelId)
      const userAvatar = msg.author.displayAvatarURL()
      const embed = new MessageEmbed()
          .setTitle(botp)
          .setThumbnail(userAvatar)
          .setColor(color)
          .setFooter("⨉ " + botname + " ⨉ ✅ - Tak ❌ - Nie 📛 - Nie wiem")
          .setDescription(`Propozycja użytkownika <@${author.id}>:`)
          .addField(`────────────────────────`, `»: ${textArg}`)
          .setTimestamp();

          const embed2 = new MessageEmbed()
          .setTitle(botp)
          .setThumbnail(avatar)
    
          .setColor(color)
          .setFooter("⨉ " + botname + " ⨉")
          .setDescription(`${author} `+", propozycja została przekazana na kanał <#821752954423083058>")
          .setTimestamp();
  
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