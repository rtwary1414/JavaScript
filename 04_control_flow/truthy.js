const userEmail = "r@ratnesh.ai";
const userEmail1 = [];


if(userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values => false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values => All other values apart from the above falsy values are truthy values
// Some surprising truthy values are "0", 'false', " ", [], {}, function(){}, 

if(userEmail1.length === 0) {
    console.log("Array is empty");
}

// How to check if an object is empty or not
const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
// This operator checks for null and undefined. If it's a null or undefined then it assigns the other value.

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = undefined ?? 15;
// We can use this operator multiple times in a statement.
// val1 = null ?? 10 ?? 20. It takes the first value it finds apart from null and undefined.
console.log(val1);


// TERNARY Opeartor
// Syntax
//condition ? true : false;
const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("More than 80") : console.log("Less than 80");