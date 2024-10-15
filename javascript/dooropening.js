document.addEventListener('DOMContentLoaded',function(){
const door = document.getElementById("door");
door.addEventListener("click", function(event){
    creak(event);
});
});

function creak(event){
    const creakSound = document.getElementById("creak");
    event.preventDefault();    
    const houseContainer = document.getElementsByClassName("house-container")[0];
    creakSound.play();
    door.style.transform="rotateY(-45deg)";
    setTimeout(function(){
        door.style.transform="rotateY(0deg)";
        window.location.href = "inside.html";
    },2000);
}