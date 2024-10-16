document.addEventListener('DOMContentLoaded',function(){
    let trashCan = document.getElementById('trash-can');
    trashCan.addEventListener('click',openCan);
});

function openCan(){
    let key = sessionStorage.getItem("key");
    let openCan = document.createElement('img');
    openCan.setAttribute('src','assets/openCan.png');
    openCan.setAttribute('id','open-can');
    document.getElementsByClassName('house-container')[0].appendChild(openCan);
    if(!key){
        let trashKey = document.createElement('div');
        trashKey.setAttribute('id', 'trash-key');
        document.getElementsByClassName('house-container')[0].appendChild(trashKey);
        trashKey.addEventListener('click',getKey);
    }
}

function getKey(){
    sessionStorage.setItem('key',true);
    document.getElementById('trash-key').remove();
    keyAquired();
}