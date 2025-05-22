import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';
import {usePedometerStore} from '../../state/pedometerStore';
import StepCounter, {
  parseStepData,
  startStepCounterUpdate,
  stopStepCounterUpdate,
} from '@dongminyu/react-native-step-counter';
import {playTTS} from '../../utils/ttsListners';
import CircularProgress from 'react-native-circular-progress-indicator';
import { Colors, Fonts } from '../../utils/Constants';
import CustomText from '../global/CustomText';

const Pedometer: FC<{
  message: string;
  onCross: () => void;
}> = ({message, onCross}) => {
  const {stepCount, dailyGoal, addSteps} = usePedometerStore();

  StepCounter.addListener('StepCounter.stepsSensorInfo');

  const startStepConter = () => {
    startStepCounterUpdate(new Date(), data => {
      const parsedData = parseStepData(data);
      addSteps(parsedData.steps, parsedData.distance);
    });
  };

  const stopStepCounter = () => {
    stopStepCounterUpdate();
  };

  useEffect(() => {
    if (stepCount >= dailyGoal) {
      playTTS(
        "You've met your daily goal. No need to start the counter again today.",
      );
    } else {
      startStepConter();
    }

    // unmounting for cleanup
    return () => {
      stopStepCounter();
    };
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cross}
        onPress={() => {
          Alert.alert('Your Step Counter Stopped!');
          stopStepCounter();
          onCross();
        }}>
        <Icon name="close-circle" color="red" size={RFValue(20)} />
      </TouchableOpacity>
      <Image
        source={require('../../assets/images/logo_short.png')}
        style={styles.logo}
      />

      <View style={styles.indicator}>
        <CircularProgress
          value={stepCount}
          maxValue={dailyGoal}
          valueSuffix='/8000'
          progressValueFontSize={RFValue(22)}
          radius={120}
          activeStrokeColor={ Colors.secondry}
          inActiveStrokeColor='#4c6394'
          inActiveStrokeOpacity={0.5}
          inActiveStrokeWidth={20}
          activeStrokeWidth={20}
          title='Steps'
          titleColor='#555'
          titleFontSize={RFValue(22)}
          titleStyle={{fontFamily: Fonts.SemiBold}}

        />
        <CustomText fontSize={RFValue(8)} fontFamily={Fonts.SemiBold} style={styles.text}>
          Start Walking, counter will update automatically
        </CustomText>
      </View>
    </View>
  );
};

export default Pedometer;

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    paddingVertical: 10,
    width: '90%',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 10,
    shadowColor: '#000',
    borderRadius: 20,
  },
  logo: {
    width: 50,
    height: 40,
    alignSelf: 'center',
    marginVertical: 10,
  },
  cross: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  indicator: {
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    marginTop: 20,
    justifyContent: 'center'
  }
});
