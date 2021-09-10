const { MessageEmbed } = require("discord.js")
const { avatar } = require("../config/nvconfig")
const { prefix, color, botname, botp } = require(__dirname + "/../config/nvconfig")
module.exports = {
    name: "miniyt",
    description: "Komenda na informacje o miniyt",

    run(msg) {
        const { channel } = msg
        const embed = new MessageEmbed()
        .setTitle("miniyt ")
        .setThumbnail(avatar)
        .setColor(color)
        .setFooter("⨉ " + botname + " ⨉")
        .addField("Informacje o MiniYT:", "──────────────────────")
        .addField("Wymagania na range miniyt", "100 subskrybcji oraz 200 wyświetleń pod odcinkiem")
        .addField("Filmy w miesiącu :", "2 filmy w miesiącu ")
        .addField("• Posiada to samo co", "/vip oraz /stream {link} , /film {link}") 
        .addField("Aby uzyskać range piszesz do Paqlio!", "──────────────────────")
        .addField("Strona", "nethermc.pl")
  
        channel.send(embed), msg.react("✅")
        },
}