const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// // Via the below statement, the whole array is inserted as a single element.
// marvel_heroes.push(dc_heros) // Wrong practice
// console.log(marvel_heroes);

const all_heros = marvel_heroes.concat(dc_heros);
console.log(all_heros);

// spread operator => breaking a glass glass and it spreads is the concept to remember this function
const all_new_heros = [...marvel_heroes, ...dc_heros]
console.log(all_new_heros)

// flat function to convert N-D Array to 1-D array
const another_array = [1, 2, 3, 4, [5, 6, 7], 8, [9, 10, [11, 12]]]
const new_another_array = another_array.flat(Infinity)
console.log(new_another_array);


console.log(Array.isArray("Ratnesh"))
console.log(Array.from("Ratnesh"))

// Interesting case 
console.log(Array.from({name: "Ratnesh"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));