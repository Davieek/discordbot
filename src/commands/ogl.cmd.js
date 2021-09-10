const { MessageEmbed } = require("discord.js")
const { avatar } = require("../config/nvconfig")
const { color, colorfail, botname, oglChannelId, botp } = require(__dirname + "/../config/nvconfig")
  
  module.exports = {
    name: "ogl",
    description: "ogloszenie",
    args: true,
    usage: "[text]",
  
    run(msg, args) {
        const { channel, guild, author, member  } = msg
        const textArg = [...args].slice(0).join(" ")

        if (!member.permissionsIn(channel).has(["ADMINISTRATOR"])) {
            const embed = new MessageEmbed()
            .setTitle(botp)
            .setThumbnail(avatar)
            .setColor(colorfail)
            .setFooter("⨉ " + botname + " ⨉")
            .addField(`Błąd:`, "Nie masz permisji do tej komendy!")
            
            return channel.send(embed), msg.react("❌")
          }

        if (!textArg) {
            const embed = new MessageEmbed()
                .setTitle(botp)
                .setThumbnail(avatar)
                .setColor(colorfail)
                .setFooter("⨉ " + botname + " ⨉")
                .addField(`Błąd:`, "Musisz wpisać text.")
                
                return channel.send(embed), msg.react("❌")
        }
        if (textArg) {
            const oglChannel = channel.guild.channels.cache.get(oglChannelId)
            const embed = new MessageEmbed()
                .setTitle(botp)
        
                .setColor(color)
                .setThumbnail(avatar)
                .setFooter("⨉ " + botname + " ⨉")
                .addField(`📌 Ogłoszenie:`, `${textArg}`)

                
                return oglChannel.send(embed), msg.react("✅")
        }
    },
  }
  