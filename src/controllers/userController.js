const userSchema = require("../models/user");

//CREANDO usuario
exports.createUser = (req, res) => {
  const user = new userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

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
