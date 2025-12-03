const name = "ratnesh"
const repoCount = 12

console.log(name + " " + repoCount);

// String interpolation -> we place the variable name not the actual value.
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ratneshkt')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);
console.log(gameName.charAt(4));
console.log(gameName.indexOf('h'));

// substring and slice

const newString = gameName.substring(0,4);
console.log(newString);
// In slice, we can give negative values as well and in that case, it will start from behind
const anotherString = gameName.slice(-8,4);
console.log(anotherString);
// Note: In case, we give negative values to substring, then it will ignore the negative value and will start from 0.


// trim and replace
// trimstart and trimend are there as well. 
const newStringOne = "     ratnesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

//replace()
const url = "https://ratnesh.com/ratnesh%20tiwary"
console.log(url.replace('%20', '-'));

// includes
console.log(url.includes('ratnesh'));
console.log(url.includes('ritika'));

// Converting a string to an array
let sentence = "Here, I am trying to convert a string into an array using the split function. It has two parameters, separator and limit."
let words = sentence.split(" ");
console.log(sentence);
console.log(words);