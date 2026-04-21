import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './api/CartContext.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import BookDetail from './pages/BookDetail.jsx'
import Cart from './pages/Cart.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/book/:id" element={<BookDetail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
