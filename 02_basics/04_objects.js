const tinderUser = new Object();

tinderUser.id = "123abc"
tinderUser.name = "Gayle"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullName: {
        userfullname: {
            firstname: "ritika",
            lastname: "maikap"
        }
    }
}

console.log(regularUser)
console.log(regularUser.fullName.userfullname.firstname);
console.log(regularUser.fullName.userfullname.lastname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// same problem as array i.e. object within an object
const obj3 = {obj1, obj2}
console.log(obj3)

// Hence, a better way is to use Object.assign and pass the objects
// We pass {} as an empty object, need to check the reason
const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);

// Mostly we will use spread operator not the Object.assign.

const obj5 = {...obj1, ...obj2}
console.log(obj5);

// keys, values and entries functions in Object
console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
// check whether a value is there or not and we pass the property as string
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Destructuring => very important
const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);

const {coursename: name} = course
console.log(name);

// Apna kaam dusre ke sar pe daalna is API
// JSON
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
// A lot of times, we receive an API data as objects within an array

