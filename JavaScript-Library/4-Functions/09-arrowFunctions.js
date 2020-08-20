// Arrow Function

//normal function declaration
function coffee(){
    return 'cofee is good';
}

//normal function expression
let tea = function(){
    return 'tea is healthy';
}

console.log(cofeee());
console.log(tea())

//arrowfunctions are always anonymous

let hotChocolate = () => {
    return 'hot choco is king';
}
console.log(hotChocolate());

let animals = (kittens, puppies) => {return `i have ${kittens} cat(s) and ${puppies} dog(s)`};

console.log(animals(3,2));

// concise body
let apples = x => `There are ${x} apples`;
console.log(apples(10));

// bock body
let bannas = (x) => {
    return `there are ${x} bananas`;
}
console.log(bananas(5));

//return must be explicitly written in a block-body arrow function

let func = () => 'hi';

console.log(func);

//this will not work...arrow need to come right after paretheses
let secondFunc = ()
=>
'hi';
console.log(secondFunc);