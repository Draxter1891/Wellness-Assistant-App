import {
  Platform,
  StatusBar,
  StyleSheet
} from 'react-native';
import React, {useEffect} from 'react';

import Navigation from './src/navigation/Navigation';
import {
  batteryOptimizationCheck,
  powerManagerCheck,
  requestPermission,
} from './src/notification/notificationPermission';

import './src/notification/notificationListener';
import {regesteringAllTriggers} from './src/notification/registerTriggers';
import {setCategories} from './src/notification/notificationInitials';




const App = () => {
  const permissionChecks = async () => {
    requestPermission();
    regesteringAllTriggers();
    setCategories();
    if (Platform.OS === 'android') {   
      batteryOptimizationCheck();
      powerManagerCheck();
    }
  };

  useEffect(() => {
    permissionChecks();
  }, []);
  return (
    <>
      <StatusBar hidden />
      <Navigation />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
