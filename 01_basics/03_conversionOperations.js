// To Number
let score = "33abc";

console.log(typeof score)
console.log(typeof(score))

let valueNumber = Number(score);
console.log(valueNumber);
console.log(typeof valueNumber);

// "33" => 33
// "33abc" => NaN (Not a Number)
// "hitesh" => NaN


// To Boolean
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(isLoggedIn)
console.log(typeof booleanIsLoggedIn)


// To String
let someNumber = 33;

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);

// ******************* Operations *******************

let value = 3
let negValue = -value
console.log(negValue);

// Basics Maths Operations
// +, -, *, **, /, %

let str1 = "Hello"
let str2 = " Ratnesh"
let str3 = str1 + str2
console.log(str3);
 
// String + Number or vice-versa
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

// Always use parantheses
console.log((3 + 4) * 5 % 3)

console.log(true)
console.log(+true)
console.log(-false)

// Prefix and Postfix

let gameCounter = 100;
console.log(gameCounter++);
console.log(++gameCounter);