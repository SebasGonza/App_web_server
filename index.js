const express = require('express');


// Crear el servidor/aplicación de express

const app = express();

//configurar rutas
app.use('/api/auth', require('./routes/auth'));

app.listen(3000, () => {
    //Esto sirve para levantar el servidor
    console.log(`Servidor corriendo en puerto ${3000}`);
});
