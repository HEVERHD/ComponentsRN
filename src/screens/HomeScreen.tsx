import { FlatList, Text, View } from 'react-native';
import React from 'react';
import { styles } from '../theme/appTheme';
import FlatListMenuItem from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle';

export default function HomeScreen() {
    const separator = () => {
        return (
            <View
                style={{
                    borderBottomWidth: 1,
                    opacity: 0.3,
                    marginVertical: 7,
                }}
            />
        );
    };

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>
            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={item => item.name}
                ListHeaderComponent={() => (
                    <HeaderTitle title="Opciones de menu" />
                )}
                ItemSeparatorComponent={separator}
            />
        </View>
    );
}
