import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom"; 
import App from './App.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,

)

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
