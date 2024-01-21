const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send('Your Acc Is working')
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("7sn Is Working")
  })
}

module.exports = keepAlive
