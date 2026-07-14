import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Shop from './pages/Shop'

// Placeholder components for other routes
const About = () => <div className="pt-32 pb-20 text-center"><h1 className="font-serif text-4xl">About Us</h1><p className="mt-4">Our story coming soon.</p></div>

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="collections" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="about" element={<About />} />
          {/* Catch all for presentation */}
          <Route path="*" element={<div className="pt-32 pb-20 text-center font-serif text-2xl text-muted-foreground">Coming Soon</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
