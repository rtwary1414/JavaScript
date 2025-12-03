const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString())
console.log(typeof balance)
console.log(balance.toString().length);

// To determine the precision i.e. the number of digits after the decimal point.
console.log(balance.toFixed(2));

// toPrecision(number). here, the number justifies the limit of precision values.
const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3));

// Here, the toLocaleString converts the number to US standardization
const hundreds = 1000000
console.log(hundreds.toLocaleString());
// Indian standard
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++ Maths +++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(3 - 72));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 6, 7, 1, 21))
console.log(Math.max(4, 6, 7, 1, 21))

// The value for Math.random() would always be between 0 and 1.
console.log(Math.random())
// Adding 1 because floor can give 0 in case value is 0.4
console.log((Math.floor(Math.random() * 10) + 1))
console.log((Math.random() * 10) + 1)

// Small Trick for getting the value between an interval
const min = 10;
const max = 20;

// Doing plus 1 to avoid 0 and adding minimum so that we get the minimum value as given to us.
console.log(Math.floor(Math.random() * (max - min + 1)) + min)