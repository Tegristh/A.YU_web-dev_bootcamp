/* Mise en pratique de la fonction length */
var message = prompt("Your message to the world!");
var characterNumber = message.length;

console.log(characterNumber, (140-characterNumber))

// Mise en pratique de la fonction slice
var messageUnder140 = message.slice(0,140);
console.log(messageUnder140);

// Mise en pratique de la fontion toUppercase()
var firstName = "TOTO";
var lastName = "rigolot";

firstName = firstName.toLowerCase();
lastName = lastName.toUpperCase();

console.log(firstName, lastName);

// arithmetic
var dogAge = 10;
var humanAge = (((dogAge-2)*4)+21);
console.log(humanAge);

// functions
/**
* Welcome to the Stanford Karel IDE.
* This is a free space for you to 
* write any Karel program you want.
**/
function main(){
    //your code here
    moveFourTimes();
    turnLeft();
    moveFourTimes();
}
function moveFourTimes(){
    move();
    move();
    move();
    move();
}
/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
    //your code here
    putBeeper();
    chainBeeper();
    
}
function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
}
function nextBeeper(){
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
}

function chainBeeper(){
    nextBeeper();
    nextBeeper();
    nextBeeper();
    nextBeeper();
}

// parameters and arguments
function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy " + (Math.floor(money/1.5)) + " bottles of milk")
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown")
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return money % 1.5;
    }

getMilk(5);

// Life in weeks coding exercise
function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        
        
        var userAge = age;
        var yearLeft = 90-userAge;
        var monthLeft = yearLeft * 12;
        var weekLeft = yearLeft * 52;
        var dayLeft = yearLeft *365;
        
        console.log("You have "+dayLeft+" days, "+weekLeft+" weeks, and "+monthLeft+" months left." )
        
        
    /*************Don't change the code below**********/
    }
    
    //BMI = weigth(kg)/(height²)(m)
    function bmiCalculator(weight, height){
        var bmi = Math.round(weight/(height**2))
        return bmi
    }
    
    var bmi = bmiCalculator(65, 1.8)
    
    console.log(bmi); //20


