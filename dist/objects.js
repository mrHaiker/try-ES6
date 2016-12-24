"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// latest ver support this
var firstName = "Bill",
    lastName = "Gates",
    email = 'billgates@microsoft.com';

var person = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    sayHello: function sayHello() {
        console.log("Hi, my name is " + firstName + " " + lastName);
    },

    // ES6
    get fullName() {
        return this.fullName + " " + this.lastName;
    },
    set fullName(val) {
        this.firstName = val;
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
    var _ref;

    return _ref = {}, _defineProperty(_ref, property, value), _defineProperty(_ref, '_' + property, value), _defineProperty(_ref, property.toUpperCase(), value), _defineProperty(_ref, 'get' + property, function () {
        return this[property];
    }), _ref;
}

console.log(createCar('vin', 1));