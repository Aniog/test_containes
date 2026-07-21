import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/layout/Navbar'
import CartDrawer from './components/layout/CartDrawer'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CollectionPage from './pages/CollectionPage'

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-velmora-cream flex flex-col">
          <Navbar />
          <CartDrawer />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<CollectionPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  )
}

export default App
