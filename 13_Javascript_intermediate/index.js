// random usage
// création d'un dé à 6 faces.
var n = Math.random();// 0-0.9999999999999999
n = n * 6; // 0-5.9999999999999999
n = Math.floor(n)+1; // 1-6

//love calculator

prompt("Quel est le premier nom?");
prompt("Quel est le second nom?");
var loveMetter = Math.floor(Math.random()*100)+1
console.log(loveMetter)

// Advanced bmi calculator
function bmiCalculator (weight, height) {
    var msg=""; 
    var bmi = Math.round(weight/(height**2))
    if (bmi < 18.5) {
        msg = " are underweight."
    } else if (bmi >=18.5 && bmi <= 24.9) {
        msg = " have a normal weight.";
    } else {
        msg = " are overweight."
    }
    
    var interpretation = ("Your BMI is "+ bmi +", so you"+ msg);
    
    return interpretation;
}

// Leap year

function isLeap(year){
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year."
            } else {
                return "Not leap year."
            }
        } else {
            return "Leap year."
        }
    } else {
        return "Not leap year."
    }
}

// Array

var guestList = ["Angela", "Jack", "pan", "James", "Lara", "Jason"]
console.log(guestList.includes("Angela"))

// Fizzbuzz
var output = [];
var counter = 0;

function fizzbuzz(){
    counter++;
    if (counter % 3 === 0 && counter % 5 === 0){
        output.push("FizzBuzz");
    } else if (counter % 3 === 0 ) {
        output.push("Fizz");
    } else if (counter % 5 === 0 ) {
        output.push("Buzz");
    } else {
        output.push( counter);
    }

    console.log(output)
}
// while loop
var i = 0
while (i < 100){
    i++
    fizzbuzz()
}

// Who's buying lunch
/* write a function which will select a random name 
from a list of names. The person selected will have 
to pay for everybody's food bill. */

names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

function whosPaying(names) {
    var length = names.length;
    var roll = Math.floor(Math.random()*(length+1))
    return names[roll]+" is going to buy lunch today!"

}

function bottles99(){
    var bottles = 99;
    while (bottles > 0){
        console.log(bottles+" bottles of beer on the wall, "+ bottles+" bottles of beer, take 1 down , pass it around, " + (bottles-1)+" bottles of beer on the wall.")
            bottles--
    }
}

// for loop : for(var i = 0; i < 2; i++)

// fibonacci
function fibonacciGenerator(n){
    
    if (n <= 0){
        return []
    } else if(n === 1) {
        return [0];
    } else if (n === 2) {
        return [0,1];
    } else {
        var output = [0,1];
        for(var i = 2; i < n ; i++){            
            var low_index = (output.length -2);
            var high_index = (output.length -1);
            var newValue = (output[(low_index)]+output[(high_index)])
            output.push(newValue);
        }
    }
    return output
}