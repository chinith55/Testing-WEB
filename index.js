// document.write(Math.random());
// document.write(Math.floor(Math.random()*99+1));
var rnd1 = document.getElementById("rnd1");
var rnd2 = document.getElementById("rnd2");
var rnd3 = document.getElementById("rnd3");

function random(){
    rnd1.textContent = Math.floor(Math.random()*8+1);
    rnd2.textContent = Math.floor(Math.random()*10+1);
    rnd3.textContent = Math.floor(Math.random()*20+1);
}
// window.setInterval(random,1000); //run random with 1second next random

var btnStart = document.getElementById('btnStart');
var btnStop = document.getElementById('btnStop');
var intervalID=0; //for conditional

btnStart.onclick=function(){
    intervalID=setInterval(random,500);
}
btnStop.onclick=function(){
    clearInterval(intervalID);
}