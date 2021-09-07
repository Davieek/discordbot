const { MessageEmbed } = require("discord.js")
const { color, colorfail, botname, botp, avatar } = require(__dirname + "/../config/nvconfig")
  
  module.exports = {
    name: "kill",
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
                .addField(`Błąd:`, "Musisz podać użytkownika.")
                
                return channel.send(embed), msg.react("❌")
        }else if(userArg.id === author.id) {
          const embed = new MessageEmbed()
          .setTitle(botp)
          .setThumbnail(avatar)
          .setColor(colorfail)
          .setFooter("⨉ " + botname + " ⨉")
          .addField(`Błąd:`, "Nie możesz zabić samego siebie.")
          
          return channel.send(embed), msg.react("❌")
         } else {
            const embed = new MessageEmbed()
                .setTitle(botp)
        
                .setColor(color)
                .setFooter("⨉ " + botname + " ⨉")
                .setDescription(`Użytkownik <@${author.id}> zabija <@${userArg.id}>!`)
                .setThumbnail(avatar)
                .setImage("https://cdn.discordapp.com/attachments/757684907731583026/821824802352398336/865a62629c6e8740-2048-chelsea-anime-akame-ga-kill-gif.gif")
                
                return channel.send(embed), msg.react("✅")
        }

    },
  }
  