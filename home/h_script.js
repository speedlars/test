const daysEl = document.getElementById("days")
const debut = "13 jan 2017";
function countdown(){
    const newYearDate = new Date(debut);
    const currentDate = new Date();
    const second = (newYearDate-currentDate)/1000;
    const days = Math.floor(second/3600/24)*(-1);
    daysEl.innerHTML = days;
}
function formatTime(time){
    return time<10?`0${time}`:time;
}
countdown();
setInterval(countdown,1000);
