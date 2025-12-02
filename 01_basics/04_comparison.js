console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 == 1)
console.log(2 != 1)

console.log("2" > 1)
console.log("02" > 1)


// Conversions involving "null" and/or "undefined" shall always be avoided

console.log(null > 0)
console.log(null == 0)

// The below statement will be true because the equality checks and comparisons work differently. 
// Comparisons convert null to a number treating it as 0.
// That's why null >= 0 is true and null > 0 is false.
console.log(null >= 0)

// All returns false
console.log(undefined == 0);
console.log(undefined > 0)
console.log(undefined < 0)

// NOTE: The working of comparisons and equals operator has very different working.

// Strict check : Checks both the values and datatypes. Below is an example: 

console.log("2" == 2) // Only value will be checked
console.log("2" === 2) // Both the values and datatypes will be checked