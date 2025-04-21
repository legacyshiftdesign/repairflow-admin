import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './pages/Dashboard'
import Login from './pages/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<App />} />
        <Route path="/admin/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)