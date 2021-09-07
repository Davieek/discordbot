const { MessageEmbed } = require("discord.js")
const { avatar } = require("../config/nvconfig")
const { prefix, color, botname, botp } = require(__dirname + "/../config/nvconfig")
module.exports = {
    name: "4fun",
    description: "Komenda na pomoc",

    run(msg) {
        const { channel } = msg
        const embed = new MessageEmbed()
        .setTitle("Pomoc - " + botp)
        .setColor(color)
        .setThumbnail(avatar)
        .setFooter("⨉ " + botname + " ⨉")
        .addField("Komendy 4FUN:", "──────────────────")
        .addField(prefix + "kiss <@Uzytkownik>", "Całujesz użytkownika.")
        .addField(prefix + "kill <@Uzytkownik>", "Zabijasz użytkownika.")
        .addField(prefix + "przytul <@Uzytkownik>", "Przytulasz użytkownika.")
        .addField(prefix + "przywitaj <@Uzytkownik>", "Przywitaj użytkownika.")
  
        channel.send(embed), msg.react("✅")
        },
}