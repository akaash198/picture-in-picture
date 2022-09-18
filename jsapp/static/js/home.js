const video = document.getElementById('video');
const button = document.getElementById('button');
// Event listener to start the picture in picture




// Prompt to select media stream, pass to video element, then play
async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    } catch (e) {
        // Catch error here
        console.log('whoops, error here:', e);
    }
}

button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
});


// On Load
selectMediaStream();