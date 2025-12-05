// const user = {
//     username: "ratnesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to website`);
//         // In the above statement, this refers to the current context.
//         console.log(this);
//     }

// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage();

// console.log(this);

// function chai() {
//     let username = "ritika";
//     console.log(this.username);
//     console.log(this);
// }

// chai();

// const chaiAgain = function() {
//     let username = "ratnesh";
//     console.log(this);
// }

// chaiAgain();


// Arrow Function

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4));

// Implicit return

const addTwoAgain = (num1, num2) => (num1 + num2);
console.log(addTwoAgain(5, 6));


// Very useful in react.
// When we use curly braces in an arrow function then return keyword is mandatory.
// Whenever we use parantheses in arrow function then return keyword is not mandatory.
// When we pass an object in an arrow function then we need to pass it inside parantheses.

const addImportant = () => ({username:"ratnesh"});
console.log(addImportant());