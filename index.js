var allDrumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < allDrumButtons.length; i++) {
    allDrumButtons[i].addEventListener("click", handleClick);
}

function handleClick(event) {
    console.log(event);
    var buttonClicked = this.innerHTML;
    makeSound(buttonClicked);
    buttonAnimation(buttonClicked);

    // console.log(this.innerHTML);
    // console.log(this.style.color = "yellow");
    // document.querySelector(this.innerHTML).setAttribute("color", "white");
}

// Detect for keyboard pressed down
document.addEventListener("keydown", function(event){
    // console.log(event);
    makeSound(event.key);
    buttonAnimation(event.key);
})

// keyup
// document.addEventListener("keyup", function(event){
//     removeButtonAnimation(event.key);
//     console.log("keyup");
// })

function makeSound(key){

    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(key) {

    var activeButton = document.querySelector("." + key);
    var activeButtonClass = activeButton.getAttribute("class");
    console.log(activeButtonClass);
    activeButton.classList.add("pressed");
    
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
