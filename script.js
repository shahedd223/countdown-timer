const targetDate = new Date("2024-12-31T00:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = `${days} يوم`;
    document.getElementById("hours").innerHTML = `${hours} ساعة`;
    document.getElementById("minutes").innerHTML = `${minutes} دقيقة`;
    document.getElementById("seconds").innerHTML = `${seconds} ثانية`;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "انتهى العداد!";
    }
}, 1000);
