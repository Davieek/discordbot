const { MessageEmbed } = require("discord.js")
const { avatar } = require("../config/nvconfig")
const { color, colorfail, botname, botp } = require(__dirname + "/../config/nvconfig")

  module.exports = {
    name: "local",
    description: "Local",
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
            .addField("Błąd:", "Nie masz permisji do tej komendy!")

            return channel.send(embed), msg.react(":x:")
          }

        if (!textArg) {
            const embed = new MessageEmbed()
                .setTitle(botp)
                .setThumbnail(avatar)
                .setColor(colorfail)
                .setFooter("⨉ " + botname + " ⨉")
                .addField("Błąd:", "Musisz wpisać text.")

                return channel.send(embed), msg.react(":x:")
        }
        if (textArg) {
            const embed = new MessageEmbed()
                .setTitle(botp)

                .setColor(color)
                .setThumbnail(avatar)
                .setFooter("⨉ " + botname + " ⨉")
                .addField("‸", `${textArg}`)


                return channel.send(embed), msg.react(":white_check_mark:")
        }
    },
  }