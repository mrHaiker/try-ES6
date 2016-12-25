'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var xmen = ['Cyclops', 'Wolverine', 'Rogue'];

console.info('for');
for (var i = 0; i < xmen.length; i++) {
    console.log(xmen[i]);
}

console.info('for...in');
for (var key in xmen) {
    console.log(xmen[key]);
}

console.info('forEach');
xmen.forEach(function (xmen) {
    return console.log(xmen);
});

console.info('for...of');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = xmen[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var xman = _step.value;

        console.log(xman);
    }

    // ========
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var idGenerator = _defineProperty({}, Symbol.iterator, function () {
    var id = 1;
    return {
        next: function next() {
            var value = id > 100 ? undefined : id++;
            var done = !value;

            return {
                value: { value: value, done: done }
            };
        }
    };
});

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = idGenerator[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var id = _step2.value;

        console.log(id);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}