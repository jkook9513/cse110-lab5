// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.getElementById('horn-image');
  const hornAudio = document.getElementById('horn-audio');
  const hornVolume = document.getElementById('volume');
  const playButton = document.querySelector('button');

  hornSelect.addEventListener('change', function() {
    const selectedHorn = hornSelect.value;
    hornImage.src = `assets/images/${selectedHorn}.svg`;
    hornAudio.src = `assets/audio/${selectedHorn}.mp3`;
  });

  hornVolume.addEventListener('input', function() {
    const volumeValue = hornVolume.value;
    const volumeIcon = document.getElementById('volume-icon');

    if(volumeValue == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if(volumeValue < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if(volumeValue < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
    hornAudio.volume = volumeValue / 100;
  });

  playButton.addEventListener('click', function() {
    const selectedHorn = hornSelect.value;
    if (selectedHorn === 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
    hornAudio.play();
  });
  
}