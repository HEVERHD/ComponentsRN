import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigation/Navigator';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

export default function App() {
    return (
        <AppState>
            <Navigator />
        </AppState>
    );
}

const AppState = ({ children }: any) => {
    return <ThemeProvider>{children}</ThemeProvider>;
};
