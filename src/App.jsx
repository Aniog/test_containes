import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import { CartProvider } from './context/CartContext'
import Navbar from './components/layout/Navbar'
import CartDrawer from './components/layout/CartDrawer'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'
import JournalPage from './pages/JournalPage'
import './App.css'

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<JournalPage />} />
          </Routes>
          <Footer />
        </div>
        <Toaster position="bottom-right" />
      </CartProvider>
    </Router>
  )
}

export default App
