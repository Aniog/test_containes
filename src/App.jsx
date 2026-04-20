import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Home from '@/pages/Home'
import News from '@/pages/News'
import ArticleDetail from '@/pages/ArticleDetail'
import Discounts from '@/pages/Discounts'
import Store from '@/pages/Store'
import GameDetail from '@/pages/GameDetail'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-gray-950 flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<ArticleDetail />} />
              <Route path="/discounts" element={<Discounts />} />
              <Route path="/store" element={<Store />} />
              <Route path="/store/:id" element={<GameDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
