let video = document.querySelector('#video-player');
let blackOverlay = document.getElementById('black-overlay');
let overlayVideo = document.getElementById('overlay-vid');
let playButton = document.querySelector('#play-button');
let answerOptions = document.querySelector('#answer-options');
let dropdownButton = document.getElementById('dropdown-btn');
let overlayButton = document.getElementById('overlay-button');
let closeOverlayButton = document.getElementById('close-overlay');
let desktopVideoSrc = 'ani/pythC.mp4';
let mobileVideoSrc = 'ani/pythCmob.mp4';

playButton.addEventListener('click', function() {
  video.play();
});

answerOptions.addEventListener('click', function(event) {
  if (event.target.tagName === 'INPUT') {
    let isCorrectAnswer = event.target.value === 'value-2';
    let resultClass = isCorrectAnswer ? '.result.success' : '.result.error';
    let nextVideo = isCorrectAnswer ? 'ani/pyth5O.mp4' : 'ani/pyth5X.mp4';

    video.src = nextVideo;
    document.querySelector(resultClass).style.display = 'flex';

    video.onended = function() {
      event.target.checked = false;
      document.querySelector(resultClass).style.display = 'none';
      if (!isCorrectAnswer) {
        video.src = 'ani/pyth5.mp4';
        video.play();
      } else {
        setTimeout(function() {
          blackOverlay.style.display = 'block';
          overlayVideo.play();
        }, 1000);
      }
    };

    video.addEventListener('loadedmetadata', function() {
      video.play();
    });
  }
});


overlayVideo.addEventListener('ended', function() {
  blackOverlay.style.display = 'block';
  overlayButton.style.display = 'block';
});


overlayButton.addEventListener('click', function() {
  window.location.href = 'category.html';
});

closeOverlayButton.addEventListener('click', function() {
  blackOverlay.style.display = 'none';
});

function updateOverlayVideoSource() {
  if (window.matchMedia('(min-width: 768px)').matches) {
    overlayVideo.src = desktopVideoSrc;
  } else {
    overlayVideo.src = mobileVideoSrc;
  }
}


updateOverlayVideoSource();

window.addEventListener('resize', updateOverlayVideoSource);


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
