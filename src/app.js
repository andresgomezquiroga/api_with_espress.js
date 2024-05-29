const { config } = require('dotenv')
const express = require('express');
const { default: mongoose } = require('mongoose');
config()

const bookRoutes = require('../src/routes/book.routes');
const bodyParser = require('body-parser');
// Usamos express para los middlewares
const app = express();
app.use(bodyParser.json()) // parsear los Bodies

const MONGO_URL = process.env.MONGO_URL

app.use('/books', bookRoutes)

const port = process.env.PORT || 3000

mongoose.connect(MONGO_URL).then(() => {
    console.log('Bases de datos conectado con MongoDB')
    app.listen(port, () => {
        console.log(`El servidor se esta iniciando con el puerto ${port}`)
    })
}).catch((error) => console.log(error))

