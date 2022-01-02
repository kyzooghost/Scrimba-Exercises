//Destructing objects

const player = {
  name: 'Lebron James',
  club: 'LA Lakers',
  address: {
    city: 'Los Angeles'
  }
};

// console.log( player.address.city );

const { name, club, address: { city } } = player;

// console.log(`${name} plays for ${club}`);

console.log(`${name} lives in ${city}`);

//Object Literal challenge

function addressMaker(address) {
    const {city, state} = address;

    const newAddress = {
        city,
        state,
        country: 'United States'
    };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
}

addressMaker({city: 'Austin', state: 'Texas'});

//Spread operator

let contacts = ["Mary", "Joel", "Danny"];

let personalFriends = [ "David", ...contacts, "Lily" ];

contacts.push("John");


let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}

let employee = {
    ...person,
    salary: 50000,
    position: "Software Developer"
}

console.log(employee);

// Rest operator

function add(...nums) {

    console.log(nums);
}

add(4, 5, 7, 8, 12)

//Arrow function

//function declaration
function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}

const dinnerMenu = (food) => `I'm going to eat a ${food} for dinner`;

console.log( dinnerMenu("chicken salad") );

//Default parameter

const leadSinger = (artist = "someone") => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger();

// Classes

export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound = 'Loud Noise') {
        console.log(sound);
    }

    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }

    static return10() {
        return 10;
    }
}

export class Cat extends Animal {
    makeNoise(sound = "meow") {
        console.log(sound);
    }
}

//

import { Animal, Cat } from './animal.js';

let cat = new Cat('Cat', 4);

cat.makeNoise();

console.log()

// Classes

class Player {
    constructor (name, country) {
        this.name = name;
        this.country = country;
    }

    teller () {
        console.log(`${this.name} was born ${this.country}`);
    }
}

class TennisPlayer extends Player {
    constructor (name, country, age) {
        super(name, country);
        this.age = age;
    }

    teller () {
        console.log(`${this.name} is ${this.age} years old and knows how to play Tennis in ${this.country}`);
    }
}

let player = new TennisPlayer ('Rafael Nadal', 'Spain', 34);
player.teller();

// Promises

const buyFlightTicket = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const error = true;

            if( error ) {
                reject("Sorry your payment was not successful")
            } else {
                resolve("Thank you, your payment was successful");
            }
        }, 3000)
    })
}

buyFlightTicket()
.then( (success) => console.log(success))
.catch( (error) => console.log(error) );

// Promises challenge

const userData = new Promise((resolve, reject) => {
    const error = false;

    if(error) {
        reject('500 Level Error');
    } else {
        resolve({
            firstName: 'Dylan',
            age: 32,
            email: 'DylansEmail310@gmail.com'
        });
    }
});

userData
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

//Fetch

fetch('https://jsonplaceholder.typicode.com/comments/1')
     .then(response => response.json())
     .then(data => console.log(data))

     fetch('https://jsonplaceholder.typicode.com/comments', {
             method: "POST",
             body: JSON.stringify({
                 postId: 1,
                 name: 'Dylan',
                 email: 'dylansemail310@gmail.com',
                 body: 'That was dope!'
             })
         })
         .then(response => response.json())
         .then(data => console.log(data))

//Fetch challenge

fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then((response) => response.json())
    .then((data) => console.log(data))

fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify({
            name: 'Comment 105',
            email: 'dylansemail310@gmail.com',
            body: 'Dopes comment in the game',
            postId: 1
        })
    })
    .then((response) => response.json())
    .then((data) => console.log(data))

//Async and Await

const photos = [];

function photoUpload() {
    let uploadStatus = new Promise( (resolve, reject) => {
        setTimeout( () => {
            photos.push("Profile Pic");
            resolve("Photo Uploaded")
        }, 3000)
    })

    let result = uploadStatus;

    console.log(result);
    console.log(photos.length);
}

photoUpload();

//

const photos = [];

async function photoUpload() {
    let uploadStatus = new Promise( (resolve, reject) => {
        setTimeout( () => {
            photos.push("Profile Pic");
            resolve("Photo Uploaded")
        }, 3000)
    })

    let result = await uploadStatus;

    console.log(result);
    console.log(photos.length);
}

photoUpload();

//Challenge - Async & Await

//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await

const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getJoke() {
    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log(data);
}

getJoke();

const exampleSet = new Set([1,1,1,1,2,2,2,2]);

exampleSet.add(5);
exampleSet.add(5).add(17);

console.log(exampleSet.has(5));

exampleSet.clear();

console.log(exampleSet.size);

function caseInsensitivePalindrome(str) {
    const caselessStr = str.toLowerCase();
    const reversedCaselessStr = caselessStr.split('').reverse().join('');

    return caselessStr === reversedCaselessStr;
}

function caseInsensitivePalindrome(str) {
    const caselessStr = str.toLowerCase();
    // const reversedCaselessStr = caselessStr.split('').reverse().join('');
    let reversedCaselessStr = '';

    for(let i = caselessStr.length - 1; i >= 0; i--) {
        reversedCaselessStr += caselessStr[i];
    }

    return caselessStr === reversedCaselessStr;
}

function encloseInBrackets(str) {
    // const solution1 = '(' + str + ')';
    // const solution2 = `(${str})`;
    const solution3 = '('.concat(str, ')');

    return solution3;
}

function firstDigit(str) {
    const strNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const chars = str.split('');

    for(const char of chars) {
        if(strNums.includes(char)) {
            return char;
        }
    }
}

//

function largestNumber(num) {
    let placeholder = '';

    for(let i = 0; i < num; i++) {
        placeholder = placeholder.concat('9');
    }

    return parseInt(placeholder);
}

function largestNumber(num) {
    const placeholder = '9'.repeat(num);

    return parseInt(placeholder);
}

//

function control(e) {
    switch(e.keyCode) {
        case 40:
        console.log('pressed down')

        break
        case 38:
        console.log('pressed up')

        break
        case 37:
        console.log('pressed left')

        break
        case 39:
        console.log('pressed right')

        break
    }
}
document.addEventListener('keyup', control)

//

class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
    }
}

ghosts = [
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)
]

//draw my ghosts onto my grid
ghosts.forEach(ghost => squares[ghost.startIndex].classList.add(ghost.className))
