import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register.jsx'
import RegisterSecondPage from './pages/RegisterSecondPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register-on-the-way' element={<RegisterSecondPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
