const { Client } = require("discord.js")

const ytdl = require("ytdl-core");

const commandHandler = require("./handlers/command.handlers")
const eventHandler = require("./handlers/event.handlers")

const { token, prefix, botname, author } = require("./config/nvconfig")

const client = new Client()

const queue = new Map();

commandHandler(client)
eventHandler(client)


client.on("ready", () => {
    console.log(`

  ───────────────────
   Hello in ` + botname + `
  ───────────────────
     Bot is ready!

    Bot create by:
   ` + author + `
  ───────────────────
   
  `);
  client.user.setActivity(prefix + 'pomoc' + ' | ' + prefix +'help', { type: "LISTENING"})
  
})

client.login(token)

client.on("debug", () => {})
client.on("warn", () => {})
client.on("error", () => {})



