window.onload=function() {
    upTime('april,17,2016,04:15:00'); // ****** Change this line!
}

function upTime(countTo) {
    now = new Date();
    countTo = new Date(countTo);
    difference = (now-countTo);

    years=Math.floor(difference/(60*60*1000*24*365)*1);

    total_weeks=Math.floor(difference/(60*60*1000*24*7)*1);
    
    days=Math.floor(((difference/(60*60*1000*24))%365)*1);
    total_days=Math.floor(difference/(60*60*1000*24)*1);
    
    hours=Math.floor((difference/(60*60*1000)%24)*1);
    total_hours=Math.floor(difference/(60*60*1000)*1);
    
    mins=Math.floor((difference/(60*1000)%60)*1);
    total_mins=Math.floor(difference/(60*1000)*1);
    
    secs=Math.floor((difference/1000)%60*1);
    total_secs=Math.floor(difference/1000*1);

    document.getElementById('years').firstChild.nodeValue = years;
    document.getElementById('days').firstChild.nodeValue = days;
    document.getElementById('hours').firstChild.nodeValue = hours;
    document.getElementById('minutes').firstChild.nodeValue = mins;
    document.getElementById('seconds').firstChild.nodeValue = secs;
    
    document.getElementById('total-years').firstChild.nodeValue = years;
    document.getElementById('total-weeks').firstChild.nodeValue = total_weeks;
    document.getElementById('total-days').firstChild.nodeValue = total_days;
    document.getElementById('total-hours').firstChild.nodeValue = total_hours;
    document.getElementById('total-mins').firstChild.nodeValue = total_mins;
    document.getElementById('total-secs').firstChild.nodeValue = total_secs;
    
    if (years == 1) {
        document.getElementById('year-s').innerHTML = "";
        document.getElementById('total-year-s').innerHTML = "";
    } else {
        document.getElementById('year-s').innerHTML = "s";
        document.getElementById('total-year-s').innerHTML = "s";
    }
    if (days == 1) {
        document.getElementById('day-s').innerHTML = "";
    } else {
        document.getElementById('day-s').innerHTML = "s";
    }
    if (hours == 1) {
        document.getElementById('hour-s').innerHTML = "";
    } else {
        document.getElementById('hour-s').innerHTML = "s";
    }
    if (mins == 1) {
        document.getElementById('min-s').innerHTML = "";
    } else {
        document.getElementById('min-s').innerHTML = "s";
    }
    if (secs == 1) {
        document.getElementById('sec-s').innerHTML = "";
    } else {
        document.getElementById('sec-s').innerHTML = "s";
    }
    
    

    clearTimeout(upTime.to);
    upTime.to=setTimeout(function(){ upTime(countTo); },1000);
}