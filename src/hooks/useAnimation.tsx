import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export default function useAnimation() {
    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start(() => console.log('esta animacion termino'));
    };

    const startPosition = (initPosition: number, duration: number = 300) => {
        position.setValue(initPosition);
        Animated.timing(position, {
            toValue: 0,
            duration,
            useNativeDriver: true,
            easing: Easing.bounce,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    return {
        opacity,
        startPosition,
        position,
        fadeIn,
        fadeOut,
    };
}
