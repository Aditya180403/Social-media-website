import React from 'react'
import { BrowserRouter,Navigate,Routes,Route, Router } from 'react-router-dom'
import HomePage from './scenes/homePage/index.jsx'
import LoginPage from 'scenes/loginPage'
import ProfilePage from 'scenes/profilePage'
  
function App(){
  return (
    <div className='app'>
      <BrowserRouter>
      
        <Routes>
         <Route path='/' element={<LoginPage />} />
         <Route path='/home' element={<HomePage />} />
         <Route path='/profile/:id' element={<ProfilePage />} />
        </Routes>
      
      </BrowserRouter>
    </div>
    
    
  )
}

export default App
