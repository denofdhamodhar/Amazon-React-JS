import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../components/Main Components/HomePage'
import CreateAccount from '../components/Auth Components/Create Account/CreateAccount'
import Login from '../components/Auth Components/Login/Login'

function MainRouting() {
  return (
    <BrowserRouter>
        <Routes>
           <Route path='/' Component={HomePage} />
           <Route path='/create-account' Component={CreateAccount} />
           <Route path='/login' Component={Login} />
        </Routes>
    </BrowserRouter>
  )
}

export default MainRouting