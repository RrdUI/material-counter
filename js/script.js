const targetDate = new Date("March 3, 2024 00:00:00").getTime();

function updateTimer() {
    const timeDifference = targetDate - new Date().getTime();

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const milliseconds = String(timeDifference % (1000 * 60 * 60 * 24)).padStart(3, '0');

        document.getElementById("timer").innerHTML = `${days}<sup>.${milliseconds}</sup>`;
    } else {
        document.getElementById("timer").innerHTML = "Expired";
    }
}

setInterval(updateTimer, 100);
updateTimer();
