// latest ver support this
let firstName = "Bill",
    lastName = "Gates",
    email = 'billgates@microsoft.com';

let person = {
    firstName,
    lastName,
    email,
    sayHello() {
        console.log(`Hi, my name is ${firstName} ${lastName}`);
    },
    // ES6
    get fullName() {
        return `${this.fullName} ${this.lastName}`;
    },
    set fullName(val) {
        this.firstName = val
    }
};

// ES5
// Object.defineProperty(person, 'fullName', {
//     get: function () {
//         return this.firstName + ' ' + this.lastName;
//     },
//     set: function (val) {
//         this.firstName = val;
//     }
// });

person.sayHello();

// ======================

function createCar(property, value) {
    return {
        [property]: value,
        ['_' + property]: value,
        [property.toUpperCase()]: value,
        ['get' + property]() {
            return this[property];
        }
    }
}

console.log(createCar('vin', 1));