const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const date = '15 mar 2023';

const CountDown = () => {
    const targetDate = new Date(date);
    const today = new Date();

    const totalSeconds = (targetDate - today)/1000;

    const finalDay = Math.floor(totalSeconds / 60 / 60 / 24);
    const finalHours = Math.floor(totalSeconds / 60 / 60) % 24;
    const finalMinutes = Math.floor(totalSeconds / 60 ) % 60;
    const finalSeconds = Math.floor(totalSeconds) % 60;

    days.innerHTML = TimeFormat(finalDay);
    hours.innerHTML = TimeFormat(finalHours);
    minutes.innerHTML = TimeFormat(finalMinutes);
    seconds.innerHTML = TimeFormat(finalSeconds);
}

const TimeFormat = (time) => {
    return time < 10 ? `0${time}` : time;
}

CountDown();
setInterval(CountDown, 1000);