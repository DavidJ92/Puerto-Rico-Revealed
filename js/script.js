document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('video-background');
    
    // Attempt to play the video automatically
    video.play().catch(function(error) {
        // Autoplay was prevented, wait for user interaction
        console.warn('Autoplay was prevented. Waiting for user interaction.');

        // Add a click event listener to start playback on user interaction
        document.addEventListener('click', function() {
            if (video.paused) {
                video.play();
            }
        });
    });
});
