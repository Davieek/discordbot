const { MessageEmbed } = require("discord.js")
const { Collection } = require("discord.js")

const { prefix } = require(__dirname + "/../config/nvconfig")

const { readdirSync } = require("fs")

module.exports = (client) => {
    client.commands = new Collection()

    const commandFiles = readdirSync(__dirname + "/../commands").filter((file) =>
        file.endsWith(".cmd.js")
    )
    
    for (const file of commandFiles) {
        const command = require(__dirname + `/../commands/${file}`)

       if (command.name) {
           client.commands.set(command.name, command)
       }
    }
    
    client.on("message", (msg) => {
            const { author, guild, channel } = msg

            if (author.bot || !guild) {
                return
            }

            if (!msg.content.startsWith(prefix))
                return

            const args = msg.content
                .slice(prefix.length)
                .trim()
                .split(/ +/g)

            const cmd = args.shift().toLowerCase()
            
            if (!client.commands.has(cmd)) return

            try {
                client.commands.get(cmd).run(msg, args)
            } catch(error) {
                console.log(error)
            } 
        })
        
}
