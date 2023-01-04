import { createContext, useReducer } from 'react';
import { LigthTheme, ThemeState, themeReducer } from './themeReducer';

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLigthTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

// el proovedor del themeContext
export const ThemeProvider = ({ children }: any) => {
    const [theme, dispatch] = useReducer(themeReducer, LigthTheme); // Leer todo el tema GLOBAL

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
