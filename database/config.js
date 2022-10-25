const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.BD_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });
        console.log('Bd online');

    } catch (error) {
        console.log(error);
        throw new Error('error a la hora de conectar');
    }
}


module.exports = {
    dbConnection
}