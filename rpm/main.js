function calculateSpeed(){
    let meterBar = document.getElementById("meter-bg-bar");
    let strokeDashoffset = parseFloat(window.getComputedStyle(meterBar).getPropertyValue("stroke-dashoffset"));
    let speed = ((615 - strokeDashoffset) / 615) * 180;
    speed = Math.round(speed);
    return speed;
}


function updateSpeedDisplay(){
    let speed = calculateSpeed();
    let speedDisplay = document.getElementById("speed");
    speedDisplay.textContent = speed;
}

setInterval(updateSpeedDisplay, 100);