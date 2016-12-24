function greet(greeting = 'Hello', name = 'friend') {
    console.log(`${greeting} ${name}`);
}

greet('Hi', "Bill");
greet('Hi');
greet(undefined, 'Bill');
greet();

// =================

function sum(...values) {

    // Native way
    let sum = 0;

    values.forEach(function (val) {
        sum += val;
    });

    console.log(sum);

    // OR reduce method
    values.reduce(function (prevValues, currentValues) {
        return prevValues + currentValues;
    })
}

sum(5, 2, 5, 10);