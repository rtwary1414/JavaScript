// Dates

let myDate = new Date();
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(myDate.toDateString());
console.log(typeof myDate);

// In Javascript, months start from 0 if we write in single digit.
let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString());

let myCreatedDateAgain = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDateAgain.toLocaleString());

let myCreateDate = new Date("01-14-2023")
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime());

let newDate = new Date();
console.log(newDate.getUTCDate());
console.log(newDate.toLocaleString('default', { weekday: "long" })) 