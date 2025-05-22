import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Colors, Fonts, lightColors} from '../utils/Constants';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {screenHeight, screenWidth} from '../utils/Scaling';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '../components/global/CustomText';
import LottieView from 'lottie-react-native';
import {initializeTtsListeners, playTTS} from '../utils/ttsListners';
import {resetAndNavigate} from '../utils/NavigationUtils';
import { playSound } from '../utils/voiceUtils';

const bottomColors = lightColors.reverse();
const SplashScreen = () => {
  //initially at the bottom of the screen
  const BaymaxAnimation = useSharedValue(screenHeight * 0.8);
  const msgContainerAnimation = useSharedValue(screenHeight * 0.8);

  const animateImgStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: withTiming(BaymaxAnimation.value, {duration: 1500})},
      ],
    };
  });
  const msgContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: withTiming(msgContainerAnimation.value, {duration: 1200})},
      ],
    };
  });

  const launchAnimation = async () => {
    msgContainerAnimation.value = screenHeight * 0.001;
    playSound('ting2');
    setTimeout(() => {
      BaymaxAnimation.value = -screenHeight * 0.02;
      playTTS('Radhe Radhe. Lets get started!');
    }, 500);

    setTimeout(() => {
      resetAndNavigate('BaymaxScreen');
    }, 4000);
  };

  useEffect(() => {
    initializeTtsListeners();
    launchAnimation();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.imageContainer, animateImgStyle]}>
        <Image
          source={require('../assets/images/launch.png')}
          style={styles.img}
        />
      </Animated.View>
      <Animated.View style={[styles.gradientContainer, msgContainerStyle]}>
        <LinearGradient colors={bottomColors} style={styles.gradient}>
          <View style={styles.textContainer}>
            <CustomText fontSize={34} fontFamily={Fonts.Theme}>
              RishX.
            </CustomText>
            <LottieView
              source={require('../assets/animations/sync.json')}
              style={{width: 280, height: 100}}
              autoPlay={true}
              loop
            />
            <CustomText>Synchronizing best configuration for you...</CustomText>
          </View>
        </LinearGradient>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  imageContainer: {
    width: screenWidth - 20,
    height: screenHeight * 0.5,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  gradientContainer: {
    position: 'absolute',
    height: '35%',
    bottom: 0,
    width: '100%',
  },
  gradient: {
    width: '100%',
    height: '100%',
    paddingTop: 30,
  },
  textContainer: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 20,
    padding: 20,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
    alignItems: 'center',
    shadowColor: Colors.border,
  },
});
