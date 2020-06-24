import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import ThemeState from './context/theme/ThemeState'

ReactDOM.render(
  <ThemeState>
    <App />
  </ThemeState>,
  document.getElementById('root')
)
