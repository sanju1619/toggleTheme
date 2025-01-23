import React from 'react'
import { useState } from 'react'
const ThemeToggle = () => {
    const [isDarkMode,setisDarkMode]=useState(false)
    const toggleTheme=()=>{
        setisDarkMode(!isDarkMode)
    }
    const themeStyles={
        light:{
            backgroundColor:"#fff",
            color:"#000",

        },
        dark:{
            backgroundColor:"#000",
            color:"#fff",

        }
    }
    const currentTheme= isDarkMode? themeStyles.dark:themeStyles.light


  return (
    <div style={{
        padding:"29px",
        fontFamily:"Arial, san-serif",
        minHeight:"100vh",
        ...currentTheme,

    }}>
        <h1>ThemeToggle</h1>
        <button type='button' onClick={toggleTheme}> switch {isDarkMode? "light":"dark"} theme</button>
        <p> this is a simple tag example</p>

    </div>
  )
}


export default ThemeToggle

