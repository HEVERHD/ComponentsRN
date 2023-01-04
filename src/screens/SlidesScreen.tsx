import {
    Animated,
    Dimensions,
    Image,
    ImageSourcePropType,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { StyleSheet } from 'react-native';
import { useState, useContext } from 'react';
// import { Icon } from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import useAnimation from '../hooks/useAnimation';
import { StackScreenProps } from '@react-navigation/stack';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType;
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png'),
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png'),
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png'),
    },
];

interface Props extends StackScreenProps<any, any> {}

export default function SlidesScreen({ navigation }: Props) {
    const {
        theme: { colors },
    } = useContext(ThemeContext);

    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const { opacity, fadeIn } = useAnimation();

    const renderItem = (item: Slide) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: colors.background,
                    borderRadius: 5,
                    padding: 5,
                    justifyContent: 'center',
                }}>
                <Image
                    source={item.img}
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center',
                    }}
                />
                <Text style={{ ...styles.title, color: colors.primary }}>
                    {item.title}
                </Text>
                <Text style={{ ...styles.description, color: colors.primary }}>
                    {item.desc}
                </Text>
            </View>
        );
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                // backgroundColor: 'red',
                paddingTop: 50,
                marginBottom: 20,
            }}>
            <Carousel
                // ref={c => {
                //     this._carousel = c;
                // }}
                data={items}
                renderItem={({ item }) => renderItem(item)}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                layout="default"
                onSnapToItem={index => {
                    setActiveIndex(index);
                    if (index === 2) {
                        fadeIn();
                        setIsVisible(true);
                    }
                }}
            />
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                    alignItems: 'center',
                }}>
                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                    dotStyle={{
                        width: 40,
                        backgroundColor: colors.primary,
                    }}
                />

                {isVisible && (
                    <Animated.View
                        style={{
                            opacity,
                        }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                backgroundColor: colors.background,
                                width: 100,
                                height: 30,
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            activeOpacity={0.8}
                            onPress={() => {
                                navigation.navigate('HomeScreen');
                            }}>
                            <Text
                                style={{
                                    fontSize: 15,
                                    color: colors.primary,
                                }}>
                                Ir al menu
                            </Text>
                            <Icon
                                name="chevron-forward-outline"
                                size={20}
                                color={colors.primary}
                            />
                        </TouchableOpacity>
                    </Animated.View>
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856D6',
    },
    description: {
        fontSize: 16,
    },
});
