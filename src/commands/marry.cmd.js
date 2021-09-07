const { MessageEmbed } = require("discord.js")
const { color, colorfail, botname, botp } = require(__dirname + "/../config/nvconfig")
  
  module.exports = {
    name: "marry",
    description: "ślub",
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
  
          .setColor(colorfail)
          .setFooter("⨉ " + botname + " ⨉")
          .addField(`Błąd:`, "Nie możesz wziąść ślubu z sobą.")
          
          return channel.send(embed), msg.react("❌")
         } else {
            const embed = new MessageEmbed()
                .setTitle(botp)
        
                .setColor(color)
                .setFooter("⨉ " + botname + " ⨉")
                .setDescription(`Użytkownik <@${author.id}> wziął ślub z  <@${userArg.id}> 💜`)
                .setImage("https://data.whicdn.com/images/241527887/original.gif")
                
                return channel.send(embed), msg.react("✅")
        }
            
        
        
    },
  }
  