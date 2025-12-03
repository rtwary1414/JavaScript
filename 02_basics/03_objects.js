// singleton
// literal se no singleton but constructors se singleton banta hai

// object literals
// Object.create // this is the constructor method

// Declaring a symbol
const mySym = Symbol("key1")

// Creating an object
const JsUser = {
    name: "Ratnesh",
    "full name": "Ratnesh Kumar Tiwary",
    [mySym]: "key1",
    age: 28,
    location: "Melbourne",
    email: "ratnesh@mel.com",
    isLoggedIn: false,
    lastLoginDays: ["Friday", "Saturday", "Sunday"]
}

// The keys are stored as per their own datatype hence in the second option, we need to pass the key as a string.
// Also, if we give a key as "full name", then we cannot access it using a dot operator, hence, we need to access it using square brackets.
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "ratnesh@chatgpt.com"
// Object.freeze(JsUser); // does not allow any changes in the JsUser object
JsUser.email = "ratnesh@microsoft.com"
console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello, JS User");
}

// Using String Interpolation. Also, here this means the current object.
JsUser.greetingTwo = function() {
    console.log(`Hey, this is ${this["full name"]}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())