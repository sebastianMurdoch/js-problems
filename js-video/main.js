video = document.getElementById('video')

document.getElementById('grabar').addEventListener("click", () => {
    getStreamAndRecord();
})
document.getElementById('stop').addEventListener("click", ()=>{
    video.srcObject.getTracks().forEach(function (track) {
        track.stop();
    });
})

function getStreamAndRecord() {
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            height: {
                max: 480
            }
        }
    })
        .then(function (stream) {
            video.srcObject = stream;
            video.play()
        })
}