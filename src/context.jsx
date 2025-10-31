import { useContext, createContext, useState, Children } from 'react';

export const AppContext = createContext();

export const AppProvider = (Children) => {
    const [isDarkTheme, setIsDarkTheme] = useState();

    const toggleTheme = () => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        const body = document.querySelector('body');

        body.classList.toggle('dark-theme', newTheme);
    }

    return (
        <AppContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {Children}
        </AppContext.Provider>
    )
}

export const useGlobalTheme = () => useContext(AppContext);
