const { Router } = require('express'); // required sirve para importar
const { login, register, revalidarToken } = require('../controllers/auth');


const router = Router(); 

// Login de usuario
router.post("/", login);

// Registro de usuarios
router.post("/register", register);

// Validar y revalidar token
router.get("/renew", revalidarToken);

module.exports = router; //Para exportar una clase en node se hace con module.exports