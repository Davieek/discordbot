const { MessageEmbed } = require("discord.js")
const { color, colorfail, botname , banChannelId, botp, avatar, servername } = require(__dirname + "/../config/nvconfig")

module.exports = {
  name: "ban",
  description: "Ban user.",
  args: true,

  run(msg, args) {
    const { channel, guild, mentions, author, member } = msg

    let daysArg = +args[1]

    if (!isNaN(daysArg)) {
      if (daysArg < 0) daysArg = 0
      if (daysArg > 7) daysArg = 7
    }

    const reasonArg = [...args].slice(isNaN(daysArg) ? 1 : 2).join(" ")

    const userToBan = mentions.users.first()

    if (!member.permissionsIn(channel).has(["ADMINISTRATOR"])) {
      const embed = new MessageEmbed()
      .setTitle(botp)

      .setColor(colorfail)
      .setFooter("⨉ " + botname + " ⨉")
      .addField(`Błąd:`, "Nie masz permisji do tej komendy!")
      
      return channel.send(embed), msg.react("❌")
    }

    if (!userToBan) {
      const embed = new MessageEmbed()
        .setTitle(botp)

        .setColor(colorfail)
        .setFooter("⨉ " + botname + " ⨉")
        .addField(`Błąd:`, "Ten użytkownik nie istnieje!")

        return channel.send(embed), msg.react("❌")
    }

    if (userToBan.id === author.id) {
      const embed = new MessageEmbed()
      .setTitle(botp)

      .setColor(colorfail)
      .setFooter("⨉ " + botname + " ⨉")
      .addField(`Błąd:`, "Nie możesz Zbanować samego siebie!")
      return channel.send(embed), msg.react("❌")
    }

    const memberToBan = guild.members.cache.get(userToBan.id)

    if (!memberToBan.bannable) {
      const embed = new MessageEmbed()
      .setTitle(botp)

      .setColor(colorfail)
      .setFooter("⨉ " + botname + " ⨉")
      .addField(`Błąd:`, "Nie moge zbanować tego użytkownika.")
      return channel.send(embed), msg.react("❌")
    } else {
      const embed3 = new MessageEmbed()
      .setColor(color)
      .setTitle(botp)
      .addField(`Zostałeś zbanowany na serwerze`, servername)
      .addField(`przez:`, `${author}`)
      .addField(`Powód:`, `${reasonArg}`)
      .setFooter("⨉ " + botname + " ⨉")
      .setTimestamp();

      userToBan.send(embed3);
    }

    const banOptions = {
      reason: reasonArg,
    }
    if (!isNaN(daysArg)) banOptions.days = daysArg

    memberToBan.ban(banOptions).then((bannedUser) => {
      const banChannel = channel.guild.channels.cache.get(banChannelId)
      const embed = new MessageEmbed()
      .setTitle(botp)
      .setColor(color)
      .setThumbnail(avatar)
      .addField(`${bannedUser.displayName}`, "Został zbanowany.")
      .addField(`przez:`, `${author}`)
      .addField(`Powód:`, `${reasonArg}`)
      .setFooter("⨉ " + botname + " ⨉")

    

      const embed2 = new MessageEmbed()
      .setTitle(botp)
      .setThumbnail(avatar)
      .setColor(color)
      .setFooter("⨉ " + botname + " ⨉")
      .setDescription(`${author}, `+`Gracz ${bannedUser.displayName} został poprawnie zbanowany.`)

      channel.send(embed2)


      banChannel.send(embed), msg.delete()
      return
    })
  },
}
