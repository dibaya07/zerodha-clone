import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, } from "react-router-dom"
import {  Routes, Route } from "react-router-dom"
import Signup from "./landing_page/signup/Signup"
import AboutPage from './landing_page/about/AboutPage'
import ProductPage from './landing_page/products/ProductPage'
import PricingPage from './landing_page/pricing/PricingPage'
import SupportPage from './landing_page/support/SupportPage'
import NotFound from './landing_page/NotFound'
import Login from './landing_page/login/Login'
import { CookiesProvider } from 'react-cookie'
// import App from './App'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
// import { GeneralContext } from './Context/context'
import { GeneralContextProvider } from './Context/GeneralContext'
import HomePage from './landing_page/home/HomePage'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <GeneralContext> */}
    <BrowserRouter>
    <CookiesProvider>
    <GeneralContextProvider>
    {/* <App/> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/> } />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/support' element={<SupportPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </GeneralContextProvider>
    </CookiesProvider>
    </BrowserRouter>
    {/* </GeneralContext> */}
  </StrictMode>
)
