const { MessageEmbed } = require("discord.js")
const { avatar } = require("../config/nvconfig")
const { prefix, color, botname, botp } = require(__dirname + "/../config/nvconfig")
module.exports = {
    name: "user",
    description: "Komenda na pomoc",

    run(msg) {
        const { channel } = msg
        const embed = new MessageEmbed()
        .setTitle("Komendy gracza " + botp)
        .setThumbnail(avatar)
        .setColor(color)
        .setFooter("⨉ " + botname + " ⨉")
        .addField("Komendy Użytkownika:", "──────────────────")
        .addField(prefix + "rekrutacja", "Sprawdza stan rekrutacji.")
        .addField(prefix + "podanie <tryb> <podanie>", "piszesz podanie do administracji.")
        .addField(prefix + "propozycja <propozycja>", "Wysyłasz propozycje.")
        .addField(prefix + "zglos <@gracz> <tryb/discord> <powód>", "Zgłasza użytkownika.")
        .addField(prefix + "botinfo ", "Pokazuje informacje na temat bota.")
        .addField(prefix + "info <@user> ", "Pokazuje informacje na temat użytkownika.")

  
        channel.send(embed), msg.react("✅")
        },
}