import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

let playTimeStart = localStorage.getItem("videoplayer-current-time") || 0;

 player.on('timeupdate', throttle(() => {
        player.getCurrentTime().then(function(seconds) {  // вказує поточний час відео
            
        console.log(seconds)

        localStorage.setItem("videoplayer-current-time", seconds);
        })

        .catch(function(error) {
            // an error occurred
        });
    }, 2000)); 



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


