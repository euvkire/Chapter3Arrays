//1
let numb = [1, 2, 3, 4, 5];
let newNumb = [1, 2];
console.log('if n =5: ' + numb);
console.log('if n =1: ' + newNumb);

//2
let nums = [1, 2, 3, 4, 5];
let newNums = [1, 2];
let n = 0;
console.log('if n = 5: ' + nums);
console.log('if n = 1: ' + newNums);
console.log('if n = 0: invalid');

//3
let highScores = [107, 99, 98];
let newScore = 101;
let newHighScores = [];
for (let x=0; x<highScores.length; x++){
    if (highScores[x]>= newScore){
        newHighScores.push(highScores[x])
    } else{
        newHighScores.push(newScore);
        newScore=0
    }
}
console.log(newHighScores);

//4