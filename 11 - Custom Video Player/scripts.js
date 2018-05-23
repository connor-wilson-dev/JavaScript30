const player = document.querySelector('.player');
const toggle = player.querySelector('.toggle');
const video = player.querySelector('video');
const prog = player.querySelector('.progress')
const progFilled = prog.children[0];
const playerControls = player.querySelector('.player__controls');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('[type="range"]')

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

function handleRangeUpdate()  {
  //name of each range pertains to the value of the method we want to change.
  //Therefore we just have to change the value of the given name we are already recieving.
  video[this.name] = this.value
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progFilled.style.flexBasis = `${percent}%`
}
function scrub(e) {
  const scrubTime = (e.offsetX / prog.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', changeIcon);
video.addEventListener('pause', changeIcon);

skipButtons.forEach(button => button.addEventListener('click', skip)
);

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range =>range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;


video.addEventListener('timeupdate', handleProgress);
prog.addEventListener('click', scrub);
prog.addEventListener('mousedown', () => mousedown = true);
prog.addEventListener('mouseup', () => mousedown = false);
prog.addEventListener('moursemove', () => mousedown && scrub)
