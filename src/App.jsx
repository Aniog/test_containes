import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './pages/Home.jsx'
import News from './pages/News.jsx'
import Deals from './pages/Deals.jsx'
import Store from './pages/Store.jsx'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (game) => {
    console.log('Adding to cart:', (game.data || game).title)
    setCart((prev) => [...prev, game])
  }

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950 flex flex-col">
        <Navbar cartCount={cart.length} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} />} />
            <Route path="/news" element={<News />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/store" element={<Store cart={cart} onAddToCart={addToCart} onRemoveFromCart={removeFromCart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
