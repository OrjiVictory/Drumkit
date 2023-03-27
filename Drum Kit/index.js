var numberofDrumButtons = document.querySelectorAll(".drum").length;
console.log(numberofDrumButtons);

//Animation
//adding
function buttonAnimation(currentKey){
   document.querySelector("." + currentKey).classList.add("pressed");

//removing
   setTimeout(function(){
      document.querySelector("." + currentKey).classList.remove("pressed");
   }, 100);
}

for(i=0; i<numberofDrumButtons; i++){
   document.querySelectorAll(".drum")[i].addEventListener("click", eventCodes);
   
function eventCodes(){
   //playing sound with javascript using the switch syntax.
   var button = this.innerHTML;
   
   buttonAnimation(button); //calling the animation function for the animation below

   switch(button){

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

      default:console.log(buttons);

      
   }
}
}



