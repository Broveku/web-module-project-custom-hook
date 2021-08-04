import React from 'react'
import useLocalStorage from './useLocalStorage'


function useDarkMode(props){
    const [someValue, setSomeValue] = useLocalStorage('dark-mode', false)
    return [someValue, setSomeValue]
}

export default useDarkMode;