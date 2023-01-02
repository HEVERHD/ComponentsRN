import { StyleSheet, View } from 'react-native';
import React from 'react';

export default function Animation102() {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.purpleBox} />
        </View>
    );
}

const styles = StyleSheet.create({
    purpleBox: {
        backgroundColor: 'red',
        width: 150,
        height: 150,
    },
});
