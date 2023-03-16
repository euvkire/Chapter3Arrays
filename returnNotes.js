//Parameters are placeholder variables that allow
//us to reuse functions

//Example 1: Without Parameter(s)
function printYes(){
    console.log("yes");
}

printYes();
printYes();

//Example 2: With parameter
function printText(text){   //text parameter
 console.log(text);
}

printText("Happy Thursday!");
printText("Tomorrow is Friday!")

//Return statements provide values to the rest of
//the program. returned values can be used by other
//pasts of the code. Console.log values cannot be
//used by other lines of code.

//Example 3: Without Return
function double(num){
    console.log(num*2);
}

double( 3);
double(5);

//Example 4: With Return
function triple(num){
    return(num*3);
}

//console.log(triple(7));
let answer = triple(12);
answer -=2;
console.log(answer);

//Example 5:
function loseLife(lives){
    return (lives - 1);
}

let totalLives = 10;
totalLives = loseLife(totalLives);
console.log(totalLives);

//Scope is the part of the program where the binding
//(value of a variable) is visible. Global scope:
//created outside all {} and accessible everywhere
//Loccal scope: Created inside a specific {} and only
//accessible inside those {}

//Example 6: Different Scopes
let x = 10; //global x
if (true){
    let y = 20; //local y
    let z = 30; //local z
    console.log(x+y+z);
}
console.log(x); //y and z are not accessible outside{}

//Example 7
function half(n){ //local n
    return(n/2);
}

let n = 10; //global n
console.log(half(100));
console.log(n); //since there is no {} or function call, use global n.