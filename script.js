const minutesBlock = document.querySelector('.js-minutes');
const secondsBlock = document.querySelector('.js-second');
const hundredthidsecondsBlock = document.querySelector('.js-hundredthid-second');
const btnStart = document.querySelector('.js-start');
const btnStop = document.querySelector('.js-stop');
const btnReset = document.querySelector('.js-reset');


let interval;
let minutes = 0;
let seconds = 0;
let millyseconds = 0;

const startTimer = ()=> {
    millyseconds ++;
    hundredthidsecondsBlock.innerHTML = millyseconds;
    if(millyseconds>99){
        seconds++;
        if(seconds <10){
            secondsBlock.innerHTML = '0'+ seconds;
        }else {
            secondsBlock.innerHTML = seconds;
        }
        
        millyseconds = 0
    }
    if(seconds > 59){
        minutes++;
        if(minutes <10){
            minutesBlock.innerHTML = '0'+ minutes 
        }else {
            minutesBlock.innerHTML = minutes 
        }

        seconds = 0;
    }
}

btnStart.addEventListener('click',()=>{
    clearInterval(interval);
    interval = setInterval(startTimer,10);
})

btnStop.addEventListener('click',()=>{
    clearInterval(interval);
    
})

btnReset.addEventListener('click',()=>{
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    millyseconds = 0;

    minutesBlock.innerHTML = '00';
    secondsBlock.innerHTML = '00';
    hundredthidsecondsBlock.innerHTML= '00';


    
})