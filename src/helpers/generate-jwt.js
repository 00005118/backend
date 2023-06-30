//se agrego una dependencia llamada jsonwebtoken para crear el token al iniciar secion
const jwt = require("jsonwebtoken");
require('dotenv').config()
// function that generates a JWT token
const generateJWT = (uid = "") => {
  return new Promise((resolve, reject) => {
    const payload = { uid };

    // signing the token
    jwt.sign(
      payload,process.env.JWT_SECRET, //palabra SECRETA que utiliza para crear el token
      {
        expiresIn: "24h", //tipo del token sea valido
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("Error generating Token");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  generateJWT,
};