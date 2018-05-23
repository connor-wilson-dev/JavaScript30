const player = document.querySelector('.player');
const toggle = player.querySelector('.toggle');
const video = player.querySelector('video');
const prog = player.querySelector('.progress')
const progFilled = prog.children[0];
const vol = player.querySelector('input[name="volume"]');
const playerControls = player.querySelector('.player__controls');
const playbackRate = player.querySelector('[name="playbackRate"]');
const skipButtons = player.querySelectorAll('[data-skip]');

function togglePlay() {
  //RESEARCH How does this method method work????
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function changeIcon() {
  //icon is equal to the a boolean declaring if paused show play, if playing show pause;
  const icon = this.paused ? '►' : '▌▌';
  toggle.textContent = icon;
}
function skip() {
  // sets current video time to be equal to current video time + skip data (-10 or +25);
  video.currentTime += parseFloat(this.dataset.skip);
}
toggle.addEventListener('click', togglePlay)
video.addEventListener('click', togglePlay);
video.addEventListener('play', changeIcon);
video.addEventListener('pause', changeIcon);

skipButtons.forEach(button => button.addEventListener('click', skip)
)
