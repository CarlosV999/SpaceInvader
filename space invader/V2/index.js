const shooter = document.getElementById("player-controlled-shooter")
const mainPlayArea = document.getElementById("main-play-area")
const startButton = document.getElementById("start-button")
const instructions = document.getElementById("instructions-text")
const scoreCounter = document.querySelector('#score span')

startButton.addEventListener("click", (event)=>{
    playGame()
})



function playGame(){
    startButton.style.display = 'none'
    instructions.style.display = 'none'
    window.addEventListener("keydown", letShipFly)
    let justice = new Audio("audio/Justice - One Minute To Midnight - † (Official Audio) (128 kbps).mp3")
    justice.play()
    let moveMonsterInterval = setInterval(()=>{createMonster()}, 2100)
}

function moveUp() {
    let topPosition = window.getComputedStyle(shooter).getPropertyValue('top')
    //console.log(shooter.style.top)
    if (shooter.style.top === "0px"){
        return
    }

    else {
        let position = parseInt(topPosition)
        position -= 4
        shooter.style.top = `${position}px`
    }
}

function moveDown() {
    let topPosition = window.getComputedStyle(shooter).getPropertyValue('top')
    //console.log(shooter.style.top)
    if(shooter.style.top === "360px") {
        return
    }

    else{
        let position = parseInt(topPosition)
        position += 4
        shooter.style.top = `${position}px`
    }
}

function letShipFly(event) {
    if(event.key === "ArrowUp"){
        event.preventDefault()
        moveUp()
    }

    else if (event.key === "ArrowDown") {
        event.preventDefault()
        moveDown()
    }

    else if (event.key === " "){
        event.preventDefault()
        fireLaser()
    }
}
//window.addEventListener("keydown", letShipFly)  

function fireLaser(){
    let laser = createLaserElement()
    mainPlayArea.appendChild(laser)
    let laserSFX = new Audio('audio/Pew_sound_effect_128_kbps.mp3')
    laserSFX.play()
    moveLaser(laser)
}

function createLaserElement() {
    let xPosition = parseInt(window.getComputedStyle(shooter).getPropertyValue('left'))
    let yPosition = parseInt(window.getComputedStyle(shooter).getPropertyValue('top'))
    let newLaser = document.createElement ('img')
    newLaser.src = 'images/laser.png'
    newLaser.classList.add('laser')
    newLaser.style.left =`${xPosition}px`
    newLaser.style.top = `${yPosition - 10}px`
    return newLaser
}

function moveLaser(laser) {
    let laserInterval = setInterval(()=> {
        let xPosition = parseInt(laser.style.left)
        let monsters = document.querySelectorAll(".monster")
        monsters.forEach(monster => {
            if (checkLaserCollision(laser, monster)){
                let explosion = new Audio('audio/Explosion Sound Effect (128 kbps).mp3')
                explosion.play()
                monster.src = 'images/explosion.png'
                monster.classList.remove('monster')
                monster.classList.add('dead-monster')
                scoreCounter.innerText = parseInt(scoreCounter.innerText) + 100
            }
        })
        //console.log(xPosition)
        if (xPosition === 340) {
            laser.remove()
        }

        else {
            laser.style.left = `${xPosition + 4}px`
        }
    }, 10)
}

//const monsterImgs = ['images/Alien1.png','images/Alien2.png']

function createMonster(){
    let newMonster = document.createElement('img')
    //let monsterSpriteImg = monsterImgs[Math.floor(Math.random()*monsterImgs,length)]
    //newMonster.src = monsterSpriteImg
    newMonster.src = 'images/Alien1.png'
    newMonster.classList.add('monster')
    newMonster.style.left = '370px'
    newMonster.style.top = `${Math.floor(Math.random()* 330)+ 30}px`
    mainPlayArea.appendChild(newMonster)
    moveMonster(newMonster)
    
}

function moveMonster (monster){
    let moveMonsterInterval = setInterval(()=>{
        let xPosition= parseInt(window.getComputedStyle(monster).getPropertyValue('left'))
        if(xPosition <= 50) {
            monster.remove()
        }
        
        else {
            monster.style.left=`${xPosition - 4}px`
        }
    },30)
}

//setInterval(createMonster(), 100)

function checkLaserCollision(laser, monster) {
    
    let laserLeft = parseInt(laser.style.left)
    let laserTop = parseInt(laser.style.top)
    let laserBottom = laserTop - 20
    let monsterTop = parseInt(monster.style.top)
    let monsterBottom = monsterTop - 30
    let monsterLeft = parseInt(monster.style.left)

    if(laserLeft != 340 && laserLeft + 40 >= monsterLeft) {
        if( (laserTop <= monsterTop && laserTop >= monsterBottom) ) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return false
    }
}
