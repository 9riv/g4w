const keepAlive = require("./server")
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
const { Client } = require('discord.js-selfbot-v11')
const client = new Client();

client.on('ready', () => { 
  client.user.setActivity("Subscribe to 7sn", {type: "STREAMING", url: "https://twitch.tv/7sn7h"})
   console.log(`Successfully enabled Streaming twitch Mode.`)
})

keepAlive()
client.login(TOKEN);
