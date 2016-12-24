'use strict';

function greet() {
    var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'friend';

    console.log(greeting + ' ' + name);
}

greet('Hi', "Bill");
greet('Hi');
greet(undefined, 'Bill');
greet();

// =================

function sum() {

    // Native way
    var sum = 0;

    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
    }

    values.forEach(function (val) {
        sum += val;
    });

    console.log(sum);

    // OR reduce method
    values.reduce(function (prevValues, currentValues) {
        return prevValues + currentValues;
    });
}

sum(5, 2, 5, 10);