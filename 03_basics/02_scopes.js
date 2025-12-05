var c = 300;
let a = 300;

if(true) {
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("Inner a's value:", a);
}

console.log(a);
//console.log(b);
console.log(c);

function one() {
    const username = "Duniya";
    function two() {
        const aage = " Gol Hai."
        console.log(username + aage);
    }
    two();
    // console.log(aage); // will give error as we are accessing aage out of its scope.
}

one();

// ++++++++++++++++++++ interesting ++++++++++++++++++++

console.log(addOne(5));

// Function Statement
function addOne(num) {
    return num + 1;
}

console.log(addTwo(5));

// Function Expression
const addTwo = function(num) {
    return num + 2;
}