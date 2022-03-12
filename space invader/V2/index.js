const shooter = document.getElementById("player-controlled-shooter")

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