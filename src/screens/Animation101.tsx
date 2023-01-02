import React from 'react';
import { StyleSheet, View, Animated, Button } from 'react-native';
import useAnimation from '../hooks/useAnimation';

export default function Animation101() {
    const { fadeIn, fadeOut, opacity, startPosition, position } =
        useAnimation();

    return (
        <View style={styles.conatiner}>
            <Animated.View
                style={{
                    ...styles.purpleBox,
                    opacity,
                    transform: [
                        {
                            translateY: position,
                        },
                    ],
                }}
            />

            <Button
                title="FadeIn"
                onPress={() => {
                    fadeIn();
                    startPosition(100);
                }}
            />
            <Button title="FadeOut" onPress={fadeOut} />
        </View>
    );
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox: {
        backgroundColor: '#5056D6',
        width: 150,
        height: 150,
    },
});
