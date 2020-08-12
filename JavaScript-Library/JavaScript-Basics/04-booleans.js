let isLoggedIn = true;
let isAuthenticated = true;
let hasLoggedInToday = false;
let hasToken = false;

// ==  Equality  "Converts the operands if they are not of the same type, then applies strict comparison."
// === Strict Eqiuality  "The identity operator returns true if the operands are strictly equal . . . with no type conversion." 1
// !=  Inequality
// !== Strict Enquality

2=="2" //this would return true
2==="2"// this would return false

//Printing Values

console.log(2 > 1); //true
console.log(3 < 2); //false

var test = 2 >= 3; //What will this print?
console.log(test);
console.log("Two is greater than one? " + (2 > 1));
console.log(3 >= 1);

console.log("Password12!" === "Password12!!");
console.log(1 !== 2);
console.log(10 !== 10);

console.log("&& :", 2===2 && 1===1 ); //true because?
console.log("|| :", 2===2 || 2===1 ); //true because?
console.log("!=", 2 != 1) //true because?
