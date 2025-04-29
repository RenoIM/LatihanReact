import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { UserCard } from './UserCard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
    <UserCard name={''} job={''} avatarUrl={''}/>
  </StrictMode>,
)
