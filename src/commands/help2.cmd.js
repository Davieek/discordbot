const { MessageEmbed } = require("discord.js")
const { prefix, color, botname, botp, avatar  } = require(__dirname + "/../config/nvconfig")
module.exports = {
    name: "help",
    description: "Komenda na pomoc",

    run(msg) {
        const { channel } = msg
        const embed = new MessageEmbed()
        .setTitle("Pomoc - " + botp)
        .setThumbnail(avatar)
        .setColor(color)
        .setFooter("⨉ " + botname + " ⨉")
        .addField(prefix + "server", "pokazuje informacje o serwerze.")
        .addField(prefix + "4fun", "pokazuje komendy 4FUN.")
        .addField(prefix + "user", "pokazuje komendy dostępne dla gracza.")
        .addField(prefix + "administracja", "pokazuje komendy dla Administracji.")
        .addField(prefix + "social", "pokazuje nasze Social Media.")
  
        channel.send(embed), msg.react("✅")
        },
}