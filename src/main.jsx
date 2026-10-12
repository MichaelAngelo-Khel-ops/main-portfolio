import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BodyGrid from './components/Body-grid'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BodyGrid />
    <App />
  </StrictMode>,
)
