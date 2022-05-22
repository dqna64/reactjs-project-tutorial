import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from 'App'
import AllPlaces from 'pages/AllPlaces'
import AddPlace from 'pages/AddPlace'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="all" element={<AllPlaces />} />
          <Route path="add" element={<AddPlace />} />
        </Route>
      </Routes>
    </BrowserRouter>{' '}
  </React.StrictMode>,
)
