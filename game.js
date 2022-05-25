// Capire le varibili
const sonic = document.querySelector('.sonic-container')
let jumping = false
let left = 50

const obstacle = document.querySelector('.obstacle')




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
        if (left < 90){
            left = left + 2
            sonic.style.left = left + '%'    
        }
    }
    if (e.code == 'ArrowLeft'){
       
        left = left - 2
        sonic.style.left = left + '%' 
    
           
    }

}


// Managing the drop of an obstacle
let dropping1 = false
let droppingEl1 = document.querySelector('.obstacle')
setInterval( () => {
    
    if (Math.random() < 0.3 && dropping1 === false){

        // set random left
        droppingEl1.style.left = parseInt(Math.random() * 100) + "%"

        dropping1 =true
        droppingEl1.classList.add('dropping')
        setTimeout(() => {
            dropping1 =false
            droppingEl1.classList.remove('dropping')
        },4000)
    }

},500)


// collision detection
setInterval(() => {
    if (isCollide(sonic, droppingEl1)){
        alert("you die")
        location.href="index.html"
    }

    // 
},30) 


function isCollide(a, b) {
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();

    return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    );
}



setTimeout(() => {
    alert("you won")
    location.href="game2.html"
},60*1000)