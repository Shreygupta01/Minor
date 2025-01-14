import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/ui/App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
