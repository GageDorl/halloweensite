document.addEventListener('DOMContentLoaded',function(){
    // sessionStorage.setItem('key', true);
const door = document.getElementById("door");
door.addEventListener("click", function(event){
    creak(event);
});
});



function creak(event){
    const creakSound = document.getElementById("creak");
    event.preventDefault();    
    const houseContainer = document.getElementsByClassName("house-container")[0];
    creakSound.currentTime = 0;
    creakSound.play();
    door.style.transform="rotateY(-45deg)";
    let enterLink = document.createElement('a');
    enterLink.setAttribute('id','enterLink');
    enterLink.setAttribute('href','inside.html');
    document.getElementsByClassName('house-container')[0].appendChild(enterLink);
}