import React from 'react';
import useAnimation from '../hooks/useAnimation';
import {
    Animated,
    ActivityIndicator,
    View,
    StyleProp,
    ImageStyle,
} from 'react-native';
import { useState } from 'react';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export default function FadeInImage({ uri, style }: Props) {
    const { opacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    };

    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            {isLoading && (
                <ActivityIndicator
                    style={{
                        position: 'absolute',
                    }}
                    color="white"
                    size={30}
                />
            )}

            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}
                style={{
                    ...(style as any),
                    // width: '100%',
                    // height: 400,
                    opacity,
                }}
            />
        </View>
    );
}