

const h1 = document.createElement('h1');
h1.textContent = 'Hello World!';
document.body.appendChild(h1);

document.addEventListener('contextmenu',e=>{
    e.preventDefault();
    alert('nuh uh!');
})

const dropDownMenu= document.querySelector('.dropDownMenu')
const accountIcon= document.querySelector('.account')


const animate=()=>{
    let translateY = 0;
    
    if(menuOpen){
        dropDownMenu.style.transform = `translateY(${translateY}px)`;
        setTimeout(()=>{
            translateY += 10;
            
        },100)
        if(translateY < 100){
            requestAnimationFrame(animate);
        }

    }else{
        dropDownMenu.style.transform = `translateY(${translateY}px)`;
        translateY -= 10;
        if(translateY > 0){
            requestAnimationFrame(animate);
        }
    }
}


let menuOpen = false;

accountIcon.addEventListener('click',()=>{
    animate();
    if(menuOpen){
        menuOpen = false;
        dropDownMenu.style.display = 'none';
    }
    else{
        menuOpen = true;
        dropDownMenu.style.display = 'block';
    }
})

