import { FlatList, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MenuItem } from '../interfaces/appInterfaces';
import FlatListMenuItem from '../components/FlatListMenuItem';

const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animations01',
    },
    {
        name: 'Animation 102',
        icon: 'cube-outline',
        component: 'Animations02',
    },
];

export default function HomeScreen() {
    const { top } = useSafeAreaInsets();

    const renderListHeader = () => {
        return (
            <View style={{ marginTop: top + 20, marginBottom: 20 }}>
                <Text style={styles.title}> Opciones de menu </Text>
            </View>
        );
    };

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
                ListHeaderComponent={renderListHeader}
                ItemSeparatorComponent={separator}
            />
        </View>
    );
}
