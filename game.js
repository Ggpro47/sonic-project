// Capire le varibili
const sonic = document.querySelector('.sonic-container')
let jumping = false
let left = 50


//checking how javascript interact with the user

// 1 - l'uso della tastiera
document.onkeydown = (e) => {
    console.log('Keyboard pressed',e.code)   

    // if user click spacebar ....
    if (e.code == 'Space' && jumping === false){
        // add the class jump to sonic
        jumping = true
        console.log('Sonic jumping',jumping)
        sonic.classList.add('jump')

        //dopo x tempo rimuoviamo la classe
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