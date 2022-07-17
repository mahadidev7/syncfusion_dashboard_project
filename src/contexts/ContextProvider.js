import React, {createContext, useContext, useEffect, useState} from 'react'

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({children}) =>{
    const [activeMenu, setactiveMenu] = useState(true);
    const [isClicked, setisClicked] = useState(initialState);
    const [screenSize, setscreenSize] = useState(undefined);
    const [currentColor, setcurrentColor] = useState('#03C9D7');
    const [currentMode, setcurrentMode] = useState('Light');
    const [themeSettings, setthemeSettings] = useState(false);

    const setMode = (e) =>{
        setcurrentMode(e.target.value)
        localStorage.setItem('themeMode', e.target.value)
    }

    const setColor = (color) =>{
        setcurrentColor(color)
        localStorage.setItem('colorMode', color)
    }

    const handleClick= (clicked, controler=true) => {
        if( controler){
            setisClicked({
                ...initialState,
                [clicked]: true
            })
        }else{
            setisClicked({
                ...initialState
            })
        }
        
    }

    useEffect(() => {
        let color, themeMode;

        if(localStorage.getItem('colorMode') === null){
            localStorage.setItem('colorMode', '#03C9D7')
            color = localStorage.getItem('colorMode')
        }else{
            color = localStorage.getItem('colorMode')
        }
        
        if(localStorage.getItem('themeMode') === null){
            localStorage.setItem('themeMode', 'Light')
            themeMode = localStorage.getItem('themeMode')
        }else{
            themeMode = localStorage.getItem('themeMode')
        }

        setcurrentColor(color)
        setcurrentMode(themeMode)
        
    }, []);
    
return (
    <StateContext.Provider
     value={{
        activeMenu,
        setactiveMenu,
        isClicked,
        setisClicked,
        handleClick,
        screenSize,
        setscreenSize,
        setColor, setMode,
        currentMode, currentColor,
        setcurrentMode, setcurrentColor,
        themeSettings, setthemeSettings
     }}>
        { children }
    </StateContext.Provider>
)
}

export const useStateContext = () => useContext(StateContext)

