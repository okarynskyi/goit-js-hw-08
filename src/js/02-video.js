import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";
const getTime = localStorage.getItem(LOCALSTORAGE_KEY);

player.on('timeupdate', throttle(playerOn, 1000));

player.setCurrentTime(getTime);

function playerOn(data) {
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
}