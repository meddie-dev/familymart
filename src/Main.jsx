import React, { useState, useEffect } from 'react'
import Landing from './pages/landing_page.jsx'
import Home from './pages/home.jsx'
import Shop from './pages/shop.jsx'
import Create from './pages/create_acc.jsx'
import Signin from './pages/sign_in.jsx'
import Account from './pages/account.jsx'
import ShoppingCart from './pages/shopping_cart.jsx'
import Company from './pages/company.jsx'
import MarketPlace from './pages/market_place.jsx'
import Checkout from './pages/checkout.jsx'
import './index.css'
import { Route, Routes } from 'react-router-dom'

 function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>{
      loading ? 
        <div className="w-full h-screen flex justify-center items-center overflow-y-hidden">
          <video className="w-full h-full object-cover" src="src/assets/Untitled design.mp4" autoPlay muted playsInline loop loading={loading}></video>
        </div>
      :
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/create" element={<Create />} />
        <Route path="/sign_in" element={<Signin />} />
        <Route path="/account" element={<Account />} />
        <Route path="/shopping_cart" element={<ShoppingCart />} />
        <Route path="/company" element={<Company />} />
        <Route path="/market_place" element={<MarketPlace />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      
    }
    </>
  )
}

export default App