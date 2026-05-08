import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  return (
    <>
      <header id='navbar'>
        <span className='nav-brand' onClick={() => navigate("/")}>Authenticat<span className='brand-accent'>OR</span></span>
      </header>
      <Outlet />
    </>
  )
}

export default App
