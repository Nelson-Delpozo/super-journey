"use strict";
console.log("connected");

// FUNCTION TO TURN NUMBER TO STRING

function numToString(num){
    return num.toString();
}

console.log(numToString(9));
console.log(typeof (numToString(9)));


// FUNCTION TO RETURN STRING BASED ON BOOLEAN

function boolToWord( bool ){
    if(bool){
        return "Yes"
    }else return "No"
}

console.log(boolToWord(true));
console.log(boolToWord(false));

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
//
//     You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
//
//     Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
//
//     Write a code that gives out the total amount for different days(d).



    function rentalCarCost(d) {
    // Your solution here
    let total = 0;
    let rate = 40;

    if(d >= 7){
        total = (d * rate) - 50;
    }else if(d >=3 && d < 7){
        total = (d * rate) - 20;
    }else{
        total = d * rate;
    }
return total;

}

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr (n, s) {
        let newStr = '';
        for(let i = 0; i < n; i++){
            newStr = newStr + s;
        }
        return newStr;
}

// Write a function which calculates the average of the numbers in a given list.
//
//     Note: Empty arrays should return 0.

function find_average(array) {
    // your code here
    let total = 0;
    if(array.length === 0){
        return 0;
    }else{
    for(let i = 0; i < array.length; i++){
        total += array[i];
    }
    return total / array.length;
}
    }

const first = "hello world";
const second = "hey there";
const removeAll = (first, second) => {
    const newArr = second.split("").filter(el => {
        return !first.includes(el);
    });
    return newArr.join("");
};
console.log(removeAll(first, second));

//////////

function Book(title, author, read){
    this.title = title
    this.author = author
    this.read = read
    this.info = function(){
        return (title + ', ' + author + ', ' + read)
    }
}

let book1 = new Book("For Whom The Bell Tolls", "Ernest Hemingway", "read")

console.log(book1.info())
console.log(book1.author)

function Student() {
}

Student.prototype.sayName = function() {
    console.log(this.name)
}

function EighthGrader(name) {
    this.name = name
    this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype)

const carl = new EighthGrader("carl")
carl.sayName() // console.logs "carl"
carl.grade // 8

function Account () {
}
// This is the use of the Account constructor to create the userAccount object.
// let userAccount = new Account ();

// Another example: Account () is the constructor
let userAccount = new Account ();
// Find the userAccount object's constructor
console.log(userAccount.constructor); // Account()

let myFriends = {name: "Pete"};

// To find the name property below, the search will begin directly on the myFriends object and will immediately find the name property because we defined the property name on the myFriend object. This could be thought of as a prototype chain with one link.
console.log(myFriends.name);

// In this example, the search for the toString () method will also begin on the myFriends’ object, but because we never created a toString method on the myFriends object, the compiler will then search for it on the myFriends prototype (the object which it inherited its properties from).

// And since all objects created with the object literal inherits from Object.prototype, the toString method will be found on Object.prototype—see important note below for all properties inherited from Object.prototype.

myFriends.toString ();

function People () {
    this.superstar = "Michael Jackson";
}
// Define "athlete" property on the People prototype so that "athlete" is accessible by all objects that use the People () constructor.
People.prototype.athlete = "Tiger Woods";

let famousPerson = new People ();
famousPerson.superstar = "Steve Jobs";

// The search for superstar will first look for the superstar property on the famousPerson object, and since we defined it there, that is the property that will be used. Because we have overwritten the famousPerson’s superstar property with one directly on the famousPerson object, the search will NOT proceed up the prototype chain.
console.log (famousPerson.superstar); // Steve Jobs

// Note that in ECMAScript 5 you can set a property to read only, and in that case you cannot overwrite it as we just did.

// This will show the property from the famousPerson prototype (People.prototype), since the athlete property was not defined on the famousPerson object itself.
console.log (famousPerson.athlete); // Tiger Woods

// In this example, the search proceeds up the prototype chain and find the toString method on Object.prototype, from which the Fruit object inherited—all objects ultimately inherits from Object.prototype as we have noted before.
console.log (famousPerson.toString()); // [object Object]

let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log(( rabbit.jumps )); // ? (1)
//true
delete rabbit.jumps;

console.log(( rabbit.jumps )); // ? (2)
//null
delete animal.jumps;

console.log(( rabbit.jumps )); // ? (3)
//undefined

// let animal1 = {
//     eat() {
//         this.full = true;
//     }
// };
//
// let rabbit1 = {
//     __proto__: animal1
// };
//
// console.log(rabbit1.eat());

let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    // __proto__: hamster
    // __proto__: speedy
};

// This one found the food
speedy.eat("apple");
console.log(( speedy.stomach )); // apple

// This one also has it, why? fix please.
console.log(( lazy.stomach )); // apple