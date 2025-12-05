// Example 1
function sayMyName() {
    console.log("R");
    console.log("A");
    console.log("T");
    console.log("N");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName();

// Example 2: 
// The inputs taken while declaring a function are called parameters.
function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

// The values passed in the function are called arguments.
addTwoNumbers(3, 4);


// Example 3: 
function isLoggedIn(username = "San Churo"){
    if(!username){
        console.log("Please enter the username");
        return;
    }
    return `${username} just logged in to rock the day.`;
}

console.log(isLoggedIn("Ratnesh"));


// We have something known as Rest operator which has a syntax similar to the spread operator i.e. ... (3 dots as the symbol).
// If we build a shopping cart wherein the user adds multiple items, then we cannot have that many number of variables to store the details.
// Hence, Rest operator comes to our rescue wherein we use 3 dots before the variable and it stores any number of arguments.
// The Rest operator is same as var-args or variable arguments in Java.

function shoppingCartItems(...num1){
    return num1;
}

function shoppingCartItemsAgain(val1, val2, ...num1){
    return num1;
}
console.log(shoppingCartItems(200, 300, 400, 1200));
console.log(shoppingCartItemsAgain(2000, 4000, 5000, 12000));

// Passing the object into a function
users = {
    username: "Ratnesh 141",
    age: 28
}

function checkUser(anyUser) {
    console.log(`${anyUser.username} has reached Jupiter at the age of ${anyUser.age}`);
}

checkUser(users);


// Passing an array into a function
arr = [1,2,3,4,5];

function checkValue(someArray) {
    return someArray[1];
}

console.log(checkValue(arr));