import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

let playTimeStart = JSON.parse(localStorage.getItem("playTime")) || 0;

player.on('play', function() {
    player.getCurrentTime().then(function(seconds) {  // вказує поточний час відео
        console.log(seconds)
        localStorage.setItem("playTime", JSON.stringify(seconds));
    }).catch(function(error) {
        // an error occurred
    });   
});

player.setCurrentTime(playTimeStart).then(function(seconds) {   // запускає плеєр з вказаного часу
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
})


