let musicPlayer = document.querySelector("#musicPlayer")
let play2 = document.querySelector(".play")
let pause = document.querySelector(".pause")
let seekBar = document.querySelector("#seekBar")
let song2 =  document.querySelector(".song2")
let backward = document.querySelector(".backward")
let forward = document.querySelector(".forward")
let starting = document.querySelector(".starting")
let ending = document.querySelector(".ending")

let min;

songList = [
    {
        path : "assets/song1.mp3"
    },
    {
        path : "assets/song2.mp3"
    },
    {
        path : "assets/song3.mp3"
    },
    {
        path : "assets/song4.mp3"
    },
    {
        path : "assets/song5.mp3"
    },
    {
        path : "assets/song6.mp3"
    },
    {
        path : "assets/song7.mp3"
    },
]


let i = 0;


play2.addEventListener("click",function(){
    musicPlayer.play()
    play2.style.display = "none"
    pause.style.display = "block"
})

pause.addEventListener("click",function(){
    musicPlayer.pause()
    pause.style.display = "none"
    play2.style.display = "block"
})

musicPlayer.addEventListener("timeupdate",()=>{
progress = parseInt((musicPlayer.currentTime/musicPlayer.duration)*100)
seekBar.value = progress
})

seekBar.addEventListener("change",()=>{
    musicPlayer.currentTime = seekBar.value  * musicPlayer.duration/100
})

forward.addEventListener("click",()=>{
    i++;
     play2.style.display = "block"
    pause.style.display = "none"
    musicPlayer.src = songList[i].path
    console.log(i);

})


backward.addEventListener("click",()=>{
    i--;
     play2.style.display = "block"
    pause.style.display = "none"
    musicPlayer.src = songList[i].path
    console.log(i);
})


    musicPlayer.addEventListener("loadeddata",function(){
let currentMin = Math.floor(musicPlayer.duration / 60)
let currentSec = Math.floor(musicPlayer.duration % 60)
if(currentSec < 10){
    currentsec = `0${totalSec}`
}
ending.innerText = `${currentMin}:${currentSec}`
})


musicPlayer.addEventListener("timeupdate",function(){

let currentMin = Math.floor(musicPlayer.currentTime / 60)
let currentSec = Math.floor(musicPlayer.currentTime % 60)
if(currentSec < 10){
    currentSec = `0${currentSec}`
    console.log(currentMin);
    console.log(currentSec);
}

starting.innerText = `${currentMin}:${currentSec}`

})
