import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { styles } from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export default function ChangeThemeScreen() {
    const {
        setDarkTheme,
        setLigthTheme,
        theme: { colors },
    } = useContext(ThemeContext);

    return (
        <View style={{ ...styles.globalMargin }}>
            <HeaderTitle title="Cambiar tema" />
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                    onPress={setLigthTheme}
                    activeOpacity={0.8}
                    style={{
                        width: 150,
                        height: 40,
                        borderRadius: 20,
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 22,
                        }}>
                        {' '}
                        Ligth
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={setDarkTheme}
                    activeOpacity={0.8}
                    style={{
                        width: 150,
                        height: 40,
                        borderRadius: 20,
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 22,
                        }}>
                        {' '}
                        Dark
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
