const player = document.querySelector('.player');
const toggle = player.querySelector('.toggle');
const video = player.querySelector('video');
const prog = player.querySelector('.progress')
const progFilled = prog.children[0];
const vol = player.querySelector('input[name="volume"]');
const playerControls = player.querySelector('.player__controls');
const playbackRate = player.querySelector('input[name="volume"]');
const replayBtn = player.querySelector('button[data-skip="-10"]');
const skipBtn = player.querySelector('button[data-skip="25"]');

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function changeIcon() {
  const icon = this.paused ? '►' : '▌▌';
  toggle.textContent = icon;
}

toggle.addEventListener('click', togglePlay)
video.addEventListener('click', togglePlay);
video.addEventListener('play', changeIcon);
video.addEventListener('pause', changeIcon);
prog.addEventListener('click', function(e) {
})
