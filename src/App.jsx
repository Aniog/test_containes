import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CartDrawer from './components/layout/CartDrawer'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CollectionPage from './pages/CollectionPage'
import './App.css'

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-velmora-cream">
          <Navbar />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/product/:slug" element={<ProductPage />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  )
}

export default App
