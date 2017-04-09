window.onload=function() {
    upTime('april,17,2016,04:15:00'); // ****** Change this line!
}
function upTime(countTo) {
    now = new Date();
    countTo = new Date(countTo);
    difference = (now-countTo);

    years=Math.floor(difference/(60*60*1000*24*365)*1)
    days=Math.floor((difference%(60*60*1000*24*365))/(60*60*1000*24)*1);
    hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
    mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
    secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

    document.getElementById('years').firstChild.nodeValue = years;
    document.getElementById('days').firstChild.nodeValue = days;
    document.getElementById('hours').firstChild.nodeValue = hours;
    document.getElementById('minutes').firstChild.nodeValue = mins;
    document.getElementById('seconds').firstChild.nodeValue = secs;

    clearTimeout(upTime.to);
    upTime.to=setTimeout(function(){ upTime(countTo); },1000);
}