'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _marked = [generate, range].map(regeneratorRuntime.mark);

function generate() {
    return regeneratorRuntime.wrap(function generate$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    console.log('Start');
                    _context.next = 3;
                    return 1;

                case 3:
                    _context.next = 5;
                    return 2;

                case 5:
                    _context.next = 7;
                    return 3;

                case 7:
                    console.log('Finish');

                case 8:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

// manual generator
function _generate() {
    var curr = 1;
    return _defineProperty({}, Symbol.iterator, function () {
        return {
            next: function next() {
                var result = { value: undefined, done: true };

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
        };
    });
}

var iterator = generate();
var _iterator = _generate()[Symbol.iterator]();

iterator.next();
console.log(_iterator.next());
console.log(_iterator.next());
console.log(_iterator.next());
console.log(_iterator.next());

// ============
function range(start, end) {
    var curr;
    return regeneratorRuntime.wrap(function range$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    curr = start;

                case 1:
                    if (!(curr <= end)) {
                        _context2.next = 6;
                        break;
                    }

                    _context2.next = 4;
                    return curr++;

                case 4:
                    _context2.next = 1;
                    break;

                case 6:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked[1], this);
}

var numbers = {
    range: regeneratorRuntime.mark(function range(start, end) {
        var curr;
        return regeneratorRuntime.wrap(function range$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        curr = start;

                    case 1:
                        if (!(curr <= end)) {
                            _context3.next = 6;
                            break;
                        }

                        _context3.next = 4;
                        return curr++;

                    case 4:
                        _context3.next = 1;
                        break;

                    case 6:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, range, this);
    })
};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator2 = range(1, 10)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator2.next()).done); _iteratorNormalCompletion = true) {
        var num = _step.value;

        console.log(num);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator3 = numbers.range(1, 10)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator3.next()).done); _iteratorNormalCompletion2 = true) {
        var _num = _step2.value;

        console.log(_num);
    }

    // ==============
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}