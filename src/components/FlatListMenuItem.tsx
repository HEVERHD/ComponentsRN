import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface Props {
    menuItem: MenuItem;
}

export default function FlatListMenuItem({ menuItem }: Props) {
    const navigation = useNavigation<any>();

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate(menuItem.component)}>
            <View style={styles.container}>
                <Icon name={menuItem.icon} size={25} color="#5856D6" />

                <Text style={styles.textItem}>{menuItem.name}</Text>

                <View style={{ flex: 1 }} />

                <Icon
                    name="chevron-forward-outline"
                    size={25}
                    color="#5856D6"
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    textItem: {
        marginLeft: 5,
        fontSize: 19,
        fontWeight: 'bold',
    },
});
