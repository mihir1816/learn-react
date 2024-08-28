import { useContext , createContext } from "react";

const ThemeContext = createContext({
    themeMode : "dark",
    DarkTheme : () => {} , 
    LightTheme : () => {} ,
}) ; 

export default ThemeContext
export const ThemeProvider = ThemeContext.Provider 

