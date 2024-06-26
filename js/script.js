document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('video-background');
    
    // Play the video on user interaction (click or tap)
    document.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        }
    });

    // Optional: Pause the video if it's currently playing on user interaction
    // document.addEventListener('click', function() {
    //     if (video.paused) {
    //         video.play();
    //     } else {
    //         video.pause();
    //     }
    // });
});
