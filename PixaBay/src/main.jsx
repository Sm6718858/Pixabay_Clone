import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PixaBayState from './Context/PixaBayState.jsx'

createRoot(document.getElementById('root')).render(
  <PixaBayState>
    <App />
  </PixaBayState>,
)
