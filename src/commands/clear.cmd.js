const { MessageEmbed } = require("discord.js")
const { avatar, gifs, dek } = require("../config/nvconfig")
const { color, colorfail, botp, botname } = require(__dirname + "/../config/nvconfig")
  module.exports = {
    name: "clear",
    description: "czysci wiadomosci",
    args: true,
    usage: "<amount>",
  
    run(msg, args) {
      const { channel, guild, member, author} = msg
  
      const amountArg = parseInt(args[0])

      if (!member.permissionsIn(channel).has(["ADMINISTRATOR"])) {
        const embed = new MessageEmbed()
        .setTitle(botp)
        .setThumbnail(dek)
        .setColor(colorfail)
        .setFooter("⨉ "+ botname +" ⨉")
        .addField(`Błąd:`, "Nie masz permisji do tej komendy!")
        
        return channel.send(embed), msg.react("❌")
      }
  
      if (!Number.isInteger(amountArg)) {
        const embed = new MessageEmbed()
        .setTitle(botp)
        .setThumbnail(dek)
        .setColor(colorfail)
        .setFooter("⨉ "+ botname +" ⨉")
        .addField(`Błąd:`, "Musisz wpisać liczbę wiadomosci do usunięcia (1-100).")
        
        return channel.send(embed), msg.react("❌")
      }
  
      if (amountArg < 2 || amountArg >= 101) {
        const embed = new MessageEmbed()
        .setTitle(botp)
        .setThumbnail(dek)
        .setColor(colorfail)
        .setFooter("⨉ "+ botname +" ⨉")
        .addField(`Błąd:`, "Liczba wiadomości do usunięcia musi być od 1 do 100.")
        
        return channel.send(embed), msg.react("❌")
      }
      
      channel.bulkDelete(amountArg)

      const embed = new MessageEmbed()
      .setTitle(botp)
      
      .setColor(color)
      .setThumbnail(avatar)
      .setFooter("⨉ "+ botname +" ⨉")
      .addField(`Wyczyszczono wiadomości!`, `w ilości: ${amountArg}`)
      .addField(`przez:`, `${author}`)

      channel.send(embed), msg.react("✅")
    },
  }
  