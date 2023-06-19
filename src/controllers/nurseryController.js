const nurserySchema = require("../models/nursery");

exports.createNursery = (req, res) => {
  const nursery = new nurserySchema(req.body);

  nursery
    .save()
    .then((data) => res.json(data))
    .catch((error) => req.json(error));
}

exports.getNurseries = (req,res)=>{
    nurserySchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => req.json(error));
}

exports.getNursery = (req,res)=>{
    const { id } = req.params;

    nurserySchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
}
exports.putNursery = (req,res)=>{
   //creando una ruta llamada user
  const { id } = req.params;
  const { name, video, description, ubication } = req.body;

  nurserySchema
    .updateOne({ _id: id }, { $set: { name, video, description, ubication } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}

exports.deleteNursery = (req,res) =>{
    const { id } = req.params;

    nurserySchema
      .findByIdAndDelete(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
}
