import React from 'react'
import ReactDOM from 'react-dom/client'
import 'index.css'
import AllPlaces from 'pages/AllPlaces'
import AddPlace from 'pages/AddPlace'
import Place from 'pages/Place'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from 'components/Layout'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPlaces />}/>
        <Route path="add" element={<AddPlace />} />
        <Route path="place/:placeId" element={<Place />}/>
        <Route path="*" element={<Layout>There's no page for this route!</Layout>} />
      </Routes>
    </BrowserRouter>{' '}
  </React.StrictMode>,
)
