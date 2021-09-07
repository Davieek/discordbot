const { MessageEmbed } = require("discord.js")
const { avatar } = require("../config/nvconfig")
const { color, colorfail, botname, botp } = require(__dirname + "/../config/nvconfig")
module.exports = {
    name: "rekrutacja",

    run(msg){
        const { channel } = msg
        const embed = new MessageEmbed()
        .setTitle(botp)
        .setThumbnail(avatar)
  
        .setColor(color)
        .setFooter("⨉ " + botname + " ⨉")
        .addField("Rekrutacja", "Jest aktualnie OFF")

  
        channel.send(embed), msg.react("✅")
    }
}