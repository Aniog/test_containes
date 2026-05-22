import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './pages/Home.jsx'
import News from './pages/News.jsx'
import ArticleDetail from './pages/ArticleDetail.jsx'
import Discounts from './pages/Discounts.jsx'
import Store from './pages/Store.jsx'

function App() {
  const [cart, setCart] = useState([])

  function addToCart(game) {
    setCart(prev => {
      const existing = prev.find(i => i.game.id === game.id)
      if (existing) return prev.map(i => i.game.id === game.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { game, qty: 1 }]
    })
  }

  function updateQty(gameId, qty) {
    if (qty <= 0) removeFromCart(gameId)
    else setCart(prev => prev.map(i => i.game.id === gameId ? { ...i, qty } : i))
  }

  function removeFromCart(gameId) {
    setCart(prev => prev.filter(i => i.game.id !== gameId))
  }

  const cartCount = cart.reduce((s, i) => s + i.qty, 0)

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0d0f14] flex flex-col">
        <Navbar cartCount={cartCount} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<ArticleDetail />} />
            <Route path="/discounts" element={<Discounts />} />
            <Route path="/store" element={
              <Store
                cart={cart}
                onAddToCart={addToCart}
                onUpdateQty={updateQty}
                onRemove={removeFromCart}
              />
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
