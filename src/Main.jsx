import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom"; 
import App from './App.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

  <React.StrictMode>
    <HashRouter>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </HashRouter>
  </React.StrictMode>,

)
