let key = sessionStorage.getItem('key');
let unlocked = sessionStorage.getItem('unlocked');


function openDoor(door){
    console.log(unlocked)
    if(key||unlocked){
        door.style.transform = "rotateY(135deg)";
        sessionStorage.setItem('key','');
        if(key){
            sessionStorage.setItem('unlocked',true);
            document.getElementById('key').remove();
        }
        setTimeout(function(){
            let winningLink = document.createElement('a');
            winningLink.setAttribute('id','winning');
            winningLink.setAttribute('href','winning.html');
            document.getElementsByClassName('house-container')[0].appendChild(winningLink);
        })
    }
    else{
        alert('You need a key to open this door');
    }
}

document.addEventListener('DOMContentLoaded',function(){
    let door = document.getElementById('steelDoor');
    if(unlocked){
        openDoor(door);
    }
    else{
        console.log(door)
        door.addEventListener('click', function(){openDoor(door)});
    }
})