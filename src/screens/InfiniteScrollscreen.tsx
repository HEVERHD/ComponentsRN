import {
    FlatList,
    View,
    StyleSheet,
    ActivityIndicator,
    Image,
} from 'react-native';
import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { useState } from 'react';
import FadeInImage from '../components/FadeInImage';

export default function InfiniteScrollscreen() {
    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

    const loadMore = () => {
        const newArray: number[] = [];
        for (let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i;
        }
        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 1500);
    };

    const renderItem = (item: number) => {
        return (
            <>
                {/* <Image
                    source={{ uri: `https://picsum.photos/id/${item}/500/400` }}
                    style={{
                        width: '100%',
                        height: 400,
                    }}
                /> */}

                <FadeInImage
                    uri={`https://picsum.photos/id/${item}/500/400`}
                    style={{
                        width: '100%',
                        height: 400,
                    }}
                />
            </>
        );
    };

    return (
        <View>
            <FlatList
                ListHeaderComponent={() => (
                    <View
                        style={{
                            marginHorizontal: 20,
                        }}>
                        <HeaderTitle title="Infinite Scroll" />
                    </View>
                )}
                data={numbers}
                keyExtractor={item => item.toString()}
                renderItem={({ item }) => renderItem(item)}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={() => (
                    <View
                        style={{
                            height: 150,
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <ActivityIndicator size={20} color="white" />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textItem: {
        height: 150,
        color: 'white',
    },
});
