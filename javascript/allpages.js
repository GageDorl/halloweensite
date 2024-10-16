document.addEventListener('DOMContentLoaded',function(){
    let key = sessionStorage.getItem("key");
    console.log(key,key==true);
    if(key){
        keyAquired();
    }
});

function keyAquired(){
    let keyDiv = document.createElement('div');
    keyDiv.setAttribute('id', 'key');
    let doorContainer = document.getElementsByClassName('house-container')[0];
    console.log(keyDiv);
    doorContainer.appendChild(keyDiv);
}