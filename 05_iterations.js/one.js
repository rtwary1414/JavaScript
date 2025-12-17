// for loop
// Same as other languages
// In case of arrays, we do not get out of bounds exception. 
// break and continue
 
// for-of loop
["", "", ""]
[{}, {}, {}]

const arr = [1,2,3,4,5];

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World";
for (const greet of greetings) {
    console.log(`Each character is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India");
map.set('US', "United States of America");
map.set('FR', "France");
map.set('IN', "India");

console.log(map);
console.log(map.entries)

for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {
    console.log(key,':-', value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'SpiderMan',
    'game3' : 'GTA Vice City'
}

// myObject is not iterable
// for (const [key, value] of myObject) {
//     console.log(key, value);
// }

// Maps are iterable using for-of but object is not.

