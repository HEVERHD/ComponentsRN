import { createContext, useReducer, useEffect } from 'react';
import {
    DarkTheme,
    LigthTheme,
    ThemeState,
    themeReducer,
} from './themeReducer';
import { AppState, Appearance, useColorScheme } from 'react-native';

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLigthTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

// el proovedor del themeContext
export const ThemeProvider = ({ children }: any) => {
    const colorScheme = useColorScheme();

    const [theme, dispatch] = useReducer(
        themeReducer,
        colorScheme === 'dark' ? DarkTheme : LigthTheme,
    ); // Leer todo el tema GLOBAL

    // useEffect(() => {
    //     colorScheme === 'light' ? setLigthTheme() : setDarkTheme;
    // }, [colorScheme]);

    useEffect(() => {
        AppState.addEventListener('change', status => {
            if (status === 'active') {
                Appearance.getColorScheme() === 'light'
                    ? setLigthTheme()
                    : setDarkTheme;
            }
        });
    }, []);

    const setDarkTheme = () => {
        dispatch({ type: 'setDark_theme' });
    };
    const setLigthTheme = () => {
        dispatch({ type: 'setLigth_theme' });
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setDarkTheme,
                setLigthTheme,
            }}>
            {children}
        </ThemeContext.Provider>
    );
};
