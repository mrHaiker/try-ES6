function* generate() {
    console.log('Start');
    yield 1;
    yield 2;
    yield 3;
    console.log('Finish');
}


// manual generator
function _generate() {
    let curr = 1;
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    let result = { value: undefined, done: true };

                    if (curr <= 3) {
                        result.value = curr;
                        result.done = false;
                        curr++;
                    } else {
                        result.value = undefined;
                        result.done = true;
                    }

                    return result;
                }
            }
        }
    }
}

let iterator = generate();
let _iterator = _generate()[Symbol.iterator]();

iterator.next();
console.log(_iterator.next());
console.log(_iterator.next());
console.log(_iterator.next());
console.log(_iterator.next());


// ============
function* range(start, end) {
    let curr = start;
    while (curr <= end) {
        yield curr++;
    }
}

let numbers = {
    *range(start, end) {
        let curr = start;
        while (curr <= end) {
            yield curr++;
        }
    }
};

for (let num of range(1, 10)) {
    console.log(num);
}
for (let num of numbers.range(1, 10)) {
    console.log(num);
}

// ==============
