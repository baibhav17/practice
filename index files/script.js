"use strict";
//BMI
const markWeight = 78, johnWeight = 92,
markHeight = 1.69, johnHeight = 1.95;
let markHigherBMI, markBMI, johnBMI;
markBMI = markWeight / (markHeight ** 2);
johnBMI = johnWeight / (johnHeight ** 2);
markHigherBMI = markBMI > johnBMI;
console.log(`mark${markBMI}`,`john${johnBMI}`)
console.log(markHigherBMI ? `mark has higher BMI ${markBMI}` : `john has higher BMI ${johnBMI}`)
let elmBMI = document.createElement('div');
elmBMI.innerHTML =`mark has higher BMI ${markBMI}`;
document.body.appendChild(elmBMI)
console.log(elmBMI)

//Bill and Tip calculator

const bill = 275;

const tip = (bill >= 50 && bill <= 275) ? (0.15 * bill) : (0.20 * bill);

let billCard = document.createElement('div');
billCard.innerHTML =`your bill is ${bill}, the tip is ${tip} and the total bill is of amount ${bill + tip}`;
document.body.appendChild(billCard)

//function to calculate age

const curretAge = (yearBorn, yearNow) => yearNow - yearBorn;

//years left in retirement using function declaratoin, function expression and arrow function

// function declaration

function yearsLeftRetirement(birthYear, name, currentyear) {
const age = curretAge(birthYear,currentyear);
const retirement = 60 - age;
let declaration = document.createElement('div');
declaration.innerHTML =`${name}, have total ${retirement} years left in retirement.`;
return document.body.appendChild(declaration)
}

//function expression
const yearsLeftRetirement2 = function(birthYear, name, currentyear) {
    const age = curretAge(birthYear,currentyear);
    const retirement = 60 - age;
    let expression = document.createElement('div');
    expression.innerHTML =`${name}, have total ${retirement} years left in retirement.`;
    return document.body.appendChild(expression)
}

//Arrow function
const yearsLeftRetirement3 = (birthYear, name, currentyear) => {
    const age = curretAge(birthYear,currentyear);
    const retirement = 60 - age;
    let arrowFunction = document.createElement('div');
    arrowFunction.innerHTML =`${name}, have total ${retirement} years left in retirement.`;
    return document.body.appendChild(arrowFunction)
}

console.log('function declaration---', yearsLeftRetirement(1996,'Batman',2021));
console.log('function expression---', yearsLeftRetirement2(1997,'Batman Girl',2021));
console.log('Arrow function==>',yearsLeftRetirement3(2002,'Robin',2021));

//part 2 coding challenge

//check the winner

const calcAverageScore = (score1,score2, score3) =>{
return (score1 + score2 + score3)/3;
}

const avgDolphins = calcAverageScore(44,23,71);
const avgKoalas = calcAverageScore(65,54,49);
const avgDolphins2 = calcAverageScore(85,54,41);
const avgKoalas2 =calcAverageScore(23,34,27);
console.log({avgDolphins,avgKoalas, avgDolphins2,avgKoalas2})
const checkWinner = (dolphinsScore, koalasScore) =>{
    if(dolphinsScore >= (2*koalasScore)){
        return ` Dolphins win 🏆(${dolphinsScore} vs. ${koalasScore})`
    } else if(koalasScore >= 2* dolphinsScore){
        return ` Koalas win 🏆(${koalasScore} vs. ${dolphinsScore})`
    } else {
        return `No team won the game`
    }
}

console.log(checkWinner(avgDolphins, avgKoalas));
console.log(checkWinner(avgDolphins2, avgKoalas2));

const personDetails = {
    firstName: 'Jonas',
    lastName: 'Chonga',
    job: 'teacher',
    birthYear: 1991,
    currentyear: 2021,
    calcAge: function(){
        console.log('hello',this.birthYear)
        this.age = curretAge(this.birthYear,this.currentyear);
        return this.age;
    },
    hasDriverLicense: true,
}
console.log(personDetails.calcAge());
console.log(`${personDetails.firstName} is a ${personDetails.age}-old ${personDetails.job}, and ${personDetails.hasDriverLicense ? 'he' : 'he do not'} has a driver's license`);
