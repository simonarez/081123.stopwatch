const millisecondsContainer = document.querySelector(".milliseconds--container")
const secondsContainer = document.querySelector(".seconds--container")
const minutesContainer = document.querySelector(".minutes--container")
const hoursContainer = document.querySelector(".hours--container")



const startButton= document.querySelector(".start--button")
const pauseButton= document.querySelector(".pause--button")
const resetButton= document.querySelector(".reset--button")

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let timerStatus = 0;

const handleIncrement = () =>{
    milliseconds+=10
    if(milliseconds===1000){
        milliseconds = 0;
        seconds++;
        if(seconds===60){
            seconds = 0;
            minutes++;
            if(minutes === 60){
                minutes = 0;
                hours++;
            }

        }
    }
    

const formattedSeconds =(seconds < 10 ) ? "0" + seconds : seconds; 
const formattedMinutes =(minutes < 10 ) ? "0" + minutes : minutes; 
const formattedHours =(hours < 10 ) ? "0" + hours : hours; 


    millisecondsContainer.textContent = milliseconds;
    secondsContainer.textContent = formattedSeconds;
    minutesContainer.textContent = formattedMinutes;
    hoursContainer.textContent = formattedHours;
}

startButton.addEventListener("click", ()=>{
    if(timerStatus != null){
            clearInterval(timerStatus)
    }

    timerStatus = setInterval(handleIncrement, 10)

})

pauseButton.addEventListener("click", () =>{
    clearInterval(timerStatus);
})


resetButton.addEventListener("click", ()=>{
    clearInterval(timerStatus);

    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;


    millisecondsContainer.textContent = "000";
    secondsContainer.textContent = "00";
    minutesContainer.textContent = "00";
    hoursContainer.textContent = "00";
})