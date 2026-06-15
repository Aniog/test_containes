import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import { Toaster } from 'sonner'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <Toaster position="top-center" />
    </>
  )
}

export default App
