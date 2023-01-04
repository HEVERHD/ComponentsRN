import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export default function SwitchScreen() {
    const {
        theme: { colors },
    } = useContext(ThemeContext);
    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    });

    const { isActive, isHappy, isHungry } = state;

    const onChange = (value: boolean, field: string) => {
        setState({
            ...state,
            [field]: value,
        });
    };

    return (
        <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title="Switches" />

            <View style={styles.switchRow}>
                <Text style={{ ...styles.switchText, color: colors.primary }}>
                    isActive
                </Text>
                <CustomSwitch
                    isOn={isActive}
                    onChange={value => onChange(value, 'isActive')}
                />
            </View>

            <View style={styles.switchRow}>
                <Text style={{ ...styles.switchText, color: colors.primary }}>
                    isHungry
                </Text>
                <CustomSwitch
                    isOn={isHungry}
                    onChange={value => onChange(value, 'isHungry')}
                />
            </View>

            <View style={styles.switchRow}>
                <Text style={{ ...styles.switchText, color: colors.primary }}>
                    isHappy
                </Text>
                <CustomSwitch
                    isOn={isHappy}
                    onChange={value => onChange(value, 'isHappy')}
                />
            </View>

            <Text style={{ ...styles.switchText, color: colors.primary }}>
                {JSON.stringify(state, null, 5)}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        marginVertical: 5,
    },
    switchText: {
        fontSize: 25,
    },
});
