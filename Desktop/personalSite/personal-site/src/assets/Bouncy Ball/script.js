var block = document.getElementById("block");
var hole = document.getElementById("hole");
var jumping = 0;
var counter = 0;

hole.addEventListener('animationiteration', () => {
   var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
});

setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+2) + "px";
    }
    var blockLeft= parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    if((characterTop>480)||(((blockLeft<20)&&(blockLeft>-50))&&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("Game over :( Score: "+(counter-1));
        character.style.top = 100 + "px";
        counter=0;}
}, 10);

function jump(){
    jumping = 1;
    jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if ((characterTop>6)&&(counter<15)){
            character.style.top = (characterTop-4) + "px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
        }
        jumpCount++;
    },10);
}