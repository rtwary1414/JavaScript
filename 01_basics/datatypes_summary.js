// Only 2 broad datatypes : 1. Primitive and 2. Non-Primitive.
// Officially, categorisation is done based on the way the data is kept in the memeory and the way it is accessed from the memory.

// Primitives are always call by value.
// Primitive are of 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt.

// Non-Primitives are always call by reference.

// Array, Objects, Functions

// Is JS statically typed or dynamically typed?

const score = 100
// In typescript, we need to specify the type as well
// const score:number = 100

const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// Symbol returns unique results/values. 
// Even though the value passed in id and anotherId is the same, the return value would be different. 
// Hence, a comparison would obviously be false. 
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// BigInt
const bigNumber = 3456594287434n;
console.log(bigNumber)



// Reference (Non primitive)

// Arrays 
const heros = ["shaktiman", "naagraj", "doga"]

// Objects. 
let myObj = {
    name: "hitesh",
    age: 22,

}

// Functions
// Function's return type is function but it is known as object function
const myFunctions = function myFirstFunction () {
    console.log("Storing the function in a variable")
}

// Identifying the datatypes
console.log(typeof bigNumber)
console.log(typeof myFunctions)
console.log(typeof outsideTemp)
console.log(typeof myObj)
console.log(typeof id)
console.log(typeof scoreValue)
console.log(typeof score)
console.log(typeof heros)

// All the datatype of non primitive datatypes are Objects but for functions, it is function object.


// Stack (Primitive) , Heap (Non-Primitive)
// In case of primitive datatypes,the values are stored in the stack and we get a copy of the value.
// In case of non-primitive datatypes, the values are stored in the heap and we get a reference to it.

// String example
let myYoutubeName = "RatneshTiwarydotcom";

let anothername = myYoutubeName
anothername = "chaiaurcode"
myYoutubeName = "NoYoutubeNow"

console.log(anothername)
console.log(myYoutubeName)


// Object example
let userOne = {
    email : "users@google.com",
    upi : "user@ybl.axis"
}

console.log(userOne)

let userTwo = userOne
console.log(userOne)
console.log(userTwo)

// Changed the original value via a reference that points to the value in the heap.
userTwo.email = "ratnesh@google.com"
console.log(userOne)
console.log(userTwo)