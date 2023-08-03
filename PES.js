const audioPlayer = document.getElementById("audio-player");
const playPauseIcon = document.getElementById("play-pause-icon");

function toggleAudio() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseIcon.classList.remove("bi-play-fill");
    playPauseIcon.classList.add("bi-pause-fill");
  } else {
    audioPlayer.pause();
    playPauseIcon.classList.remove("bi-pause-fill");
    playPauseIcon.classList.add("bi-play-fill");
  }
}
