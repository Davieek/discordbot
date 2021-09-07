const { MessageEmbed } = require("discord.js")
const { avatar } = require("../config/nvconfig")
const { color, colorfail, botname, botp } = require(__dirname + "/../config/nvconfig")
  module.exports = {
    name: "przywitaj",
    description: "kill",
    args: true,
    usage: "<user>",
  
    run(msg, args) {
        const { channel, guild, author, mentions } = msg
        const userArg = mentions.users.first()
        const memberArg = guild.members.cache.get(userArg)

        if (!userArg) {
            const embed = new MessageEmbed()
                .setTitle(botp)
                .setThumbnail(avatar)
                .setColor(colorfail)
                .setFooter("⨉ " + botname + " ⨉")
                .addField(`Błąd:`, "Musisz podać gracza.")
                
                return channel.send(embed), msg.react("❌")
        }else if(userArg.id === author.id) {
          const embed = new MessageEmbed()
          .setTitle(botp)
  
          .setColor(colorfail)
          .setFooter("⨉ " + botname + " ⨉")
          .addField(`Błąd:`, "No sorry jestem tak wredny ze nie dam ci sie przywitać ;/")
          
          return channel.send(embed), msg.react("❌")
         } else {
            const embed = new MessageEmbed()
                .setTitle(botp)
        
                .setColor(color)
                .setFooter("⨉ " + botname + " ⨉")
                .setDescription(`Użytkownik <@${author.id}> przywitał <@${userArg.id}>!`)
                .setImage("https://media.discordapp.net/attachments/757684683654955121/787717654005284904/tenor.gif")
                
                return channel.send(embed), msg.react("✅")
        }

    },
  }
  