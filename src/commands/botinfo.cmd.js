const { MessageEmbed } = require("discord.js")
const { avatar, corona } = require("../config/nvconfig")
const { prefix, author, version, color, botname, botp } = require(__dirname + "/../config/nvconfig")
module.exports = {
    name: "botinfo",

    run(msg){
        const { channel } = msg
        const embed = new MessageEmbed()
        .setTitle(botp)
        .setThumbnail(corona)
  
        .setColor(color)
        .setDescription("" + botname)
        .setFooter("⨉ " + botname + " ⨉")
        .addField("Prefix", prefix)
        .addField("Version:", version)
        .addField("Author:", author)

  
        channel.send(embed), msg.react("✅")
    }
}