const { response, request } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generarJwt } = require('../helpers/jwt');

const login = (req = require, res = response) => {
    res.json({
        ok: true,
        msg: "Accedio satisfactoriamente",
    });
};

const register = async (req = request, res = response) => {
    const { email, password, name } = req.body;
    try {
        // Verificar si el usuario ya existe
        const usuario = await User.findOne({ email });

        if (usuario) {
            return res.status(400).json({
                ok: false,
                mesg: 'el usuario ya existe con ese email'
            });
        }


        // Crear usuario con el modelo
        const dbUser = new User(req.body);

        //Hashear la contraseña

        const salt = bcrypt.genSaltSync(10);
        dbUser.password = bcrypt.hashSync(password, salt);

        // Generar el JWT

        const token = await generarJwt(dbUser.id, dbUser.name);

        // Crear el usuario de DB
        await dbUser.save();

        // Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name: User.name,
            token: token 
        })


    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        });
    }


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