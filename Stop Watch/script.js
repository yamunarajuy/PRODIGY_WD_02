window.onload = function () {
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let appendMinutes = document.querySelector('#minutes');
    let appendTens = document.querySelector('#tens');
    let appendSeconds = document.querySelector('#seconds');

    let startBtn = document.querySelector('#start');
    let stopBtn = document.querySelector('#stop');
    let resetBtn = document.querySelector('#reset');
    let lapBtn = document.querySelector('#lap'); 
    let lapTimesContainer = document.querySelector('#lap-times');
    let Interval;
    let lapCounter = 1;

    const startTimer = () => {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = '0' + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = '0' + seconds;
            tens = 0;
            appendTens.innerHTML ='0' + 0;
        }
        if (seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
        if (seconds > 59){
            minutes++;
            appendMinutes.innerHTML = '0' + minutes;
            seconds = '0';
            appendSeconds.innerHTML = '0' + 0;
        }
        
        if (tens === 0 && seconds % 10 === 0) {
            const lapTime = `${minutes}:${seconds}:${tens}`;
            const lapTimeElement = document.createElement('p');
            lapTimeElement.textContent = `Lap ${lapCounter}: ${lapTime}`;
            lapTimesContainer.appendChild(lapTimeElement);
            lapCounter++;
        }
    };

    
    startBtn.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };

    stopBtn.onclick = () => {
        clearInterval(Interval);
    };

    resetBtn.onclick = () => {
        clearInterval(Interval);
        tens = '00';
        seconds = '00';
        minutes = '00';
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
        lapCounter = 1;
        lapTimesContainer.innerHTML = '';
    };

    lapBtn.onclick = () => {
        if (Interval) {
            const lapTime = `${minutes}:${seconds}:${tens}`;
            const lapTimeElement = document.createElement('p');
            lapTimeElement.textContent = `Lap ${lapCounter}: ${lapTime}`;
            lapTimesContainer.appendChild(lapTimeElement);
            lapCounter++;
        }
    };
};