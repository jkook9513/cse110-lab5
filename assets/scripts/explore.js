// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelector = document.getElementById('voice-select');
  let voices = [];
  const textbox = document.getElementById('text-to-speak');
  let text = '';
  const talkButton = document.querySelector('button');
  const image = document.querySelector('img');

  function populateVoiceList() {
    voices = synth.getVoices();

    for(let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelector.appendChild(option);
    }
  }
  populateVoiceList();

  if(speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  textbox.addEventListener('input', (event) => {
    text = event.target.value;
  });

  talkButton.addEventListener('click', (event) => {
    event.preventDefault();
    const utterThis = new SpeechSynthesisUtterance(text);
    const selectedOption = voiceSelector.selectedOptions[0].getAttribute('data-name');

    for(let i = 0; i < voices.length; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    utterThis.onstart = function() {
      image.src = 'assets/images/smiling-open.png';
    }
    utterThis.onend = function() {
      image.src = 'assets/images/smiling.png';
    }
    synth.speak(utterThis);
  });
  
}