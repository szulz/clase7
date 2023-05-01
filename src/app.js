//@ts-check
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([{id: 1 , nombre: 'loli'}])
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})