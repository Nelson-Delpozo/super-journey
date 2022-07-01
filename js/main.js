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