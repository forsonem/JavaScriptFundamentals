// CHALLENGE 1
// Who's name is longer?
/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
 */
/* SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/
/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/



let name = 'Marquese Martin-Hayes';
let name2 = 'Erick Forson';


const num = name.length; 
const num1 = name2.length; 
console.log(num);

if (num > num1){
    console.log('His name is longer than mine by ' + difference);
    
}else if(num < num1){
    console.log(`My name is longer than Marquese's  ${num1-num}`);
    

}else{
    console.log('The names are equal!');
}
// CHALLENGE 2
// Types Challenge
/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
 */
/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/
let SimilarCars = ['porsche', 'BMW'];

let Car = {
    IsAutomatic : false,
    Color   : 'red',
    Name : 'Ferrari',
    
    Owner : {
        Name: 'Erick',
        Age: 28,
        Status: 'Baller',
        CarsArray: SimilarCars,
    }

};
console.log(typeof(Car.Owner.CarsArray[0]));

let value = Car.Owner.CarsArray;

if(typeof value === 'string'||typeof value === 'number'||typeof value === 'boolean'||typeof value === 'object' ){
    console.log("Nice");
    
}
else{
    console.log('What are you?!');
}

