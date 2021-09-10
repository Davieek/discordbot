const { MessageEmbed } = require("discord.js")
const { color, botname, servername, welcomeChannelId, botp, avatar } = require(__dirname + "/../config/nvconfig")

module.exports = {
  name: "guildMemberAdd",

  run(member) {
    const wChannel = member.guild.channels.cache.get(welcomeChannelId)
    const embed = new MessageEmbed()
      .setTitle(botp)

      .setColor(color)
      .setFooter("⨉ " + botname + " ⨉")
      .setThumbnail(avatar)
      .setImage("https://cdn.discordapp.com/attachments/755488771306291211/884758634750414868/3_3.gif")
      .addField("Polecamy przeczytać regulamin", "<#881658839626297385> ")
      .setDescription(`<@${member.user.id}>  Witaj na naszym serwerze ` + servername + " Jesteś " + member.guild.memberCount + " na serwerze" + `, życzymy miłej zabawy ! :circus_tent:`)
    wChannel.send(embed)
  }  
}