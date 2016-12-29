let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

console.info('for');
for (let i = 0; i < xmen.length; i++) {
    console.log(xmen[i]);
}


console.info('for...in');
for (let key in xmen) {
    console.log(xmen[key]);
}


console.info('forEach');
xmen.forEach(xmen => console.log(xmen));


console.info('for...of');
for (let xman of xmen) {
    console.log(xman);
}

// ========

let idGenerator = {
    [Symbol.iterator]() {
        let id = 1;
        return {
            next() {
                let value = id > 100 ? undefined : id++;
                let done = !value;

                return {
                    value: { value, done }
                }
            }
        };
    }
};

