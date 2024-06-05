let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
let MorningNight=document.getElementById("MorningNight");



setInterval(() => {
    let currentTime=new Date();

// console.log(currentTime.getHours());
// console.log(currentTime.getMinutes());

// let ampm=hrs >=12 ?"PM":"AM";

hrs.innerHTML=(currentTime.getHours() < 10 ?"0":"") + currentTime.getHours();//So that it start from 01,02,03,04to,09
min.innerHTML=(currentTime.getMinutes() < 10 ?"0":"") + currentTime.getMinutes();//So that it start from 01,02,03,04to,09
sec.innerHTML=(currentTime.getSeconds() < 10 ?"0":"") + currentTime.getSeconds();//So that it start from 01,02,03,04to,09

if(hrs >=12)
{
    MorningNight.innerHTML="AM"
}
else{
    MorningNight.innerHTML="PM"
}

if(hrs > 12){
    hrs=hrs-12;
    console.log(hrs);
}


}, 1000);
