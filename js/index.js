


let video = document.querySelector("#video")


document.addEventListener("click", (e) => {
    const et = e.target
    if (et.matches("#play")) {
        video.play()
        let videoDuration = document.querySelector("#videoControls p")
        const duration = video.duration / 60 
        const minutes = Math.trunc(duration)
        const minutesOff = duration - minutes
        const seconds = Math.trunc(minutesOff * 60) 
        videoDuration.innerText=`Duración total del video: ${minutes}:${seconds} `
    }
    if (et.matches("#stop")){
        video.pause()
    }
})

