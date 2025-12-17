// reduce
const arr = [1,2,3,4];
const initialValue = 1;

// Using Normal Functions
const myTotal = arr.reduce( function (acc, currVal) {
    console.log(`Acc: ${acc} and Curr: ${currVal}`);
    return acc + currVal;
}, 0 );
console.log(myTotal);

// Using Arrow Functions
const yourTotal = arr.reduce( (acc, curr) => {
    console.log(`Acc is ${acc} and Curr is ${curr}`);
    return acc + curr;
});
console.log(yourTotal);

// If we do not give the initial value, then it will not throw an error.
// It will consider the first acc as the first element of the array instead of the initial value.
// and curr is considered as the second value of the array, whereas in case of an initial value, 
// acc is the initialvalue and curr is the first element of the array.

const ourTotal = arr.reduce( (acc, curr) => {
    console.log(`Acc is ${acc} and Curr is ${curr}`);
    return acc + curr;
}, 10);
console.log(ourTotal);

const shoppingCart = [
    {
        itemName: "Java Course",
        itemPrice: 999
    },
    {
        itemName: "Web Dev Course",
        itemPrice: 1999
    },
    {
        itemName: "Android Development",
        itemPrice: 5999
    },
    {
        itemName: "Data Science Bootcamp",
        itemPrice: 12999
    }
]

const totalPrice = shoppingCart.reduce( (acc, curr) => acc + curr.itemPrice, 0 );
console.log(totalPrice);