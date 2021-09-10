const { MessageEmbed } = require("discord.js")
const { avatar } = require("../config/nvconfig")
const { color, colorfail, botname, botp } = require(__dirname + "/../config/nvconfig")
  
  module.exports = {
    name: "kiss",
    description: "calus",
    args: true,
    usage: "<user>",
  
    run(msg, args) {
        const { channel, guild, author, mentions  } = msg
        const userArg = mentions.users.first()

        if (!userArg) {
            const embed = new MessageEmbed()
                .setTitle(botp)
        
                .setColor(colorfail)
                .setFooter("⨉ " + botname + " ⨉")
                .addField(`Błąd:`, "Nie znaleziono gracza.")
                
                return channel.send(embed), msg.react("❌")
         } else if(userArg.id === author.id) {
          const embed = new MessageEmbed()
          .setTitle(botp)
          .setThumbnail(avatar)
          .setColor(colorfail)
          .setFooter("⨉ " + botname + " ⨉")
          .addField(`Błąd:`, "Nie możesz pocałować samego siebie.")
          
          return channel.send(embed), msg.react("❌")
         } else {
            const embed = new MessageEmbed()
                .setTitle(botp)
        
                .setColor(color)
                .setFooter("⨉ " + botname + " ⨉")
                .setDescription(`Użytkownik <@${author.id}> pocałował <@${userArg.id}>❤`)
                .setImage("https://media.discordapp.net/attachments/757684683654955121/787571490790834176/kiss.gif")
                
                return channel.send(embed), msg.react("✅")
        }
            
        
        
    },
  }
  