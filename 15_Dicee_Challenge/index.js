let randomNumber1 = Math.floor(Math.random()*6)+1
let randomNumber2 = Math.floor(Math.random()*6)+1

document.querySelector(".img1").setAttribute('src', `./images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute('src', `./images/dice${randomNumber2}.png`);

let result 




if (randomNumber1 === randomNumber2) {
    result = "Draw!"
} else if (randomNumber1 > randomNumber2) {
    result = '🚩 Player 1 Wins!';
} else {
    result = 'Player 2 Wins! 🚩';
}


document.querySelector('h1').innerHTML = result