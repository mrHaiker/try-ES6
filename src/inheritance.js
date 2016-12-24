class Task {
    constructor(title) {
        this._title = title;
        this.done = false;
        Task.count++;
        console.log('create task');
    }

    get title() {
        return this._title;
    }

    set title(val) {
        this._title = val;
    }

    static getDefaultTitle() {
        return 'Task'
    }

    complete() {
        this.done = true;
        console.log(`Task ${this.title} is completed`);
    }
}

Task.count = 0;

class  SubTask extends Task {
    constructor(title, parent) {
        super (title);
        this.parent = parent;
        console.log('Create sub-task');
    }

    complete() {
        super.complete();
        console.log(`SubTask ${this.title} is completed`);
    }
}



let task = new Task('learn JS');
let subtask = new SubTask('Learn ES6', task);

console.log(SubTask.getDefaultTitle());
console.log(SubTask.count());

task.complete();
subtask.complete();

console.log(task);
console.log(subtask);
