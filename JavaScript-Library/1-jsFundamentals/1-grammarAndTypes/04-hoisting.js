//hoisting example 1
console.log(scissors); 
var scissors = 'blue';

//example 1 Break down:order of operations
var sciccors; //scissors is declared in the console log
console.log(scissors);//then the declared variable is printed
scissors= 'blue'; //then the variable is defined/initialized

//hoisting example 2
function hoistTest(){
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}
hoistTest();

// example 2 breakdown order of operations
function hoistTest{
    var testvar; //variable is declared
    console.log(testVar); //undefined variable is printed
    testVar = 10; //variable is defined/initialized
    console.log(testVar); //defined variable is printed
}
hoistTest();
