const { response, request } = require('express');
const { validationResult } = require('express-validator');

const login = (req = require, res = response) => {
    const { email, password } = req.body;
    const errores = validationResult(req);

    console.log(errores);

    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        });
    }

    console.log(email, password);
    res.json({
        ok: true,
        msg: "Accedio satisfactoriamente",
    });
};

const register = (req = request, res = response) => {
    // console.log(req.body);
    const { email, name, password } = req.body;
    console.log(email, name, password);
    res.json({
        ok: true,
        msg: "Crear Usuario /register",
    });

};

const revalidarToken = (req = request, res = response) => {
    res.json({
        ok: true,
        msg: "Revalidar Token /renew",
    });
};

module.exports = {
    login,
    register,
    revalidarToken
}