function getTime(){

    let timing = document.getElementById("selected-time").value;
    let timed = parseFloat(timing);
    let sleeptime = timed-4;
    let waketime = timing;
    let naptime = timed+8;



    document.getElementById("sleep-time").value = "Sleep by "+sleeptime+":00 hours";
    document.getElementById("wake-time").value = "Wake up by "+waketime+":00 hours";
    document.getElementById("nap-time").value = "Nap for 1 hour starting from "+naptime+":00 hours";
    

    
}
function presentTime(){
    let x = 1;
    let newtime = new Date();
    let currentTime = newtime.toLocaleTimeString();
    
    document.getElementById("current-time").value = currentTime;
    setTimeout("presentTime()",1000);
    

}