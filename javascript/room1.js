document.addEventListener('DOMContentLoaded',function(){
    const ghoul = document.getElementById('ghoul');
    let moving=false;
    let scream = document.getElementById('scream');
    ghoul.addEventListener("click",function(){
        if(!moving){
            scream.currentTime = 0;
            scream.play();
            moving=true;
            let count=0;
            grow(ghoul);
            
            sessionStorage.setItem('key', '');
            let shaker = setInterval(shake,100,ghoul);
            let death = document.getElementById('death');
            let back = document.getElementById('back-button');
            death.style.display = 'flex';
            back.text = 'Restart';
            back.href = 'index.html';
            setTimeout(function(){
                clearInterval(shaker);
                goBack(ghoul);
                document.getElementById('key').remove();
                moving=false;
                // scream.pause();
            },6000)
            
            ghoul.style.top=0;
            ghoul.style.right=0;
        }
    })
});

function shake(ghoul){
    if(ghoul.style.top!='50px'){
        ghoul.style.top = '50px';
        ghoul.style.right = '50px';
    }
    else{
        ghoul.style.top = '-50px';
        ghoul.style.right = '-50px';
    }
}
    
function grow(ghoul){
    ghoul.style.top = '-50px';
    ghoul.style.right = '-50px';
    ghoul.style.height="200%";
    ghoul.style.width="100%";
}

function goBack(ghoul){
    ghoul.style.top = "40.6%";
    ghoul.style.right = '12.91%';
    ghoul.style.height = '64%';
    ghoul.style.width = '19%';
}