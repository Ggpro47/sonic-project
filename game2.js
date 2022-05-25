
const sonic = document.querySelector('.sonic-container2')
let jumping = false
let left = 50





document.onkeydown = (e) => {
    console.log('Keyboard pressed',e.code)   

    
    if (e.code == 'keyw' && jumping === false){
    
        jumping = true
        console.log('Sonic jumping',jumping)
        sonic.classList.add('jump')

        
        setTimeout( () => {
            jumping = false
            sonic.classList.remove('jump')
        }, 2000 )
    }

    if (e.code == 'ArrowRight'){
        if (left < 80){
            left = left + 2
            sonic.style.left = left + '%'    
        }
    }
    if (e.code == 'ArrowLeft'){
        left = left - 2
        sonic.style.left = left + '%'    
    }

}