import React, { useCallback } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Layout from '@/Layout'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'

function AppInner() {
  const navigate = useNavigate()

  const customNavigate = useCallback(
    (path, options) => {
      if (options?.replace) {
        navigate(path, { replace: true })
      } else {
        navigate(path)
      }
    },
    [navigate]
  )

  React.useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = customNavigate
  }, [customNavigate])

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/journal" element={<Journal />} />
      </Route>
    </Routes>
  )
}

function About() {
  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-5">
      <h1 className="font-serif text-4xl tracking-wider uppercase text-truffle-800">Our Story</h1>
      <div className="mt-4 w-12 h-px bg-gold mb-8" />
      <div className="prose prose-sm text-truffle-500 leading-relaxed space-y-4">
        <p>Velmora was born from a simple belief: fine jewelry shouldn't be locked away for special occasions. Each piece is crafted with 18K gold plating on brass, designed to become part of your everyday story — from morning coffee to candlelit evenings.</p>
        <p>We work directly with skilled artisans to bring you premium materials at an accessible price, because luxury should feel effortless, not exclusive. Every piece is designed in our New York studio and crafted in small batches to ensure exceptional quality.</p>
        <p>Our commitment to demi-fine jewelry means you get the look and feel of fine jewelry — without the fine jewelry markup. We believe in transparency, sustainability, and creating pieces that become part of your most treasured moments.</p>
      </div>
    </div>
  )
}

function Journal() {
  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-5">
      <h1 className="font-serif text-4xl tracking-wider uppercase text-truffle-800">Journal</h1>
      <div className="mt-4 w-12 h-px bg-gold mb-8" />
      <p className="text-truffle-500">Coming soon — styling guides, jewelry care tips, and behind-the-scenes stories from the Velmora studio.</p>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppInner />
      </CartProvider>
    </BrowserRouter>
  )
}
