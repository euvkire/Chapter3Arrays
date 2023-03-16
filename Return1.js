const readline = require("readline-sync");

//1
function nameSwapper(){
    let first = readline.question( "First Name: ");
    let last = readline.question("Last Name: ");
    return(`${last}, ${first}`)
}
console.log(nameSwapper());