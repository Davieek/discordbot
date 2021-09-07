const { MessageEmbed } = require("discord.js")
const { avatar } = require("../config/nvconfig")
const { prefix, color, botname, botp } = require(__dirname + "/../config/nvconfig")
module.exports = {
    name: "youtuber",
    description: "Komenda na informacje o youtuberze",

    run(msg) {
        const { channel } = msg
        const embed = new MessageEmbed()
        .setTitle("Youtuber ")
        .setThumbnail(avatar)
        .setColor(color)
        .setFooter("⨉ " + botname + " ⨉")
        .addField("Informacje o Youtuberze:", "──────────────────────")
        .addField("Wymagania na range youtuber", "500 subskrybcji oraz 600 wyświetleń pod odcinkiem")
        .addField("Filmy w miesiącu :", "2 filmy w miesiącu ")
        .addField("• Posiada to samo co", "/mvp oraz /stream {link} , /film {link} , /fly") 
        .addField("Aby uzyskać range piszesz do Paqlio!", "──────────────────────")
        .addField("Strona", "nethermc.pl")
  
        channel.send(embed), msg.react("✅")
        },
}