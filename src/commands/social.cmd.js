const { MessageEmbed } = require("discord.js")
const { prefix, color, botname, botp, avatar  } = require(__dirname + "/../config/nvconfig")
module.exports = {
    name: "social",
    description: "Komenda na pomoc",

    run(msg) {
        const { channel } = msg
        const embed = new MessageEmbed()
        .setTitle("Pomoc - " + botp)
        .setThumbnail(avatar)
        .setColor(color)
        .setFooter("⨉ " + botname + " ⨉")
        .addField("Youtube", "yt.nethermc.pl")
        .addField("Facebook", "fb.nethermc.pl")
  
        channel.send(embed), msg.react("✅")
        },
}