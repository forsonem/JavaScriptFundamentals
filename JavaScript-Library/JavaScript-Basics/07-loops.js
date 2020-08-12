for (let i = 1; i <= 100; i += 1){ // line 1
    console.log(i);  // line 2
}  // line 3

   //1        //2    //3
   for (let i = 1; i <= 10; i++){
    console.log("Number:", i);
}
//1. initialExpression sets the starting value of a loop control variable (LCV).  In the example following, i is the LCV.
//2. condition is evaluated, if true, stay in the loop, otherwise exit the loop. condition is i <= 10.
//3. incrementExpression updates the LCV. i++ adds 1 to i.

//Loop from  0 to 50 by 5s.
for(var i = 0; i <= 50; i += 5){
    console.log(i);
}
//Loop from 20 to 1 by -1s.
for (var i = 20; i >= 1; i--){
    console.log(i);
}
//Loop starting at 3, and increments by 5, but doesn't go over 30
for(var i = 3; i < 30; i += 5){
    console.log(i)
}
//1. Count to 200 by 25s. Start at 25.
for(var i = 0; i < 200; i += 25){
    console.log(i);
}
//2. Count to 10 by 2s. Start at 6.
for(var i = 6; i < 10; i += 2){
    console.log(i);
}
//3. Count to 10 by 5s. Start at 100.
for(var i = 100; i > 10; i -= 5){
    console.log(i);
}
//4. Write a loop. Call a function each time the loop iterates. You choose the      conditions and write the function to call.
function pacersWon(){
    console.log("Pacers won!");
}
for(var i = 0; i < 5; i++){
    pacersWon();
}
    

        
    

