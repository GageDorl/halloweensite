document.addEventListener('DOMContentLoaded',function(){
    let key = sessionStorage.getItem("key");
    if(key){
        keyAquired();
    }
});

function keyAquired(){
    let keyDiv = document.createElement('div');
    keyDiv.setAttribute('id', 'key');
    let doorContainer = document.getElementsByClassName('house-container')[0];
    doorContainer.appendChild(keyDiv);
}