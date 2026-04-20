import { useState, useCallback } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Home from '@/pages/Home'
import News from '@/pages/News'
import ArticleDetail from '@/pages/ArticleDetail'
import Deals from '@/pages/Deals'
import Store from '@/pages/Store'

function App() {
  const [cart, setCart] = useState([])

  const handleAddToCart = useCallback((game) => {
    setCart((prev) => {
      const exists = prev.find((g) => g.id === game.id)
      if (exists) {
        console.log('[Cart] Game already in cart:', game.data.title)
        return prev
      }
      console.log('[Cart] Added to cart:', game.data.title)
      return [...prev, game]
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950 flex flex-col">
        <Navbar cartCount={cart.length} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<ArticleDetail />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/store" element={<Store onAddToCart={handleAddToCart} cart={cart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
