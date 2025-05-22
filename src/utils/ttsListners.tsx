import Tts from 'react-native-tts';

export const initializeTtsListeners = async () => {
  Tts.getInitStatus().then(
    () => {
      console.log('ALL OK TTS✅');
    },
    err => {
      if (err.code === 'no_engine') {
        console.log('NO ENGINE FOR TTS⬇️');

        Tts.requestInstallEngine();
      }
    },
  );

  //Tts.setDefaults
  const voices = await Tts.voices();
  console.log(voices);
  Tts.setDefaultVoice('en-in-x-ene-network');
  Tts.setDefaultRate(0.8, true);
  Tts.setIgnoreSilentSwitch('ignore');
  Tts.setDefaultPitch(0.6);
  Tts.addEventListener('tts-start', event => {
    console.log('TTS Started: ', event);
  });
  Tts.addEventListener('tts-progress', event => {
    // console.log('TTS Progress: ', event);
  });
  Tts.addEventListener('tts-finish', event => {
    console.log('TTS Finish: ', event);
  });
  Tts.addEventListener('tts-cancel', event => {
    console.log('TTS Cancel: ', event);
  });
};

export const playTTS = async (message: string) => {
  Tts.getInitStatus().then(
    () => {
      console.log('ALL OK TTS✅');
    },
    err => {
      if (err.code === 'no_engine') {
        console.log('NO ENGINE FOR TTS⬇️');

        Tts.requestInstallEngine();
      }
    },
  );

  Tts.speak(message);
};
