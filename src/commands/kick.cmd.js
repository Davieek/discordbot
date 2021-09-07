const { MessageEmbed } = require("discord.js")
const { color, colorfail, botname, banChannelId, botp, servername } = require(__dirname + "/../config/nvconfig")
  
  module.exports = {
    name: "kick",
    description: "Kick user.",
    args: true,
  
    run(msg, args) {
      const { channel, guild, mentions, author, member } = msg
  
      const reasonArg = [...args].slice(1).join(" ")
  
      const userToKick = mentions.users.first()

      if (!member.permissionsIn(channel).has(["ADMINISTRATOR"])) {
        const embed = new MessageEmbed()
        .setTitle(botp)
  
        .setColor(colorfail)
        .setFooter("⨉ " + botname + " ⨉")
        .addField(`Błąd:`, "Nie masz permisji do tej komendy!")
        
        return channel.send(embed), msg.react("❌")
      }
  
      if (!userToKick) {
        const embed = new MessageEmbed()
        .setTitle(botp)
  
        .setColor(colorfail)
        .setFooter("⨉ " + botname + " ⨉")
        .addField(`Błąd:`, "Ten użytkownik nie istnieje!")
        
        return channel.send(embed), msg.react("❌")
      }
  
      if (userToKick.id === author.id) {
        const embed = new MessageEmbed()
        .setTitle(botp)
  
        .setColor(colorfail)
        .setFooter("⨉ " + botname + " ⨉")
        .addField(`Błąd:`, "Nie możesz wywalić samego siebie!")
        return channel.send(embed), msg.react("❌")
      }
  
      const memberToKick = guild.members.cache.get(userToKick.id)
  
      if (!memberToKick.kickable) {
        const embed = new MessageEmbed()
        .setTitle(botp)
  
        .setColor(colorfail)
        .setFooter("⨉ " + botname + " ⨉")
        .addField(`Błąd:`, "Nie moge wywalić tego użytkownika.")
        return channel.send(embed), msg.react("❌")
      } else {
        const embed3 = new MessageEmbed()
        .setColor(color)
        .setTitle(botp)
        .addField(`Zostałeś wykopany z serwera`, servername)
        .addField(`przez:`, `${author}`)
        .addField(`Powód:`, `${reasonArg}`)
        .setFooter("⨉ " + botname + " ⨉")
        .setTimestamp();

        userToKick.send(embed3)
      }
  
      memberToKick.kick(reasonArg).then((res) => {
        const banChannel = channel.guild.channels.cache.get(banChannelId)
        const embed = new MessageEmbed()
        .setTitle(botp)
  
        .setColor(color)
        .setFooter("⨉ " + botname + " ⨉")
        .addField(`${res.displayName}`, "Został wykopany z serwera.")
        .addField(`przez:`, `${author}`)
        .addField(`Powód:`, `${reasonArg}`)

        const embed2 = new MessageEmbed()
        .setTitle(botp)
  
        .setColor(color)
        .setFooter("⨉ " + botname + " ⨉")
        .setDescription(`${author}, `+`Gracz <@${userToKick.id}> został poprawnie wykopany.`)

        channel.send(embed2)
  
        banChannel.send(embed), msg.delete()
      })
    },
  }
  