const shooter = document.getElementById("player-controlled-shooter")
const mainPlayArea = document.getElementById("main-play-area")

function moveUp() {
    let topPosition = window.getComputedStyle(shooter).getPropertyValue('top')
    //console.log(shooter.style.top)
    if (shooter.style.top === "5px"){
        return
    }

    else {
        let position = parseInt(topPosition)
        position -= 8
        shooter.style.top = `${position}px`
    }
}

function moveDown() {
    let topPosition = window.getComputedStyle(shooter).getPropertyValue('top')
    //console.log(shooter.style.top)
    if(shooter.style.top === "685px") {
        return
    }

    else{
        let position = parseInt(topPosition)
        position += 8
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
window.addEventListener("keydown", letShipFly)  

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
    newLaser.style.top = `${yPosition -20}px`
    return newLaser
}

function moveLaser(laser) {
    let laserInterval = setInterval(()=> {
        let xPosition = parseInt(laser.style.left)
        //console.log(xPosition)
        if (xPosition === 1492) {
            laser.remove()
        }

        else {
            laser.style.left = `${xPosition + 8}px`
        }
    }, 10)
}
