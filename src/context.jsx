import { useContext, createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        const body = document.querySelector('body');
        body.classList.toggle('dark-theme', newTheme);
    }

    return (
        <AppContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;
export const useGlobalTheme = () => useContext(AppContext);
