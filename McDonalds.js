const readLine = require(`readline-sync`);

let answer = readLine.question("What type of burger would you like chicken $5.25, beef $6.25, or tofu $5.75?: ");
while (answer != "chicken " && answer != "beef" && answer != "tofu"){
    console.log("invalid choice");
    answer = readLine.question("Repeat it? ");
    while (answer != "sure" && answer != "yes"){
        console.log("invalid choice");
    }
}
if (answer == 'chicken'){
    costs.push(5.25)
} else if (answer == 'beef'){
    costs.push(6.25)
} else if (answer == 'tofu'){
    costs.push(5.75)
} else {
    costs.push(0)
}
let answer2 = readLine.question("Would you like a beverage?: ");
while (answer2 != "yes" && answer2 != "no"){
    console.log("invalid choice");}
if (answer2 == "no"){
    console.log("No Drinks")
}
if(answer2 == "yes"){
    answer2 = readLine.question("What size?(Small: $4, Medium: $6, Large: $8): ");
    console.log(`${answer2} Drink.`)
}
if (answer == 'small'){
    costs.push(1.00)
} else if (answer == 'medium'){
    costs.push(1.75)
} else if (answer == 'large'){
    costs.push(2.25)
} else {
    costs.push(0)
}

let answer3 = readLine.question("Would you like a side of fries with it?: ");
while (answer3 != "yes" && answer3 != "no"){
    console.log("invalid choice");}
if (answer3 == "no"){
    console.log("No Fries")
}
if(answer3 == "yes"){
    answer3 = readLine.question("What size?(Small: $3.25, Medium: $5, Large: $6.50): ");
    console.log(`${answer3} fries.`)
}
if (answer == 'small'){
    costs.push(3.25)
} else if (answer == 'medium'){
    costs.push(5)
} else if (answer == 'large'){
    costs.push(6.50)
} else {
    costs.push(0)
}

let number4 = Number(readLine.question("How many packet of ketch up do you want or you dont want any?: "));
if (number4 == "no"){
    console.log(`${number4} no ketchup packets for you. (Cost 0)`)
}

    let egg = number4 * 0.25;
    console.log(`${number4} ketchup packets for you. (Cost ${egg})`);
    console.log(`${answer} burger/sandwich, ${answer2} drink, ${answer3} Fries, ${number4} Packets of ketchup. (Cost ${egg})`);

