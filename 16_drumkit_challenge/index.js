function playSound(letter){
        switch (letter) {
            case 'w':
                tom1 = new Audio('./sounds/tom-1.mp3');
                tom1.play()
                break;
            case 'a':
                tom2 = new Audio('./sounds/tom-2.mp3')
                tom2.play()
                break;
            case 's':
                tom3 = new Audio('./sounds/tom-3.mp3')
                tom3.play()
                break;
            case 'd':
                tom4 = new Audio('./sounds/tom-4.mp3')
                tom4.play()
                break;
            case 'j':
                crash = new Audio('./sounds/crash.mp3')
                crash.play()
                break;
            case 'k':
                kick = new Audio('./sounds/kick-bass.mp3')
                kick.play()
                break;
            case 'l':
                snare = new Audio('./sounds/snare.mp3')
                snare.play()
                break;
            default:
                break;
        }
    }

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector(`.${currentKey}`)
    
    activeButton.classList.add('pressed')
    setTimeout(function(){
        activeButton.classList.remove('pressed')
    }, 100)
}

let drum = document.querySelectorAll(".drum")
for (let i = 0 ; i < drum.length; i++ ){drum[i].addEventListener('click', function(){
    playSound(this.innerHTML)
    buttonAnimation(this.innerHTML)
})}

document.addEventListener("keydown", function (event) {
    playSound(event.key)
    buttonAnimation(event.key)
})
