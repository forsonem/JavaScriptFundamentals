/**************************
FIZZ BUZZ (Conditionals Only)
**************************/
/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/

let FB = 1;

if(FB % 3 == 0 && FB % 5 ==0){
    console.log("Fizz Buzz");
}else if(FB % 3 == 0){
    console.log("Fizz");
}else if(FB % 5 == 0){
    console.log('Buzz');
}
else{
    console.log(`${FB} is not divisible by 3 or 5`);
}



let fb = 15;
switch(true){
    case (fb % 3 == 0 && fb % 5 ==0):
        console.log('FizzBuzz');
        break;
    case (fb % 3 ==0 ):
        console.log('Fizz');
        break;
    case (fb % 5 == 0):
        console.log('Buzz');
        break;
    default:
        console.log(`${fb} is not divisble by 3 or 5`);
        break;
}

var fbs =15

fbs % 3 == 0 && fbs % 5 ==0 ? console.log('Fizz Buzz'):
fbs % 3 == 0 ? console.log('Fizz'):
fbs % 5 == 0 ? console.log('Buzz'):
console.log(`${fbs} is not divisible by 3 or 5`);

/*
************
 FOR LOOPS
************
    - Loops offer us a quick and easy way to do something repeadetly
*/
/*
    Challenge: 
        - Add the even indexes from the alphabet array to a new array using a for loop
*/
/* BRONZE
    - Write a for loop that runs until it's reached the end of the alphabet array, and prints each letter to the console.
*/
//let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
/* SILVER
    - Write a conditional that is nested inside of the for loop that checks if the index of each character in the alphabet array is even or odd. If the index is even, console.log the letter. If the index is odd, console.log 'the index is an odd number'.
*/
/* GOLD
    - Declare a variable of arr that is initialized as an empty array. If the index of the character in the alphabet array is even, add that character to the variable of arr, and console.log arr. If the index is odd - using string interpolation - console.log 'the index ___ is an odd number'.
    - Use Google to search for an array method that allows you to add one or more elements to an array
*/
/* PLATINUM
    - Convert the conditional into a ternary
*/
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 
//BRONZE
for (let i = 0; i <alphabet.length; i++){
    console.log(alphabet[i]);
}
//SILVER
for (let i in alphabet){
    if (i % 2 == 0){
        console.log(alphabet[i]);
    }else{
        console.log(`the index ${i} is odd`);
    }
}
//GOLD
let evenAlpha = [];

for (i in alphabet){
    if (i % 2 == 0){
        evenAlpha.push(alphabet[i]);
        console.log(evenAlpha);
    }else{
        console.log(`the index ${i} is an odd number`);
    }
    
}

//PLATINUM
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let evenAlpha = [];
evenAlpha.

for (let i = 0; i <alphabet.length; i++){
    (i % 2 == 0) ? (evenAlpha.push(alphabet[i]), console.log(evenAlpha)) : console.log(`the index ${i} is an odd index`);
}

/*
************
 FOR OF LOOPS
************
    - For Of Loops parse through an iterable list of numbers - so that makes them great for working with arrays
    - Arrays contain what are known as iterable properties. Each property - or value - in an array, each contains it's own index (the first item in an array has an index of 0, and so on). 
                     value
        let arr = ['chicken', 'turkey', 'duck']
                       0         1        2
                     index
*/

/*
************
 FOR OF LOOPS
************
    - For Of Loops parse through an iterable list of numbers - so that makes them great for working with arrays
    - Arrays contain what are known as iterable properties. Each property - or value - in an array, each contains it's own index (the first item in an array has an index of 0, and so on). 
                     value
        let arr = ['chicken', 'turkey', 'duck']
                       0         1        2
                     index
*/
/* BRONZE
    - Using a for of loop, console.log the name of each pie from the pies array using string interpolation.
*/
let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd'];
/* SILVER
    - Nest a conditonal inside of the for of loop that checks if a single pie from the pies array is of the type 'fruit pie' - ie. apple pie is a fruit pie / chocolate peanut butter pie is not a fruit pie. Then, using string interpolation, console.log either 'the  __ pie is a fruit pie!' or 'the __ pie is not a fruit pie :('
    - Use google to search for an array method that checks if an array includes a certain value
*/
/* GOLD
    - Have the conditional check if EACH pie from the pies array is of the type 'fruit pie'.
*/
let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd'];
for (let x of pies){
    console.log(x);
}
// for(let x of pies){
//     if (pies[x] == 'apple' || pies[x] == 'cherry'||pies[x] == 'peach'||pies[x] == 'blueberry' ){
//         console.log(`the ${pies[x]} is a fruit pie`);
//     }else{
//         console.log(`the ${pies[x]} is not a fruit pie`);
//     }

// }
for(x of pies){
    if (x.includes('apple') || x.includes('blueberry') || x.includes('cherry')|| x.includes('peach')  ){
        console.log(`the ${x} pie is a fruit pie`);
    }else{
        console.log(`the ${x} is not a fruit pie`);
    }

}

let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd'];
let [pie1, pies2, fruitpies] = pies;
console.log(fruitpies);








