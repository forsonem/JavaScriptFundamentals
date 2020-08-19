var x = 12;//Global scope

function scope{
    var x = 33;
    console.log(x);

}
scope(); //refferring to x inside the scope of the function
console.log(x); //referring to x outiside the scope of the function


//example 2

var x = 12;

function scope(){
    x = 33;
    console.log(x);
}

scope();// note the x in the function is not a new variable. result 33
console.log(x);//x has been reassigned within the scope of the function result 33

//example 3 

var x = 1

function scope(){
    var x = 2;
    function scopeInner(){
        var x = 3;
        console.log(x);// refers to the x within its own scope so value is 3
    }
    scopeInner();
    console.log(x);// refers to the x within its own scope so value is 2
}
scope();
console.log(x); //can only see the x in the global scope so value is 1


//example 4

var x = 12;

function scope(){
    var x = 33;
    if (true){
        let x = 45;// sets the x a new value within the scope of the function.
        console.log(x); //refers to the x within its own scope.
    }
    console.log(x);//33 refres to the x within its own scope.
}
scope();
console.log(x); // refers to the global scope.

// eexample 5

var x = 12;

function scope(){
    var x = 33;
    if (true){
        var x = 45;//
        console.log(x); //45
    }
    console.log(x);//45 --> var does not obey block scope. the if statement inside of the finction is the block scope in this example var obeys function scope
}
scope();
console.log(x); // 12 global scope



