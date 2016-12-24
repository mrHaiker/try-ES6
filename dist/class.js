'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// support in latest browsers

var Task = function () {
    function Task() {
        var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Task.getDefaultTitle();

        _classCallCheck(this, Task);

        this.title = title;
        this._done = false;
        Task.count++;
        console.log('Create task');
    }

    _createClass(Task, [{
        key: 'complete',
        value: function complete() {
            this._done = true;
            console.log('task ' + this.title + ' is completed');
        }
    }, {
        key: 'done',
        get: function get() {
            return this._done === true ? 'Completed' : 'Uncompleted';
        },
        set: function set(val) {
            if (val !== undefined && typeof val === 'boolean') {
                this._done = val;
            } else {
                console.log('Error! Please, put value true or false');
            }
        }
    }], [{
        key: 'getDefaultTitle',
        value: function getDefaultTitle() {
            return 'Task';
        }
    }]);

    return Task;
}();

Task.count = 0;

var task = new Task('Clean room');
console.log(task.done, task._done);