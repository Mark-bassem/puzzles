let timerInterval;

function startTimer(seconds) {
    clearInterval(timerInterval);
    let time = seconds;
    const timerDisplay = document.getElementById('timer');
    timerDisplay.innerText = `الوقت: ${time}`;

    timerInterval = setInterval(() => {
        time--;
        timerDisplay.innerText = `الوقت: ${time}`;
        if (time <= 0) {
            clearInterval(timerInterval);
            alert("⏰ انتهى الوقت!");
            loadNextPuzzle();
        }
    }, 1000);
}