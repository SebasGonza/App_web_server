const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Variables de entorno


// Crear el servidor/aplicación de express

const app = express();

//Directorio Publico

// app.use(express.static('public'));

//CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json())



//configurar rutas
app.use('/api/auth', require('./routes/auth'));

//Esto sirve para levantar el servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});



