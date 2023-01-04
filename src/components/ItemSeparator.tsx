import { View } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ItemSeparator = () => {
    const {
        theme: { colors },
    } = useContext(ThemeContext);

    return (
        <View
            style={{
                borderBottomWidth: 1,
                opacity: 0.3,
                marginVertical: 7,
                borderColor: colors.border,
            }}
        />
    );
};
