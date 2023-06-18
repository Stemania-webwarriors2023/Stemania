let video = document.querySelector('#video-player');
let playButton = document.querySelector('#play-button');
let nextButton = document.querySelector('#next-button');
let answerOptions = document.querySelector('#answer-options');
let dropdownButton = document.getElementById("dropdown-btn"); 

nextButton.style.display = 'none';

playButton.addEventListener('click', function() {
  video.play();
});

answerOptions.addEventListener('click', function(event) {
  if (event.target.tagName === 'INPUT') {
    let selectedValue = event.target.value;
    let isCorrectAnswer = selectedValue === 'value-3';
    let resultClass = isCorrectAnswer ? '.result.success' : '.result.error';
    let nextVideo;

    if (selectedValue === 'value-2' || selectedValue === 'value-4') {
      nextVideo = 'ani/uncon1X+.mp4';
    } else if (selectedValue === 'value-1') {
      nextVideo = 'ani/uncon1X-.mp4';
    } else {
      nextVideo = 'ani/uncon1O.mp4';
    }

    video.src = nextVideo;
    document.querySelector(resultClass).style.display = 'flex';

    video.onended = function() {
      event.target.checked = false;
      document.querySelector(resultClass).style.display = 'none';
      if (isCorrectAnswer) {
        nextButton.style.display = 'block';
      } else {
        video.src = 'ani/uncon1.mp4';
        video.play();
      }
    };

    video.addEventListener('loadedmetadata', function() {
      video.play();
    });
  }
});

nextButton.addEventListener('click', function() {
  window.location.href = 'con2.html';
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

function skipOverlay() {
  var overlay = document.querySelector('.overlay-hint');
  var skipButton = document.querySelector('.skip-button');
  
  overlay.style.display = 'none';
  skipButton.style.display = 'none';
}