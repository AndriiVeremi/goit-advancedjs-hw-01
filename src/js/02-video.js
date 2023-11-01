import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LS_KEY = 'videoplayer-current-time';

const onPlay = function ({ seconds }) {
  localStorage.setItem(LS_KEY, seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = +localStorage.getItem(LS_KEY);
player.setCurrentTime(currentTime);