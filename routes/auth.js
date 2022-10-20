const { Router } = require('express'); // required sirve para importar
const { check } = require('express-validator');
const { login, register, revalidarToken } = require('../controllers/auth');


const router = Router();

// Login de usuario
router.post("/", [
    check('email', 'El email es obligatorio').notEmpty().isEmail(),
    check('password', 'La contraseña es obligatoria').notEmpty().isLength({ min: 6 })
], login); // Ruta, Middlewares, controlador

// Registro de usuarios
router.post("/register", [

], register);

// Validar y revalidar token
router.get("/renew", revalidarToken);

module.exports = router; //Para exportar una clase en node se hace con module.exports