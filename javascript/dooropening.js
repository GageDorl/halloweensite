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
    houseContainer.style.perspective="500px";
    door.style.transform="rotateY(-45deg)";
    setTimeout(function(){
        window.location.href = "inside.html";
    },2000);
}