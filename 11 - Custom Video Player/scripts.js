const video = document.querySelector('video');
const progressFilled = document.querySelector('.progress__filled');
const progress = document.querySelector('.progress');
const playerSliders = document.querySelectorAll('.player__slider');
const playButton = document.querySelector('.toggle');
const prevButton = document.querySelector('.player__button[data-skip="-10"]');
const nextButton = document.querySelector('.player__button[data-skip="25"]');
video.autoplay = true;

function pausePlay() {
  if (video.paused) {
    video.play();
    playButton.innerHTML = '⏸';
  } else {
    video.pause();
    playButton.innerHTML = '►';
  }
}

if (video.autoplay) {
  playButton.innerHTML = '⏸';
}

video.addEventListener('timeupdate', function() {
  progressFilled.style.width = (this.currentTime * 100 / this.duration) + '%';
  progressFilled.style.flexBasis = (this.currentTime * 100 / this.duration) + '%';
});

progress.addEventListener('mouseup', function(e) {
  video.currentTime = e.layerX / progress.scrollWidth * video.duration;
});

prevButton.addEventListener('click', function() {
  video.currentTime += -10;
});

nextButton.addEventListener('click', function() {
  video.currentTime += 25;
});

video.addEventListener('click', pausePlay)
playButton.addEventListener('click', pausePlay);

playerSliders.forEach(slider => slider.oninput = () => video[slider.name] = slider.value);
