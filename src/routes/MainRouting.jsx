import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../components/Main Components/HomePage'
import CreateAccount from '../components/Auth Components/Create Account/CreateAccount'
import Login from '../components/Auth Components/Login/Login'
import SearchProductsDisplayPage from '../components/Product Components/SearchProductsDisplayPage'

function MainRouting() {
  return (
    <BrowserRouter>
        <Routes>
           <Route path='/' Component={HomePage} />
           <Route path='/create-account' Component={CreateAccount} />
           <Route path='/login' Component={Login} />
           <Route path='/search-product/:searchKeyword' Component={SearchProductsDisplayPage} />
           {/* <Route path='*' element={<h5 className='text-danger p-4'>Page not found</h5>} /> */}
        </Routes>
    </BrowserRouter>
  )
}

export default MainRouting