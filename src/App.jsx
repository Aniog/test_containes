import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductDetail from './pages/ProductDetail'
import Shop from './pages/Shop'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  )
}

export default App
