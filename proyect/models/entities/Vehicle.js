class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    getDetails() {
        console.log(`Vehicle Brand: ${this.brand}, Model: ${this.model}`);
    }
}

module.exports = Vehicle;