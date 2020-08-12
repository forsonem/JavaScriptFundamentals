//1        //2
function hello() {
    //3
    console.log("Hello World!");
}

//1 Use the function keyword.
//2 Name the function hello. We'll explain the parentheses later.
//3 Execute code.

//Activating a Function
hello(); // invokes the function hello


//Practice
//Write a function to print "Pacers won!" Then call the function.
function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();

//Parameters and Arguments

function numberEntered(num){
    console.log("The number you entered was: ", num);
}
numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);

//Two parameters
function addAnyTwoNumbers(x, y){
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);

//Declare it
function subtractTwoNumbers(firstNum, secondNum){
    console.log(firstNum - secondNum);
}

//Call it
subtractTwoNumbers(5, 7);


//The return Keyword 
function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats;
    return myAverage; 
}
console.log(getMyBattingAverage(250, 91)); // = 0.364

function add(x, y){
    let sum = x + y;
    return sum; // or return x + y;
}
console.log(add(1,1));

//Write a function with a first name and a last name as parameters. Then return the whole name.
function fullName(first, last){
    let wholeName = first + " " + last;
    return wholeName; // Or return first + " " + last;
}
console.log(fullName("Paul", "O'Connor"));


//Write a function to calculate and return the totalPrice of a quantity of products, including 7% tax.
function calculatePriceIndiana(quantity, price){
    let totalPrice = 1.07 * quantity * price;
    return totalPrice; // Or return 1.07 * quantity * price;
}
console.log(calculatePriceIndiana(17, 5));