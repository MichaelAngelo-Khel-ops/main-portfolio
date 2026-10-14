import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import BodyGrid from './components/Body-grid'
import './index.css'
import App from './App.jsx'

gsap.registerPlugin(ScrollToPlugin)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BodyGrid />
    <App />
  </StrictMode>,
)
