const {response} = require('express')

const login = (req, res = response) => {
    res.json({
        ok: true,
        msg: "Login good",
    });
};

const register = (req, res) => {
    res.json({
        ok: true,
        msg: "Crear Usuario /register",
    });
};

const revalidarToken = (req, res) => {
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