
//button press

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);

      function handleclick(){

  var button=this.innerHTML;
    switch (button) {
      case "s":

           var audio =new Audio("sounds/tom-1.mp3");
           audio.play();

          break;
          case "n":
               var audio =new Audio("sounds/tom-2.mp3");
               audio.play();

              break;
              case "e":
                   var audio =new Audio("sounds/tom-3.mp3");
                   audio.play();

                  break;
                  case "h":
                       var audio =new Audio("sounds/tom-4.mp3");
                       audio.play();

                      break;
                      case "a":
                           var audio =new Audio("sounds/crash.mp3");
                           audio.play();

                          break;
                          case "r":
                               var audio =new Audio("sounds/kick-bass.mp3");
                               audio.play();

                              break;
                              case "k":
                                   var audio =new Audio("sounds/snare.mp3");
                                   audio.play();

                                  break;




    }
  }
}
//keypressddgf
document.addEventListener("keydown",function(event){
     var key=event.key;
    
       switch (key) {
         case "s":

              var audio =new Audio("sounds/tom-1.mp3");
              audio.play();

             break;
             case "n":
                  var audio =new Audio("sounds/tom-2.mp3");
                  audio.play();

                 break;
                 case "e":
                      var audio =new Audio("sounds/tom-3.mp3");
                      audio.play();

                     break;
                     case "h":
                          var audio =new Audio("sounds/tom-4.mp3");
                          audio.play();

                         break;
                         case "a":
                              var audio =new Audio("sounds/crash.mp3");
                              audio.play();

                             break;
                             case "r":
                                  var audio =new Audio("sounds/kick-bass.mp3");
                                  audio.play();

                                 break;
                                 case "k":
                                      var audio =new Audio("sounds/snare.mp3");
                                      audio.play();

                                     break;




       }
});
