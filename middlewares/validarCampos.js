const { response, request } = require("express");
const { validationResult } = require("express-validator");

const validarCampos = (req = request, res = response, next) => {

    const errores = validationResult(req);

    console.log(errores);

    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        });
    }

    next();

}


module.exports = {
    validarCampos,
}