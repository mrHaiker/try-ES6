let lang = ['JS', 'PHP', 'Python', 'Ruby'];

// let js = lang[0];
// let php = lang[1];

let [js, php, py, rb] = lang;

console.log(js, php, py, rb);
// ==================

let scores = [3, 4, [5, 6]];

let [low, mid, [high, higher]] = scores;

console.log(low, mid, high, higher);


//=====================
function computerScore([low, mid]) {
    console.log(low, mid);
}

computerScore([3, 4]);
//=====================

function getScores() {
    return [3,4,5];
}

let scores1 = getScores();
console.log(scores1);
let [_low, _mid, _high] = getScores();
console.log(_low, _mid, _high);

//================

let yes = "Yes";
let no = "No";

[yes, no] = [no, yes];

console.log(`Yes is ${yes}`);
console.log(`No is ${no}`);

