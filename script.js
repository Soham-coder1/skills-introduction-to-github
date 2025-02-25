// script.js
document.getElementById('downloadBtn').addEventListener('click', function() {
    const videoUrl = document.getElementById('videoUrl').value;
    const quality = document.getElementById('quality').value;
    const message = document.getElementById('message');

    if (videoUrl) {
        message.innerHTML = `Downloading video from ${videoUrl} in ${quality}...`;
        // Simulate download process
        setTimeout(() => {
            message.innerHTML = 'Download completed!';
        }, 3000);
    } else {
        message.innerHTML = 'Please enter a valid YouTube video URL.';
    }
});
