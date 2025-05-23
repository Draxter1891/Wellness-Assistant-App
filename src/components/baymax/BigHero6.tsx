import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect, useRef} from 'react';
import {screenHeight, screenWidth} from '../../utils/Scaling';
import {bigHero6Data} from '../../utils/data';
import Water from '../options/Water';
import OptionItem from '../options/OptionItem';

const BigHero6: FC<{onPress: (type: string) => void}> = ({onPress}) => {

    const animatedValues = useRef(
        [...Array(6)].map(()=> new Animated.Value(0))
    ).current

    useEffect(()=>{
        //using stagger animation because we want our eliment to be animated one by one.
        Animated.stagger(100,
            animatedValues.map((animatedValues,index)=>
                Animated.timing(animatedValues,{
                        toValue:1,
                        duration:1000,
                        useNativeDriver:true,
                        delay: index * 200
                    })
            )).start()
    },[])

  return (
    <View style={styles.circle}>
      {bigHero6Data.map((item, index) => {
        const angle = (index / 6) * 2 * Math.PI;
        const x = screenWidth*0.38 * Math.cos(angle);
        const y = screenWidth*0.38 * Math.sin(angle);

        const translateX = animatedValues[index].interpolate({
            inputRange: [0,1],
            outputRange:[0,x]
        })
        const translateY = animatedValues[index].interpolate({
            inputRange: [0,1],
            outputRange:[0,y]
        })
        return (
          <Animated.View key={index} style={[
            styles.item, {
                transform:[
                    {translateX},
                    {translateY}
                ]
            }
          ]}>
            {item!=='water' && <OptionItem onPress={onPress} item={item}/>}
            {item === 'water' && <Water/>}
          </Animated.View>
        );
      })}
    </View>
  );
};

export default BigHero6;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    zIndex: 3,
    width: screenWidth * 0.8,
    height: screenHeight * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  item: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 500,
  },
});
