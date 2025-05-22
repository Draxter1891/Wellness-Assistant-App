import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import { navigationRef } from '../utils/NavigationUtils';
import BaymaxScreen from '../screens/BaymaxScreen';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="BaymaxScreen" component={BaymaxScreen} options={{animation:'fade_from_bottom',animationDuration: 2000}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
