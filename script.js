'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');


    FUNCTIONS
function logger() {
    console.log('My name is Matheus');
}
   calling / running / invoking function
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


    FUNCTION DECLARATION VS FUNCTION EXPRESSION
   Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

  Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);


    ARROW FUNCTION
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));


   FUNCTIONS CALLING OTHER FUNCTIONS
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));


    REVIEWING FUNCTIONS
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const retirement = 65 - calcAge(birthYear);
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));


    INTRODUCTION TO ARRAYS
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(2001, 2002, 2009);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

  Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);


    BASIC ARRAY METHODS
const friends = ['Michael', 'Steven', 'Peter'];
//ADD ELEMENTS
const newLenght = friends.push('Jay');
console.log(friends);
console.log(newLenght);

friends.unshift('John');
console.log(friends);

//REMOVE ELEMENTS
friends.pop(); //remove the last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //remove the first element
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}

    INTRODUCTION TO OBJECTS
const jonas = {
    firstName: 'Matheus',
    lastName: 'Corbellini',
    age: 2037 - 2005,
    job: 'student',
    friends: ['Lucas', 'Guilherme', 'Joao'];
}


    ACESS AND ADD ELEMENTS INTO AN OBJECT
const matheus = {
    firstName: 'Matheus',
    lastName: 'Corbellini',
    age: 2037 - 2005,
    job: 'student',
    friends: ['Lucas', 'Guilherme', 'Joao']
};
console.log(matheus);

console.log(matheus.lastName);
console.log(matheus['lastName']);

const nameKey = 'Name';
console.log(matheus['first' + nameKey]);
console.log(matheus['last' + nameKey]);

 const interestedIn = prompt('What do you want to know about Matheus? Choose between firstName, lastjobName, age, job and friends');

if (matheus[interestedIn]) {
     console.log(matheus[interestedIn]);
 } else {
     console.log('Wrong request! Choose between firstName, lastjobName, age, job and friends');
 }

matheus.location = 'Brasil';
matheus['twitter'] = '@matheuskt';
console.log(matheus);

 CHALLENGE
EXAMPLE: "Jonas has 3 friends, and his best friend is called Lucas

const description = `${matheus.firstName} has ${matheus.friends.length} friends, and his best friend is called ${matheus.friends[0]}`;
console.log(description);

     OBJECT METHODS
const matheus = {
    firstName: 'Matheus',
    lastName: 'Corbellini',
    birthYear: 2005,
    job: 'student',
    friends: ['Lucas', 'Guilherme', 'Joao'],
    hasDriversLicense: true,

     calcAge: function () {
         console.log(this);
         return 2037 - this.birthYear;
     }, 
        maneira menos eficiente, pois sempre realizara o calculo independete se foi chamado ou nao. Com calculos maiores se torna um problema

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
       desta maneira armazaenamos o valor numa variavel e acessamos apenas quando queremos, ao inves de calcular sempre, mais eficiente.

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}- years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};
console.log(matheus.calcAge());
console.log(matheus.age);
console.log(matheus.getSummary());


    THE FOR LOOP
-for loop keeps running while condition is TRUE
for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep}`);
};


    LOOPING INTO ARRAYS, CONTINUE AND BREAK
const matheus = [
    'Matheus',
    'Corbellini',
    2037 - 2005,
    'student',
    ['Lucas', 'Guilherme', 'Joao'],
    true
];

const types = [];

for(let i = 0; i < matheus.length; i++){
    -- reaeding from matheus array
    console.log(matheus[i], typeof matheus[i]);
    -- filling types array
    -- types[i] = typeof matheus[i];
    types.push(typeof matheus[i]);
}

console.log(types);
 
const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i< years.length; i++){
    ages.push(2037 - years[i]);
}
console.log(ages);

--CONTINUE AND BREAK
console.log('---ONLY STRINGS---');
for(let i = 0; i < matheus.length; i++){
    if(typeof matheus[i] !== 'string') continue;
    console.log(matheus[i], typeof matheus[i]);
}

console.log('---BREAK WITH NUMBER---');
for(let i = 0; i < matheus.length; i++){
    if(typeof matheus[i] === 'number') break;
    console.log(matheus[i], typeof matheus[i]);
}
*/


