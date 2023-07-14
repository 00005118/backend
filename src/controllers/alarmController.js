const alarmSchema = require("../models/user")

exports.createAlarm = async(req,res) => {
  //creando una ruta llamada user
  // buscar el usuario por id, parms
  const { id } = req.params;
  // construir el objeto alarm a partir de los datos del body
  const { plant_id, time, group, water } = req.body;
  const document = await alarmSchema.findOne({ _id: id });

  if (!document) {
    res.status(404).json({
      message: "Not found",
    });
  }

  // modificar el usario para agregar la alarmar, agregar un objeto a un arreglo con mongosee
  document.alarms.push({ plant_id, time, group, water });
  await document.save();

  return res.status(201).json({msg: "Alarm create Successfully"});
}

exports.getAlarms = async(req,res)=>{
    const { id } = req.params;

    alarmSchema
      .findById(id)
      .then(async (user) => {
        
        //Consultamos tamaño del arreglo
        if(user.alarms.length <=0) return console.log({message:"Usuario no existe"}.end()) 
        const alarmsUser = user.alarms
  
        // Dentro de user vas buscar la alarma
        //usamos la funcion find que pertenece a javaScrip para compara el arreglo de alarmas
        if(!alarmsUser)
          return res.status(404).json({ error: "Alarm not found" });
      
        return res.status(200).json(alarmsUser);
      }) 
      .catch((error) => {
         return res.status(500).json({ message: error });
      })
}

exports.getAlarm = async(req,res)=>{
    const { id, id_alarm } = req.params;

    alarmSchema
      .findById(id)
      .then(async (user) => {
        
        //Consultamos tamaño del arreglo
        if(user.alarms.length <=0) return console.log({message:"Usuario no existe"}.end()) 
        console.log("Llegamos Aqui",user.alarms )
  
        // Dentro de user vas buscar la alarma
        //usamos la funcion find que pertenece a javaScrip para compara el arreglo de alarmas
        const foundAlarm = user.alarms.find(alarm => alarm._id.equals(id_alarm));
  
        if(!foundAlarm)
          return res.status(404).json({ error: "Alarm not found" });
      
        return res.status(200).json(foundAlarm);
      }) 
      .catch((error) => {
         return res.status(500).json({ message: error });
      })
}

exports.putAlarm = async(req,res)=>{
    const { id, id_alarm } = req.params;
 
    const { plant_id,time,group,water } = req.body;
  
    alarmSchema
      .findById(id)
      .then(async (user) => {
        // Dentro de user vas buscar la alarma
        console.log(user.alarms.length);
        if(user.alarms.length <=0) return console.log({message:"Usuario no existe"}.end()) 
        console.log("Llegamos Aqui",user.alarms )
  
        const foundAlarm = user.alarms.find(alarm => alarm._id.equals(id_alarm));
        
        if(!foundAlarm)
          return res.status(404).json({ error: "Alarm not found" });
      
        //UNA forma de MODIFICAR un registro
        foundAlarm.plant_id = plant_id 
        foundAlarm.time = time
        foundAlarm.group =group
        foundAlarm.water = water
  
        await user.save(foundAlarm);
  
        return res.status(200).json({msg: "Alarm update Successfully"});
      })
      .catch((error) => {
         return res.status(500).json({ message: error });
      })
}

exports.deleteAlarm = (req,res)=>{
    const { id, id_alarm } = req.params;

    alarmSchema
    .findById(id)
    .then(async (user) => {
      // Dentro de user vas buscar la alarma
      console.log(user.alarms.length);

      if(user.alarms.length <=0) return console.log({message:"Alarma no existe"}.end()) 
      //console.log("Llegamos Aqui",user.alarms )

      console.log("Llegamos aqui en el delete")
      const foundAlarm = user.alarms.remove(id_alarm)

      console.log("valores: ", foundAlarm)

      return res.status(200).json({msg: "Alarm delete Successfully"})
    })
    .catch((error) => {
       return res.status(500).json({ message: error });
    })
}