const { body } = require ("express-validator");

const validators = {};

const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,32})/


validators.registerValidator = [
    body("username")
        .notEmpty().withMessage("El usuario no puede estar vacío")
        .isLength({min: 4, max: 32}).withMessage("El username debe tener entre 4 y 32 caracteres"),
    body("email")
        .notEmpty().withMessage("El correo no debe ser vacío")
        .isEmail().withMessage("Debes verificar formato del correo"),
    body("password")
        .notEmpty().withMessage("La contraseña no debe estar vacía")
        .matches(passwordRegexp).withMessage("La contraseña debe de tener entre 8 y 32 chars, y al menos 1 M, 1 m y 1 #")
]

module.exports = validators;