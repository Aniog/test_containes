import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, createContext } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import Journal from './pages/Journal'

// Cart Context
export const CartContext = createContext()

// Seed products
export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    description: "Delicate gold ear cuff featuring a subtle crystal accent. Perfect for stacking or wearing alone.",
    material: "18K Gold Plated Brass, Crystal",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    rating: 4.8,
    reviews: 124,
    inStock: true
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    description: "A statement necklace adorned with multicolor floral crystals. Each piece is hand-assembled.",
    material: "18K Gold Plated Brass, Crystals",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=800&q=80",
    rating: 4.9,
    reviews: 89,
    inStock: true
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    description: "Chunky dome huggie earrings with a sculptural silhouette. Bold yet refined.",
    material: "18K Gold Plated Brass",
    image: "https://images.unsplash.com/photo-1535632787350-7423ebd33c1f?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1506630448388-4bc034007a7b?w=800&q=80",
    rating: 4.7,
    reviews: 156,
    inStock: true
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    description: "Intricate filigree drop earrings with a textured gold finish. Lightweight and elegant.",
    material: "18K Gold Plated Brass",
    image: "https://images.unsplash.com/photo-1506630448388-4bc034007a7b?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    rating: 4.6,
    reviews: 73,
    inStock: true
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Sets",
    price: 95,
    description: "A curated gift set featuring matching earrings and necklace. Presented in a velvet-lined box.",
    material: "18K Gold Plated Brass, Crystals",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    rating: 5.0,
    reviews: 42,
    inStock: true
  }
]

function App() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Cart functions
  const addToCart = (product, variant = 'Gold', quantity = 1) => {
    const cartItem = {
      ...product,
      cartId: `${product.id}-${variant}`,
      variant,
      quantity
    }
    
    setCart(prev => {
      const existing = prev.findIndex(item => item.cartId === cartItem.cartId)
      if (existing !== -1) {
        const updated = [...prev]
        updated[existing].quantity += quantity
        return updated
      }
      return [...prev, cartItem]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (cartId) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId))
  }

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) return
    setCart(prev => 
      prev.map(item => 
        item.cartId === cartId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const cartValue = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
    isCartOpen,
    setIsCartOpen,
    searchQuery,
    setSearchQuery
  }

  return (
    <CartContext.Provider value={cartValue}>
      <Router>
        <div className="min-h-screen flex flex-col bg-[#F8F5F1]">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/collections" element={<Shop />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </Router>
    </CartContext.Provider>
  )
}

export default App
