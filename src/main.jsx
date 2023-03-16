import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

/**
 * Tailwindcss
 */
import './assets/index.css'

/**
 * Material Web Components and Icons
 */
import './assets/bundle'
import 'material-icons/iconfont/material-icons.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)