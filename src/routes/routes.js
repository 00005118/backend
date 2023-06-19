const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const plantController = require('../controllers/plantController')
const nurseryController = require('../controllers/nurseryController')
const alarmController = require('../controllers/alarmController')


/*#############    POST     ################*/

// Crear usuario
router.post('/plantsApi/users', userController.createUser);
//Crear una planta
router.post('/plantsApi/plants',plantController.createPlant)
//Crear un vivero
router.post('/plantsApi/nursery',nurseryController.createNursery)
//Crear una alarma
router.post('/plantsApi/users/:id/alarm',alarmController.createAlarm)



/*#############    GET     ################*/

//plantas
router.get('/plantsApi/plants',plantController.getPlants)
//usuarios
router.get('/plantsApi/users',userController.getAllUsers)
//Nursery vivero
router.get('/plantsApi/nursery',nurseryController.getNurseries)
//Alarmas de un usuario
router.get("/plantsApi/users/:id/alarm",alarmController.getAlarms)


//GET con data especifica
router.get("/plantsApi/users/:id",userController.getUser)
router.get('/plantsApi/plants/:id',plantController.getPlant)
router.get('/plantsApi/nursery/:id',nurseryController.getNursery)
router.get("/plantsApi/users/:id/alarm/:id_alarm",alarmController.getAlarm)



/*#############    PUT     ################*/

//usuarios
router.put("/plantsApi/users/:id",userController.putUser)
router.put("/plantsApi/plants/:id",plantController.putPlant)
router.put("/plantsApi/nursery/:id",nurseryController.putNursery)
router.put("/plantsApi/users/:id/alarm/:id_alarm",alarmController.putAlarm)



/*#############    DELETE     ################*/


//Eliminar una alarma
router.delete("/plantsApi/users/:id/alarm/:id_alarm",alarmController.deleteAlarm)
//Eliminar un usuario
router.delete("/plantsApi/users/:id",userController.deleteUser)
//Eliminar una planta
router.delete("/plantsApi/plants/:id",plantController.deletePlant)
//Eliminar un vivero
router.delete("/plantsApi/nursery/:id",nurseryController.deleteNursery)


module.exports = router;