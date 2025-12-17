// map
const myNumbers = [1,2,3,4,5,6,7,8,9,10];
// myNumbers.map( (item) => console.log(item + 10) )

// const checkNums = myNumbers.map( (item) => item + 10 )
// console.log(checkNums);

// Chaining

const newNums = myNumbers.map( (item) => item * 10 )
.map( (item) => item + 1 ).filter( (item) => item >= 40 );

console.log(newNums);