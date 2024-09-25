const User = require('./proyect/models/User');
const mathOperations = require('./proyect/models/utils/mathOperations');
const vehicleController = require('./proyect/models/controllers/vehicleController');


const user = new User('Manuel Ibañez', 30); //instancia de User
user.greet();

console.log('PI:', mathOperations.PI);
console.log('Add:', mathOperations.add(10, 5));
console.log('Subtract:', mathOperations.subtract(10, 5));