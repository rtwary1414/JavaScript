// Immediately Invoked Function Expression (IIFE)

(function chai() {
    console.log("DB CONNECTED");
})();

// Convert the above function to an arrow function.
// Did it on my own 

( () => (console.log("DB CONNECTED")) )();

// To stop iife, semicolon is mandatory

// How to pass parameters in arrow function in an iife
( (name) => (console.log(`DB connected with ${name}`)))('ratnesh');

// GEC is created and it is referred by this