import React, { useReducer } from 'react'

import ThemeContext from './themeContext'
import themeReducer from './themeReducer'

import { TOGGLE_THEME } from '../types'

const ThemeState = (props) => {
  const initialState = { isDark: false }

  const [state, dispatch] = useReducer(themeReducer, initialState)

  // toggle theme
  const toggleTheme = () => dispatch({ type: TOGGLE_THEME })

  return (
    <ThemeContext.Provider
      value={{
        isDark: state.isDark,
        toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}
export default ThemeState
