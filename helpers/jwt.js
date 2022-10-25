const jwt = require('jsonwebtoken')

const generarJwt = (uid, name) => {

    const payload = { uid, name };
    return new Promise((resolve, reject) => {
        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: "2h"
        }, (err, token) => {

            if (err) {
                // Si existe un error el lo retorna
                console.log(err);
                reject(err);
            }

            else {
                // Si no existe devuelve el token
                resolve(token);
            }
        })
    });
}


module.exports = {
    generarJwt
}