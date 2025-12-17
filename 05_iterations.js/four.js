const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach( (item) => {
    console.log(item);
    return item;
});

// Since the function does not return anything hence undefined is printed at last.
console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10];

console.log(myNums.filter( (val) =>  val > 4  ))

const newNums = myNums.filter( (val) =>  val > 4  )
console.log(newNums);

// In the above example, we will not get output if we place curly braces in the arrow function.
// Also, if we print the arr in the same line without storing it in a variable, 
// then we need to use the return keyword inside the curly braces. Otherwise, in the 
// absence of curly braces, return keyword is not needed in any of the above two cases.
// In short, if we open scope, then return keyword is necessary.

const newNums1 = myNums.filter( (val) =>  val > 4  )
console.log(newNums);

// To do the same above thing using forEach, then we needed to do as below
// No need to use forEach, because it returns a boolean value and we do not have any usage with those values.
console.log(myNums.forEach( (nums) => nums > 4 ))

