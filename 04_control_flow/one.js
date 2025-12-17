// if
const isUserloggedIn = true;

if(isUserloggedIn) {

}

if(2 == "2") {
    console.log("Executed");
}

// <, >, <=, >=, ==, !=, ===, !== (checks negative sign)

const temperature = 41;

if(temperature < 50 && temperature === 41){
    console.log("less than 50")
}

// if-else
if(temperature === 41){
    console.log("Temperature is less than 50");
} else {
    console.log("Temperature is more than 50");
}

const score = 200;

if(score > 100) {
    const power = "fly";
    console.log(`User power: ${power}`)
}
// console.log(`User power: ${power}`) will give an error as power is out of score.
// If we use var, then the scope of power will be outside and we'll not get any error.

const balance = 1000;
if(balance > 500) console.log("Incorrect Pattern"), console.log(" of writing code.");

// Nesting i.e. multiple if-else and multiple true or false conditions

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// AND operator => all conditions should be true
if(userLoggedIn && debitCard && 2 === 2){
    console.log("Allow to buy the course.");
}

// OR operator => one of the conditions must be true
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in.");
}