import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import CartDrawer from './components/ui/CartDrawer'
import HomePage from './pages/HomePage'
import CollectionPage from './components/shop/CollectionPage'
import ProductDetailPage from './components/product/ProductDetailPage'
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
            <Route path="/shop" element={<CollectionPage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<JournalPage />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  )
}

export default App
