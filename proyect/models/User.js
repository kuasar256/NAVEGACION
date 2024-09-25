class User {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    greet() {
        console.log(`hola, mi nombre es: ${this.nombre}, y tengo, ${this.edad}.`);
    }
}

module.exports = User;