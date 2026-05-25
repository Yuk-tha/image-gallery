// 📚 MENTOR NOTE — ENTRY POINT
// main.jsx is where React "boots up".
// ReactDOM.createRoot finds the <div id="root"> in index.html
// and mounts your entire App component inside it.
// You rarely touch this file.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
