import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom"; 
import Main from './Main.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>,

)


