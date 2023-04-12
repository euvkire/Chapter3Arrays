const readline=require('readline-sync');
let myList = [];
myList.push(readline.question("Enter a Number: "));
myList.push(readline.question("Enter a Noun: "));
myList.push(readline.question("Enter a Noun: "));
myList.push(readline.question("Name a City: "));
myList.push(readline.question("Enter a Name: "));
myList.push(readline.question("Enter a Name: "));
myList.push(readline.question("Name a Country: "));
myList.push(readline.question("Name a Body Part: "));

console.log(` ${myList[0]} years after the end of Rush Hour 2, James Carter is no longer a ${myList[1]}, but a ${myList[2]} on the streets of ${myList[3]}. 
${myList[4]} Lee is now the bodyguard for his friend, ${myList[5]}. ${myList[4]} Lee is still upset with Carter about an incident in that happened in ${myList[6]},
 when Carter accidentally shot Lee\`s girlfriend, Isabella Molina, in the ${myList[7]}.`)