"use strict";
//1.
console.log("Hello World!");
let Vehicle = {
    model: "Boring generic vehicle",
    color: "Red",
    year: 1993,
    power: 60
};
console.log(Vehicle);
let Car = {
    model: "Ford focus",
    color: "Green",
    year: 2016,
    power: 150,
    bodyType: "Hatchback",
    wheelCount: 4
};
let Plane = {
    model: "Boeing 777",
    color: "White",
    year: 2020,
    power: 170000,
    wingspan: 65
};
let Boat = {
    model: "Bella",
    color: "Black",
    year: 2022,
    power: 100,
    draft: 0.42
};
console.log(Car);
console.log(Plane);
console.log(Boat);
//4.
class VehicleService {
    items;
    constructor() {
        this.items = [];
    }
    add(vehicle) {
        this.items.push(vehicle);
    }
    list() {
        return this.items;
    }
}
let cars = new VehicleService;
let boats = new VehicleService;
cars.add(Car);
boats.add(Boat);
console.log(cars.list());
console.log(boats.list());
