// Arrays can be heterogeneous as well as homogeneous.
// Arrays in JS are resizeable.

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[0]);
console.log(myArr);

const heros = ["shaktiman", "maagraj"]

const myArr2 = new Array(10, 20, 30, 40);
console.log(myArr2);

// push() and pop()
myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr)

// shift() and unshift()
myArr.unshift(9);
console.log(myArr)
myArr.shift()
console.log(myArr)

// join()
const newArr = myArr.join()
console.log(myArr)
console.log(newArr)

// slice and splice
// Biggest difference is that splice manipulates the original array 
// whereas slice does not manipulates the original array. 
// Also, the last index is not included in slice.
console.log("A ", myArr)

const myn1 = myArr.slice(1, 3);
console.log(myn1)
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);