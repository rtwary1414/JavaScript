const accountId = 21345;
let accountEmail = "ratnesh@hotmail.com"
var accountPassword = "12345";
accountCity = "Melbourne";
let accountState;

/*
Prefer not to use var
because of issue in block scope and functional scope
let name = "Ratnesh"
let name = "Ritika" (Not allowed in JS)
but the same is allowed in var
*/

console.log("The details are mentioned below: ");
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);