const { readdirSync } = require("fs")

const {
  Constants: { Events },
} = require("discord.js")

const serverEvents = Object.values(Events)

const serverEventsPath = "/events"

module.exports = (client) => {
  const events = readdirSync(
    __dirname + `/..${serverEventsPath}`,
  ).filter((file) => file.endsWith(".js"))

  let registeredEventsCount = 0

  for (const file of events) {
    const event = require(__dirname + `/../events/${file}`)

    if (!event.run) {
      console.log(`Event  crash`)
      process.exit(1)
    } else if (typeof event.run !== "function") {
      console.log(`Event  crash`)

      process.exit(1)
    }

    if (serverEvents.includes(event.name)) {
      client.on(event.name, event.run)
      registeredEventsCount++
    } else {
      console.log(`Event  crash`)
      process.exit(1)
    }
  }
}
