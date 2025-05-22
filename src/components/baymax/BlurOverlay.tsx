import React, { FC } from 'react';
import { Animated, StyleSheet, Platform } from 'react-native';
import { BlurView } from '@react-native-community/blur';

const BlurOverlay: FC<{ opacity: Animated.Value }> = ({ opacity }) => {
  if (Platform.OS === 'ios') {
    return (
      <Animated.View style={[styles.absoluteFillObject, { opacity }]}>
        <BlurView 
          reducedTransparencyFallbackColor='white'
          style={styles.absoluteFillObject}
          blurType="ultraThinMaterial"
          blurAmount={2}
        />
      </Animated.View>
    );
  } else {
    // Android fake blur with opacity: because BlurView package is not working properly - App crash
    return (
      <Animated.View 
        style={[
          styles.absoluteFillObject, 
          { backgroundColor: 'rgba(146, 146, 146, 0.83)', opacity }
        ]}
      />
    );
  }
};

export default BlurOverlay;

const styles = StyleSheet.create({
  absoluteFillObject: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
