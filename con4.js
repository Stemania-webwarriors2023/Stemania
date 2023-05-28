let video = document.querySelector('#video-player');
let playButton = document.querySelector('#play-button');
let answerOptions = document.querySelector('#answer-options');
let dropdownButton = document.getElementById("dropdown-btn");

playButton.addEventListener('click', function() {
  video.play();
});

answerOptions.addEventListener('click', function(event) {
  if (event.target.tagName === 'INPUT') {
    let isCorrectAnswer = event.target.value === 'value-4';
    let resultClass = isCorrectAnswer ? '.result.success' : '.result.error';
    let nextVideo = isCorrectAnswer ? 'ani/uncon4O.mp4' : 'ani/uncon4X.mp4';

    video.src = nextVideo;
    document.querySelector(resultClass).style.display = 'flex';

    video.onended = function() {
      event.target.checked = false;
      document.querySelector(resultClass).style.display = 'none';
      if (!isCorrectAnswer) {
        video.src = 'ani/uncon4.mp4';
        video.play();
      }
    };

    video.addEventListener('loadedmetadata', function() {
      video.play();
    });
  }
});

var soundEnabled = true;
var soundButton = document.getElementById("soundButton");
var soundIcon = document.getElementById("soundIcon");

function toggleSound() {
  soundEnabled = !soundEnabled;

  if (soundEnabled) {
    soundButton.classList.remove("sound-off");
    soundButton.classList.add("sound-on");
    soundIcon.innerHTML = "";
    video.muted = false;
  } else {
    soundButton.classList.remove("sound-on");
    soundButton.classList.add("sound-off");
    soundIcon.innerHTML = "";
    video.muted = true;
  }
}

var dropdownList = document.getElementById("dropdown-list");

function toggleDropdown() {
  dropdownList.classList.toggle("open");
  dropdownButton.classList.toggle("open");
}

document.addEventListener("click", function(event) {
  var targetElement = event.target;
  if (targetElement.id !== "dropdown-btn" && !targetElement.closest("#dropdown-list")) {
    dropdownList.classList.remove("open");
    dropdownButton.classList.remove("open");
  }
});

function openVideoPopup(videoUrl) {
  var videoPopupOverlay = document.getElementById('video-popup-overlay');
  var videoPopupPlayer = document.getElementById('video-popup-player');
  videoPopupPlayer.src = videoUrl;
  videoPopupOverlay.classList.add('show');
}

function closeVideoPopup() {
  var videoPopupOverlay = document.getElementById('video-popup-overlay');
  var videoPopupPlayer = document.getElementById('video-popup-player');
  videoPopupPlayer.pause();
  videoPopupPlayer.currentTime = 0;
  videoPopupOverlay.classList.remove('show');
}

function toggleDropdown() {
  var dropdownList = document.getElementById('dropdown-list');
  dropdownList.classList.toggle('open');
}

function goBack() { window.history.back(); } 
