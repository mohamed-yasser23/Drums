// event listener : mouse clicks

for (var i = 0 ; i < document.querySelectorAll(".drum").length;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click" , function() {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
});
}


document,addEventListener("keydown" , function(event) {
makeSound(event.key);
buttonAnimation(event.key);
});


function makeSound (key) {
    var audio;
      switch (key) {
        case 'w':
            audio = new Audio ("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            audio = new Audio ("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            audio = new Audio ("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            audio = new Audio ("sounds/tom-4.mp3");
            audio.play();
            break; 
        case 'j':
            audio = new Audio ("sounds/crash.mp3");
            audio.play();
            break;
        case 'k':
            audio = new Audio ("sounds/kick-bass.mp3");
            audio.play();
            break;   
        case 'l':
            audio = new Audio ("sounds/snare.mp3");
            audio.play();
            break;
        default:
            break;
      }
}

function buttonAnimation(key) {
 document.querySelector("."+key).classList.add("pressed");
 setTimeout(function ()  {
    document.querySelector("."+key).classList.remove("pressed");
 }, 100);
}