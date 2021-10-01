var drums = document.querySelectorAll(".drum");

drums.forEach(drum => drum.addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}));

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            new Audio('sounds/tom-1.mp3').play();
            break;
        case "a":
            new Audio('sounds/tom-2.mp3').play();
            break;
        case "s":
            new Audio('sounds/tom-3.mp3').play();
            break;
        case "d":
            new Audio('sounds/tom-4.mp3').play();
            break;
        case "j":
            new Audio('sounds/snare.mp3').play();
            break;
        case "k":
            new Audio('sounds/crash.mp3').play();
            break;
        case "l":
            new Audio('sounds/kick-bass.mp3').play();
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeBut = document.querySelector("." + currentKey);
    activeBut.classList.add("pressed");
    setTimeout(function () {
        activeBut.classList.remove("pressed");
    }, 100);
}




/**
 * Without lambda
 */

// for(var i = 0; i < drums.length; i++) {
//     drums[i].addEventListener("click", function () {
//         alert("Got Clicked")
//     });
// }
