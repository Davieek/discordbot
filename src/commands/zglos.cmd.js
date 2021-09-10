const { MessageEmbed, client } = require("discord.js")
const { avatar } = require("../config/nvconfig")
const { color, colorfail, botname, botid, prefix, zglosChannelId, botp } = require(__dirname + "/../config/nvconfig")


module.exports = {
  name: "zglos",
  args: true,

  run(msg, args) {
    const { channel, guild, author, mentions  } = msg
    const userArg = mentions.users.first()
    const userAvatar = userArg.displayAvatarURL()
    const memberArg = guild.members.cache.get(userArg)
    const textArg = [...args].slice(2).join(" ")
    const serverArg = (args[1])

    if (!userArg) {
      const embed = new MessageEmbed()
      .setTitle(botp)

      .setColor(colorfail)
      .setFooter("⨉ " + botname + " ⨉")
      .addField(`Błąd:`, "Musisz podać użytkownika. ")
      .addField("Użyj:", prefix + "zglos <@użytkownik> <serwer/discord> <powód>")
      
      return channel.send(embed), msg.react("❌")
    }else if (!serverArg) {
      const zChannel = channel.guild.channels.cache.get(zglosChannelId)
      const embed = new MessageEmbed()
          .setTitle("» "+botp)
          .setThumbnail(avatar)
  
          .setColor(color)
          .setFooter("⨉ " + botname + " ⨉")
          .setDescription(`Użytkownik <@${author.id}> zgłosił <@${userArg.id}>`)
          .addField(`» Tryb:`, `global`)
          .addField(`» Powód:`, `${textArg}`)
          
          const embed2 = new MessageEmbed()
          .setTitle(botp)
    
          .setColor(color)
          .setFooter("⨉ " + botname + " ⨉ - Dziekujemy ^^")
          .setDescription(`${author}, `+`Użytkownik <@${userArg.id}> został zgłoszony, a sprawą zajmie sie administracja.`)
  
          channel.send(embed2)
          
          return zChannel.send(embed), msg.delete()
    }else if (userArg.id === botid) {
      const embed = new MessageEmbed()
      .setTitle(botp)

      .setColor(colorfail)
      .setFooter("⨉ " + botname + " ⨉")
      .addField(`Błąd:`, "Nie możesz zgłosić Bota.")
      .addField("Użyj:", prefix + "zglos <@użytkownik> <server/discord> <powód>")
      
      return channel.send(embed), msg.react("❌")

    }else if(userArg.id === author.id) {
      const embed = new MessageEmbed()
      .setTitle(botp)

      .setColor(colorfail)
      .setFooter("⨉ " + botname + " ⨉")
      .addField(`Błąd:`, "Nie możesz zgłosić samego siebie.")
      .addField("Użyj:", prefix + "zglos <@użytkownik> <server/discord> <powód>")
      
      return channel.send(embed), msg.react("❌")

    }else if (!textArg) {
      const embed = new MessageEmbed()
      .setTitle(botp)

      .setColor(colorfail)
      .setFooter("⨉ " + botname + " ⨉")
      .addField(`Błąd:`, "Musisz podać powód zgloszenia.")
      .addField("Użyj:", prefix + "zglos <@użytkownik> <server/discord> <powód>")
      
      return channel.send(embed), msg.react("❌")

    } else if (userArg, serverArg, textArg) {
      const zChannel = channel.guild.channels.cache.get(zglosChannelId)
      const embed = new MessageEmbed()
          .setTitle("» "+botp)
          .setThumbnail(userAvatar)
  
          .setColor(color)
          .setFooter("⨉ " + botname + " ⨉ ✅ - Tak ❌ - Nie 📛 - Nie wiem")
          .setDescription(`Użytkownik <@${author.id}> zgłosił <@${userArg.id}>`)
          .addField(`» Minecraft/Discord:`, `${serverArg}`)
          .addField(`» Powód:`, `${textArg}`)
          .setTimestamp();
          
          const embed2 = new MessageEmbed()
          .setTitle(botp)
    
          .setColor(color)
          .setFooter("⨉ " + botname + " ⨉ - Dziekujemy ^^")
          .setDescription(`${author}, `+`Użytkownik <@${userArg.id}> został zgłoszony, a sprawą zajmie sie administracja.`)
          .setTimestamp();
  
          channel.send(embed2)
          
          return zChannel.send(embed).then(embedMessage => {
            embedMessage.react("✅");
            embedMessage.react("❌");
            embedMessage.react("📛");
            msg.delete()
        });
    }
      

    
  }  
}