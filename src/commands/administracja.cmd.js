const { MessageEmbed } = require("discord.js")
const { avatar } = require("../config/nvconfig")
const { prefix, color, botname, botp, colorfail } = require(__dirname + "/../config/nvconfig")
module.exports = {
    name: "administracja",
    description: "Komenda na pomoc",

    run(msg) {
        const { channel, member } = msg
        if (!member.permissionsIn(channel).has(["ADMINISTRATOR"])) {
            const embed = new MessageEmbed()
            .setTitle(botp)
      
            .setColor(colorfail)
            .setFooter("⨉ " + botname + " ⨉")
            .addField(`Błąd:`, "Nie masz permisji do tej komendy!")
            
            return channel.send(embed), msg.react("❌")
          } else {
            const embed = new MessageEmbed()
            .setTitle("Komendy administracji " + botp)
            .setThumbnail(avatar)
            .setColor(color)
            .setFooter("⨉ " + botname + " ⨉")
            .addField("Komendy Administracji:", "──────────────────")
            .addField(prefix + "ban (@Uzytkownik) (powód)", "Banuje użytkownika na serwerze.")
            .addField(prefix + "kick (@Uzytkownik) (powód)", "Kickujesz użytkownika z serwera.")
            .addField(prefix + "ogl (@Wiadomość)", "Wysyła ogłoszenie.")
            .addField(prefix + "clear (1-100)", "czyści wiadomości.")
    
      
            channel.send(embed), msg.react("✅")
          }
        },
}