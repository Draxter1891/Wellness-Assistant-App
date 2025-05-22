import {StyleSheet, Text, View, Animated} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Colors} from '../utils/Constants';
import Background from '../components/baymax/Background';
import Loading from '../components/baymax/Loading';
import BigHero6 from '../components/baymax/BigHero6';
import {playTTS} from '../utils/ttsListners';
import SoundPlayer from 'react-native-sound-player';
import {playSound} from '../utils/voiceUtils';
import {prompt} from '../utils/data';
import Instructions from '../components/baymax/Instructions';
import Pedometer from '../components/pedometer/Pedometer';
import {askAI} from '../service/GeminiService';

const BaymaxScreen = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [message, setMessage] = useState('');
  const [showPedometer, setShowPedometer] = useState(false);

  const blurOpacity = useRef(new Animated.Value(0)).current;

  const startBlur = () => {
    Animated.timing(blurOpacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const unBlur = () => {
    Animated.timing(blurOpacity, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    const timer = setTimeout(startBlur, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleError = (err: string) => {
    playTTS('There was an error! please try again');
    startBlur();
    setMessage('');
    setShowLoader(true);
    SoundPlayer.stop();
    setShowInstructions(false);
    console.log(err);
  };
  const handleResponse = async (
    type: string,
    promptText: string,
    sound: string,
  ) => {
    setShowLoader(true);
    try {
      if (type === 'meditation') {
        playTTS('Focus on your breath!');
        playSound(sound);
        setMessage('meditation');
        return;
      }

      const data = await askAI(promptText);
      setMessage(data);
      playTTS(data);
      if (type === 'happiness') {
        setTimeout(() => {
          playSound(sound);
        }, 5000);
      } else {
        playSound(sound);
      }
      unBlur();
    } catch (error: any) {
      handleError(error);
    } finally {
      setShowLoader(false);
    }
  };
  const onOptionPressHandler = (type: string) => {
    setShowInstructions(true);
    if (type === 'pedometer') {
      setShowPedometer(true);
      setShowLoader(false);
      return;
    }
    switch (type) {
      case 'happiness':
        handleResponse(type, prompt.joke, 'laugh');
        break;
      case 'motivation':
        handleResponse(type, prompt.motivation, 'motivation');
        break;
      case 'health':
        handleResponse(type, prompt.health, 'meditation');
        break;
      case 'meditation':
        handleResponse(type, prompt.joke, 'meditation');
        break;
      default:
        handleError('There was no type like that');
        break;
    }
  };
  return (
    <View style={styles.container}>
      {message && (
        <Instructions
          onCross={() => {
            startBlur();
            setMessage('');
            setShowLoader(true);
            SoundPlayer.stop();
            setShowInstructions(false);
          }}
          message={message}
        />
      )}
      {showPedometer && (
        <Pedometer
          onCross={() => {
            startBlur();
            setMessage('');
            setShowLoader(true);
            setShowPedometer(false);
            SoundPlayer.stop();
            setShowInstructions(false);
          }}
          message={message}
        />
      )}

      {showLoader && (
        <View style={styles.loaderContainer}>
          <Loading />
        </View>
      )}

      {!showInstructions && (
        // onOptionPressHandler
        <BigHero6 onPress={onOptionPressHandler} />
      )}
      <Background blurOpacity={blurOpacity} />
    </View>
  );
};

export default BaymaxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondry,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    position: 'absolute',
    zIndex: 2,
  },
});
