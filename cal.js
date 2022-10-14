function displayTime(){
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    
    if(hrs < 10){
        hrs = '0' + hrs;
    }
    if(min < 10){
        min = '0' + min;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
}

setInterval(displayTime, 10);