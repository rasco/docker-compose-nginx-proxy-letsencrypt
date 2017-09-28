const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

const serverPort = process.env.PORT || 80;
app.listen(serverPort, function () {
  console.log('Example app listening on port '+serverPort)
})