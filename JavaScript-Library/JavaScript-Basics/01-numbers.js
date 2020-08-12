console.log('Printing Numbers');

console.log(1);          // Result: 1
console.log(1 + 1);      // Result: 2
console.log(1.1);        // Result: 1.1
console.log(1.1 * 1.1);  // Result: 1.2100000000000002 (we'll discuss this in class)
console.log('Basic Operators');
console.log(5 + 5); // Addition operator (+)
console.log(6 - 6); // Subtraction operator (-)
console.log(7 * 7); // Multiplication operator (*)
console.log(8 / 8); // Division operator (/)
console.log(2 ** 3); // Exponentiation operator (**)

// modulus operator (%)
console.log('Modulus Operator');

console.log(10 % 5); // Result = 0 
console.log(10 % 4); // Result = 2
console.log(10 % 9); // Result = 1

console.log('shorthand operators');

//  Example +=    (a += b) = (a = a + b)
//  Example -=    (a -+ b) = (a = a - b)
//  Example *=    (a *= b) = (a = a * b)
//  Example /=    (a /= b) = (a = a / b)
//  Example %=    (a %= b) = (a = a % b)

var y = 5;
console.log(y);
y = y + 1;
console.log(y);
y += 1;
console.log(y);

console.log('Practice');
var z = 10;
console.log(z);
z+=1;
console.log(z);

var a = 20;
a-=1;
console.log(a);

var b = 25;
b*=2;
console.log(b);

var c = 50;
c/=2;
console.log(c);

console.log('Age Problem');
var age = 40;
age += 1;
age -= 20;
age *= 20;
console.log(age);