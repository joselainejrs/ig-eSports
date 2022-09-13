import express from 'express'

const app = express()

app.get('/', function (req, res) {
  res.json([
    { id: 1, name: "nome" },
    { id: 2, name: "nome" },
    { id: 3, name: "nome" },
  ])
})

app.listen(3333)