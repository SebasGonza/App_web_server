const { Router } = require('express'); // required sirve para importar
const { check } = require('express-validator');
const { login, register, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validarCampos');


const router = Router();

// Login de usuario
router.post("/", [
    check('email', 'El email es obligatorio').notEmpty().isEmail(),
    check('password', 'La contraseña es obligatoria').notEmpty().isLength({ min: 6 }),
    validarCampos
], login); // Ruta, Middlewares, controlador

// Registro de usuarios
router.post("/register", [
    check('email', 'El email es obligatorio').notEmpty().isEmail(),
    check('password', 'La contraseña es obligatoria').notEmpty().isLength({ min: 6 }),
    check('name', 'El nombre es obligatorio').notEmpty().isString().isLength({ min: 4 }),
    validarCampos
], register);

// Validar y revalidar token
router.get("/renew", revalidarToken);

module.exports = router; //Para exportar una clase en node se hace con module.exports