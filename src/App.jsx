import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/shared/Navbar'
import { Footer } from './components/shared/Footer'
import { CartDrawer } from './components/shared/CartDrawer'
import ScrollToTop from './components/shared/ScrollToTop'
import { Home } from './pages/Home'
import { Collection } from './pages/Collection'
import { ProductDetail } from './pages/ProductDetail'
import { useCart } from './context/CartContext'

function App() {
  const { isOpen, setIsOpen } = useCart()

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar onOpenCart={() => setIsOpen(true)} />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Collection />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/about" element={<div className="pt-32 pb-24 text-center"><h1 className="font-serif text-4xl">About Us</h1><p className="mt-4 text-muted-foreground">Coming soon.</p></div>} />
        </Routes>
      </div>

      <Footer />
      <CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}

export default App
