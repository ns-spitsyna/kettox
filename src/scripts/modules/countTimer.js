const countTimer = () => {
    const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

   const getTimeRemaining = () => {
        const dateNow = new Date(),
            dateStop = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() + 1).getTime(),

            timeRemaning = (dateStop - dateNow.getTime())/1000,
            seconds = Math.floor(timeRemaning % 60),
            minutes = Math.floor((timeRemaning / 60) % 60),
            hours = Math.floor(timeRemaning / 60 / 60);

            return {timeRemaning, hours, minutes, seconds};
    }
    const addZero = (number) => {
        if(number < 10)  {
            return '0' + number;
        }
        return number;
    }

    const updateClock = () => {
        let timer = getTimeRemaining();

        timerHours.textContent = addZero(timer.hours);
        timerMinutes.textContent = addZero(timer.minutes);
        timerSeconds.textContent = addZero(timer.seconds);

        let idInterval;
        if(timer.timeRemaning > 0){
            idInterval =  setTimeout(updateClock, 1000);
        } else {
            clearTimeout(idInterval);
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
            timer.hours = 0;
            timer.minutes = 0;
            timer.seconds = 0;
        }
    }
    updateClock();
};

export default countTimer;