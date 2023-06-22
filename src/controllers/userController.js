const userSchema = require("../models/user");
const bcrypt = require("bcrypt");
const { generateJWT } = require("../helpers/generate-jwt");
const User = require("../models/user");
const jwt = require('jsonwebtoken')

//CREANDO usuario y creando token
exports.createUser = async(req, res) => {
  const { name, email, password,age,position} = req.body;

  //guardando datos que vienen del body
  const user = new User({ name, email, password,age,position });

  //encriptando contraseña
  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(password,salt)
  
  //Guardando datos
  await user.save();
  res.status(201).json({
    msg: "User Created Successfully",
  });
};

////////////////////////////////////////////////////////////////////////////////
//Creando login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Busca el usuario por su email en la base de datos
    const user = await User.findOne({ email });

    // Verifica si el usuario existe
    if (!user) {
      return res.status(400).json({ message: "Credenciales inválidas" });
    }

    // Verifica si la contraseña es correcta
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Credenciales inválidas" });
    }

    // Genera el token JWT
    const token = await generateJWT(user._id);

    res.status(200).json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

////////////////////////////////////////////////////////////////////////////////



//CONSULTAR
exports.getAllUsers = (req, res) => {
  userSchema
    //usamos la propiedad find para hacer get(consultar)
    .find()
    // si todo sale bien mostamos los datos
    .then((data) => res.json(data))
    // si todo sale mal mostamos el error
    .catch((error) => res.json({ message: error }));
};

//CONSULTAR un usuario en ESPECIFICO
exports.getUser = (req, res) => {
  const { id } = req.params;
  //usando modelo de usuario
  userSchema
    .findById(id)
    // si todo sale bien mostamos los datos
    .then((data) => res.json(data))
    // si todo sale mal mostamos el error
    .catch((error) => res.json({ message: error }));
};

//MODIFICAR user
exports.putUser = (req, res) => {
  //creando una ruta llamada user
  //usamos la propiedad find para hacer get
  const { id } = req.params
  // agarramoso del cuerpo del mensaje los datos a modificar
  const { name, email, password, age, position } = req.body;

  //usando modelo de usuario
  userSchema
    //usamos la propiedad updateOne para modificar un registro
    .updateOne({ _id: id }, { $set: { name, email, password, age, position } })
    // si todo sale bien mostamos los datos
    .then((data) => res.json(data))
    // si todo sale mal mostamos el error
    .catch((error) => res.json({ message: error }));
}

//DELETE usuario
exports.deleteUser = (req, res) => {
  const { id } = req.params

  //usando modelo de usuario
  userSchema
    //en este caso busca el id y lo muestra y elimina
    .findByIdAndDelete(id)
    // si todo sale bien mostamos los datos
    .then((data) => res.json(data))
    // si todo sale mal mostamos el error
    .catch((error) => res.json({ message: error }))
}
