function updateClock() {
    const clockElement = document.getElementById('clock');
    
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format time to always have two digits
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds}`;
    clockElement.textContent = timeString;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
