/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


import messaging from '@react-native-firebase/messaging';
import { displayNotification } from './src/notification/notificationInitials';

async function onMessageReceived(message) {
    console.log(message)
    const { title, imageUrl, description } = message.data;
    await displayNotification(title, description, imageUrl, 'fcm-message')
}

messaging().onMessage(onMessageReceived)
messaging().setBackgroundMessageHandler(onMessageReceived)

AppRegistry.registerComponent(appName, () => App);
