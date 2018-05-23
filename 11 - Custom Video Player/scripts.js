const playBtn = document.querySelector('.player__button');
const video = document.querySelector('video');
const prog = document.querySelector('.progress')
const progFilled = prog.children[0];
const vol = document.querySelector('input[name="volume"]');





playBtn.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    playBtn.innerHTML =  '&#10074;&#10074;';
  } else if (!video.paused) {
    video.pause();
    playBtn.innerHTML = '►';
  }
})

prog.addEventListener('click', console.log(progFilled))
t 
