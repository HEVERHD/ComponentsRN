import { Theme } from '@react-navigation/native';

type ThemeAction = { type: 'setLigth_theme' } | { type: 'setDark_theme' };

export interface ThemeState extends Theme {
    currentTheme: 'ligth' | 'dark';
    dividerColor: string;
}

export const LigthTheme: ThemeState = {
    currentTheme: 'ligth',
    dark: false,
    dividerColor: 'rgba(0,0,0,0.7)',
    colors: {
        primary: '#084F6A',
        background: 'white',
        card: 'green',
        text: 'black',
        border: 'rgba(0,0,0,0.7)',
        notification: 'teal',
    },
};

export const DarkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: '#acacacb2',
    colors: {
        primary: '#208d9e',
        background: 'black',
        card: 'green',
        text: 'white',
        border: '#acacacb2',
        notification: 'teal',
    },
};

export const themeReducer = (
    state: ThemeState,
    action: ThemeAction,
): ThemeState => {
    switch (action.type) {
        case 'setLigth_theme':
            return { ...LigthTheme };

        case 'setDark_theme':
            return { ...DarkTheme };

        default:
            return state;
    }
};
