let answerList = ['yes', 'no', 'maybe'];

let randomNum = Math.floor(Math.random()*answerList.length);
console.log(randomNum);
let randomAnswer = answerList[randomNum];
console.log(randomAnswer);

//magic8 ball :D

let answerlist = ['That\'s cool\', \'How wonderful!', 'Dang that sucks'];

    let answer1 = readline.question("If you want to quit the program.. Enter y or n: ");
while (answer1 != "y" && answer1 != "n"){
    console.log("invalid choice");
    answer1 = readline.question("Try again.. If you want to quit the program.. Enter y or n:  ")
}
console.log(`you typed ${answer1}`);