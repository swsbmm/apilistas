// se monta el servidor en express con cors para poder manejar cabeceras.
// la idea es servir los archivos de la logica al navegador.

const express = require('express')
const router = express.Router()
const cors = require('cors')
const app = express()
const port = 8080
const path = require('path')
const bodyParser = require('body-parser')
const listas = require('./app.js')

// Aqui estamos configurando express para usar body-parser como middle-ware.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.use(express.static(path.join(__dirname, 'public'))) // esta linea que hace?

// app.use('/', express.static('public'));

app.get('/', (req, res) => {
  //esto es para manejar la peticion en localhost:/
  res.sendFile(path.join(__dirname, 'public', 'index.html')) //responde con un archivo
})

app.post('/', (req, res) => {
  let numeros = req.body
  listas()
})

app.use('/', router)
app.listen(port, () => {
  console.log(`Server on:  http://localhost:${port}`)
})
