let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");


setInterval(() => {
    let currentTime=new Date();

// console.log(currentTime.getHours());
// console.log(currentTime.getMinutes());

hrs.innerHTML=(currentTime.getHours() < 10 ?"0":"") + currentTime.getHours();//So that it start from 01,02,03,04to,09
min.innerHTML=(currentTime.getMinutes() < 10 ?"0":"") + currentTime.getMinutes();//So that it start from 01,02,03,04to,09
sec.innerHTML=(currentTime.getSeconds() < 10 ?"0":"") + currentTime.getSeconds();//So that it start from 01,02,03,04to,09
}, 1000);
