//EX1 FUNCTIONS
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const country1 = describeCountry('brasil', 200, 'brasilia');
const country2 = describeCountry('Usa', 200, 'washington');
const country3 = describeCountry('portugal', 15, 'lisboa');
// console.log(country1, country2, country3);


//EX2 FUNCTION DECLARATIONS VS FUNCTION EXPRESSIONS
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const pop1 = percentageOfWorld1(100);
const pop2 = percentageOfWorld1(1441);
const pop3 = percentageOfWorld1(200);
// console.log(pop1, pop2, pop3);


//EX3 ARROW FUNCTIONS
const percentageOfWorld3 = population => (population / 7900) * 100;
const pop4 = percentageOfWorld3(10);
const pop5 = percentageOfWorld3(1441);
// console.log(pop4, pop5);


//EX4 FUNCTIONS CALLING OTHER FUNCTIONS
function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world`
}

const c1 = describePopulation('brasil', 200);
const c2 = describePopulation('portugal', 15);
// console.log(c1, c2);


//DESAFIO1
//test1
const calcAverage = (a, b, c) => (a + b + c) / 3;
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        // console.log(`Dolhpins wins ${avgDolphins} vs ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        // console.log(`Koalas wins ${avgKoalas} vs ${avgDolphins}`);
    } else {
        // console.log('No team wins...')
    }
}
// checkWinner(scoreDolphins, scoreKoalas);

//test2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);


//EX5 INTRODUCTION TO ARRAYS
const pop = [20, 200, 10, 7];
// console.log(pop.length === 4);

const percentages = [percentageOfWorld1(pop[0]), percentageOfWorld1(pop[1]), percentageOfWorld1(pop[2]), percentageOfWorld1(pop[3])];
// console.log(percentages);


//EX6 BASIC ARRAY METHODS
const neighbours = ['Argentina', 'Uruguay', 'Venezuela'];
const newCountry = 'Utopia';
neighbours.push(newCountry);
// console.log(neighbours);

neighbours.pop();
// console.log(neighbours);
if (!neighbours.includes('Germany')) {
    // console.log('Probably not a central european country');
}

neighbours[neighbours.indexOf('Venezuela')] = 'Guiana';
// console.log(neighbours);


//DESAFIO 2
function calcTip(billValue) {
    let tip;
    if (billValue >= 50 && billValue <= 300) {
        tip = billValue * 0.15;
    } else {
        tip = billValue * 0.20;
    }
    return tip;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
// console.log(totals);


//EX7 INTRODUCTION TO OBJECTS
const myCountry = {
    country: 'Brazil',
    capital: 'Brasilia',
    language: 'Portuguese',
    population: 200,
    neighbours: ['Argentina', 'Uruguay', 'Venezuela'],
}


//EX8 DOT vs. BRACKET NOTATION
const descrptionObject = `${myCountry.country} has ${myCountry.population} million ${myCountry.language}- speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`;
// console.log(descrptionObject);

myCountry.population += 2;
// console.log(myCountry.population);

myCountry['population'] -= 2;
// console.log(myCountry.population);


//DESAFIO 3 OBJECTS
const mark = {
    fullName: 'Mark Miller',
    height: 1.69,
    mass: 78,
    calcBmi: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    height: 1.95,
    mass: 92,
    calcBmi: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBmi();
john.calcBmi();
// console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    // console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
} else if (mark.bmi < john.bmi) {
    // console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
} else {
    // console.log("Both BMI'S are equals")
};

//EX9 OBJECT METHODS
const myCountry2 = {
    country: 'Brazil',
    capital: 'Brasilia',
    language: 'Portuguese',
    population: 200,
    neighbours: ['Argentina', 'Uruguay', 'Venezuela'],
    describe : function(){
        this.desc = `${this.country} has ${this.population} million ${this.language}- speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
        return this.desc;
    },
    checkIsland : function(){
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
}

myCountry2.describe();
myCountry2.checkIsland();
// console.log(myCountry2);


//EX9 THE FOR LOOP
// for(let vot=1; vot<=50; vot++){
//     console.log(`Voter number ${vot} is currently voting`);
// }

//EX10 LOOPING INTO ARRAYS, CONTINUE AND BREAK
const population = [20, 200, 10, 7];
const percentages2 = [];

for(let i = 0; i<population.length; i++){
    percentages2[i] = percentageOfWorld1(population[i]);
}

//console.log(percentages2);

//EX10 LOOPING BACKWARDS AND LOOPS IN LOOPS
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for(let i = 0; i < listOfNeighbours.length; i++){
    for(let y = 0; y < listOfNeighbours[i].length; y++){
        // console.log(`Neighbor: ${listOfNeighbours[i][y]}`);
    }
}


//EX11 WHILE LOOP
const percentages3 = [];
let i = 0;
while(i < population.length){
    const perc = percentageOfWorld1(population[i]);
    percentages3.push(perc);
    i++;
};

// console.log(percentages3);


//DESAFIO 4
const bills2 = [295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const totals2 = [];

const calcTip2 = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }

  for(let i = 0; i < bills2.length; i++){
    const tip = calcTip2(bills2[i]);
    const total = calcTip2(bills2[i]) + bills2[i];
    tips2.push(tip);
    totals2.push(total);
  }

//  console.log(tips2, totals2);

  const calcAverage2 = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length(); i++){
        sum += arr[i];
    }
    const average = sum / arr.length;
    return average;
  }

