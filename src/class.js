// support in latest browsers

class Task {
    constructor(title = Task.getDefaultTitle()) {
        this.title = title;
        this._done = false;
        Task.count++;
        console.log('Create task');
    }

    get done() {
        return this._done === true ? 'Completed' : 'Uncompleted';
    }

    set done(val) {
        if (val !== undefined && typeof val === 'boolean') {
            this._done = val;
        } else {
            console.log('Error! Please, put value true or false');
        }
    }

    complete() {
        this._done = true;
        console.log(`task ${this.title} is completed`);
    }

    static getDefaultTitle() {
        return 'Task';
    }

}

Task.count = 0;

let task = new Task('Clean room');
console.log(task.done, task._done);
