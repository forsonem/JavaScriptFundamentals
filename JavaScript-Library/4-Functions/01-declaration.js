// example 1
function newFunc(num){
    return num + 1;
}
console.log(newFunc(7));
console.log(newFunc(10));
console.log(newFunc(14));
console.log(newFunc(100));

//example 2

function sentence(firstName, lastName){
    return `my firstname is ${firstName} and my last name is ${lastName}. `;
}

console.log(sentence('erck', 'forson'));

let sentenceVariable = sentence('erck', 'forson');
console.log(sentenceVariable);

//example 3

// build a finction that takes a complex types and console logs each item in the array

let arr = [1, true, {key:'string'}, [0, false, null], 'heya']
let arr2 = [5,6,7,8,9];

function funcB(inputArr){
    for (let element of inputArr){
        console.log(element);
    }
}
funcB(arr);
funcB(arr2);