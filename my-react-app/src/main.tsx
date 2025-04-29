import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Heloworld from './Heloworld.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Heloworld/>
  </StrictMode>,
)
