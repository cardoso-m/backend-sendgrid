const express = require('express')
const app = express()
const routes = require('./src/routes/router')
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(routes)

app.get('/', (req, res) => {
    console.log('Funcionando!')
})

app.listen(8080, () => {
    console.log(`Servidor rodando na porta`)
})