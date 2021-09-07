const { MessageEmbed } = require("discord.js")
const { avatar } = require("../config/nvconfig")
const { prefix, color, botname, serverTryby, serverip, serverwww, botp, wersja} = require(__dirname + "/../config/nvconfig")

module.exports =  {
    name: "server",
    description: "server info",

    run(msg) {
        const { channel, reaction } = msg
        const embed = new MessageEmbed()
        .setTitle(botp)
  
        .setColor(color)
        .setThumbnail(avatar)
        .setFooter("⨉ " + botname + " ⨉")
        .addField("» IP:", serverip)
        .addField("» WERSJA:", wersja)
        .addField("» STRONA:", serverwww)
        .addField("» TRYBY", serverTryby)
  
        channel.send(embed), msg.react("✅")
        },
}
