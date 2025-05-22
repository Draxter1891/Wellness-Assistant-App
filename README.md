# Baymax 🩺

**Baymax** is a health and wellness-focused React Native CLI app that acts like a personal assistant—providing hydration reminders, pedometer tracking, motivational jokes, medical advice, and more—all powered by **Text-to-Speech (TTS)** for a hands-free experience.

This app is built using [**React Native CLI**](https://reactnative.dev), with features integrated through powerful libraries and APIs to enhance user interaction and wellness.

---

## 🚀 Features

- 🔔 **Push Notifications**: Receive timely reminders and alerts for hydration and wellness.
- 💧 **Water Hydration Tracker**: Stay on top of your daily water intake goals.
- 🚶‍♂️ **Pedometer**: Track your daily step count to keep moving and stay active.
- 😂 **Jokes Generator**: Get random, fun jokes to brighten your day.
- 🩺 **Medical Advice**: Receive helpful medical insights and health tips.
- 🕑 **Hydration Reminders**: Automatically notifies users to stay hydrated throughout the day.
- 🗣️ **Text-to-Speech Integration**: Every interaction is voiced out for accessibility and a hands-free experience.

---

## 📦 Packages Used

Below is the list of all the key packages and libraries used in the development of **Baymax**:

- `@dongminyu/react-native-step-counter` – Step counting and pedometer functionality.
- `@google/generative-ai` – AI integration for generating content and medical suggestions.
- `@notifee/react-native` – Advanced local notification handling.
- `@react-native-community/blur` – Blur view effects for enhanced UI.
- `@react-native-firebase/app` – Firebase core setup.
- `@react-native-firebase/messaging` – Push notifications via Firebase Cloud Messaging (FCM).
- `@react-navigation/native` – Navigation container for routing.
- `@react-navigation/native-stack` – Native stack navigator.
- `axios` – HTTP client for API requests.
- `lottie-react-native` – Smooth and attractive animations.
- `react` – Core React library.
- `react-native` – Core React Native framework.
- `react-native-circular-progress-indicator` – Circular progress indicator for hydration progress or step goals.
- `react-native-gesture-handler` – Gesture handling for interactive components.
- `react-native-linear-gradient` – Linear gradient backgrounds and designs.
- `react-native-markdown-display` – Display formatted markdown content (e.g., advice).
- `react-native-mmkv` – Super fast key-value storage.
- `react-native-reanimated` – Advanced animations and transitions.
- `react-native-responsive-fontsize` – Font scaling across different screen sizes.
- `react-native-safe-area-context` – Handle safe area padding for all devices.
- `react-native-screens` – Native screen optimizations.
- `react-native-sound-player` – Play audio notifications and effects.
- `react-native-svg` – SVG rendering for graphics and charts.
- `react-native-svg-transformer` – Use `.svg` files as React components.
- `react-native-tts` – Text-to-speech integration.
- `react-native-vector-icons` – Icon support across platforms.
- `zustand` – Lightweight state management.

---



# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
