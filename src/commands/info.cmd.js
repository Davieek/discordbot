
const { MessageEmbed, User } = require("discord.js")
const { color, colorfail, botname, botp, user ,servername } = require(__dirname + "/../config/nvconfig")
  
  module.exports = {
    name: "info",
    description: "sprawdzanie informacji o graczu",
    args: true,
    usage: "[username | id | mention]",
    
  
    run(msg, args) {
        const { channel, guild, author, mentions, member, client } = msg
        const userArg = mentions.users.first()
        const userAvatar = userArg.displayAvatarURL()

        let user = userArg

        if (!userArg) {
            const embed = new MessageEmbed()
                .setTitle(botp)
        
                .setColor(colorfail)
                .setFooter("⨉ " + botname + " ⨉")
                .addField(`Błąd:`, "Nie znaleziono użytkownika.")
                
                return channel.send(embed), msg.react("❌")
         } else {
            const embed3 = new MessageEmbed()
                .setColor(color)
                .setTitle("👤 Info o Użytkowniku")
                .addField(`• Nick`, `» ${userArg.username}`)
                .addField(`• Id Konta`, `» ${userArg.id}`)
                .addField(`• BOT`, `» ${userArg.bot}`)
                .addField(`• TAG`, `» ${userArg.tag}`)
                .addField(`• Konto stworzone `, `» ${userArg.createdAt}`)
                .setDescription("────────────────────────") 
                .setThumbnail(userAvatar)
                .setFooter("⨉ " + botname + " ⨉")
                .setTimestamp();
                
                return channel.send(embed3), msg.react("✅")
        }
            
        
        
    },
  }
  