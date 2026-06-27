import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import { CartProvider } from './context/CartContext'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import CartDrawer from './components/ui/CartDrawer'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ShopPage from './components/shop/ShopPage'
import AboutPage from './pages/AboutPage'
import JournalPage from './pages/JournalPage'
import './App.css'

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <CartDrawer />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/journal" element={<JournalPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#1A1A1A',
              color: '#FAF9F6',
              border: '1px solid #E8E4DF',
              fontFamily: 'Inter, system-ui, sans-serif',
            },
          }}
        />
      </CartProvider>
    </Router>
  )
}

export default App
