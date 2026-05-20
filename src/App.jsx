import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './pages/Home.jsx'
import News from './pages/News.jsx'
import ArticleDetail from './pages/ArticleDetail.jsx'
import Deals from './pages/Deals.jsx'
import Store from './pages/Store.jsx'
import './App.css'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, { id: product.id, title: product.data.title, price: product.data.price, qty: 1 }]
    })
  }

  const updateQty = (id, qty) => {
    if (qty <= 0) {
      setCart((prev) => prev.filter((item) => item.id !== id))
    } else {
      setCart((prev) => prev.map((item) => (item.id === id ? { ...item, qty } : item)))
    }
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0f0f13] flex flex-col">
        <Navbar cartCount={cartCount} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<ArticleDetail />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/store" element={
              <Store
                cart={cart}
                onAddToCart={addToCart}
                onUpdateQty={updateQty}
                onRemoveFromCart={removeFromCart}
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
