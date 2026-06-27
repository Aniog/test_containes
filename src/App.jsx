import React, { useState, createContext, useContext } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { ShoppingCart, Search, X, Plus, Minus, Star } from 'lucide-react'

// Cart Context
const CartContext = createContext()

const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, variant = 'Gold', quantity = 1) => {
    const existing = cart.findIndex(
      item => item.id === product.id && item.variant === variant
    )
    
    if (existing !== -1) {
      const updated = [...cart]
      updated[existing].quantity += quantity
      setCart(updated)
    } else {
      setCart([...cart, { ...product, variant, quantity }])
    }
    setIsCartOpen(true)
  }

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  const updateQuantity = (index, quantity) => {
    if (quantity < 1) return
    const updated = [...cart]
    updated[index].quantity = quantity
    setCart(updated)
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{
      cart, addToCart, removeFromCart, updateQuantity,
      cartTotal, cartCount, isCartOpen, setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  )
}

// Seed Products
const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent that catches the light with every movement.",
    price: 42,
    category: "Earrings",
    material: "Gold",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    imageAlt: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=800&q=80"
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "An exquisite multicolor floral crystal necklace that blooms with elegance around the neckline.",
    price: 68,
    category: "Necklaces",
    material: "Gold",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    imageAlt: "https://images.unsplash.com/photo-1506630448388-4bc735f7d51f?w=800&q=80"
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Bold yet refined chunky gold dome huggie earrings that make a sophisticated statement.",
    price: 38,
    category: "Earrings",
    material: "Gold",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    imageAlt: "https://images.unsplash.com/photo-1506630448388-4bc735f7d51f?w=800&q=80"
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Intricately textured gold filigree drop earrings with an heirloom-inspired lace pattern.",
    price: 54,
    category: "Earrings",
    material: "Gold",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=800&q=80",
    imageAlt: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "A curated gift-boxed pairing of our signature earring and necklace, presented in a velvet-lined keepsake box.",
    price: 95,
    category: "Sets",
    material: "Gold",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    imageAlt: "https://images.unsplash.com/photo-1506630448388-4bc735f7d51f?w=800&q=80"
  }
]

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { cartCount, setIsCartOpen } = useCart()
  const navigate = useNavigate()

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`nav ${isScrolled ? 'nav-solid' : 'nav-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-[#1C1917]">
          VELMORA
        </Link>

        <div className="nav-center hidden md:flex items-center gap-10 text-sm tracking-[0.1em] uppercase">
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/shop" className="nav-link">Collections</Link>
          <Link to="/" className="nav-link">About</Link>
          <Link to="/" className="nav-link">Journal</Link>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 hover:text-[#B8976F] transition-colors"
          >
            <Search size={18} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-2 hover:text-[#B8976F] transition-colors relative"
          >
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#B8976F] text-white text-xs rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-[#E5E0D8] bg-white px-6 py-4">
          <div className="max-w-7xl mx-auto">
            <input 
              type="text" 
              placeholder="Search our collection..." 
              className="input w-full max-w-md"
              autoFocus
            />
          </div>
        </div>
      )}
    </nav>
  )
}

// Cart Drawer
const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart()
  const navigate = useNavigate()

  const handleCheckout = () => {
    setIsCartOpen(false)
    alert('Thank you for shopping with Velmora. Checkout would connect to a payment processor.')
  }

  return (
    <>
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="p-6 border-b flex items-center justify-between">
          <h3 className="font-serif text-xl">Your Cart</h3>
          <button onClick={() => setIsCartOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="p-6 text-center text-[#6B665F]">
            <p className="mb-4">Your cart is empty</p>
            <button 
              onClick={() => { setIsCartOpen(false); navigate('/shop') }}
              className="btn btn-outline"
            >
              Browse Collection
            </button>
          </div>
        ) : (
          <>
            <div className="p-6 space-y-6 flex-1">
              {cart.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F5F2ED] flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="product-name text-sm tracking-wider mb-1">{item.name}</p>
                    <p className="text-xs text-[#6B665F] mb-2">{item.variant}</p>
                    <p className="text-sm">${item.price}</p>
                    
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-[#E5E0D8]">
                        <button onClick={() => updateQuantity(index, item.quantity - 1)} className="p-1.5 hover:bg-[#F8F5F1]">
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(index, item.quantity + 1)} className="p-1.5 hover:bg-[#F8F5F1]">
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(index)}
                        className="text-xs text-[#6B665F] hover:text-[#1C1917]"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">${(item.price * item.quantity).toFixed(0)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t mt-auto">
              <div className="flex justify-between mb-6 text-lg">
                <span>Total</span>
                <span>${cartTotal}</span>
              </div>
              <button onClick={handleCheckout} className="btn btn-accent w-full mb-3">
                Proceed to Checkout
              </button>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="btn btn-outline w-full"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}

// Product Card Component
const ProductCard = ({ product, onQuickAdd }) => {
  return (
    <div className="product-card group">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image product-image-primary"
        />
        <img 
          src={product.imageAlt} 
          alt={product.name} 
          className="product-image product-image-secondary"
        />
        <button 
          onClick={() => onQuickAdd(product)}
          className="quick-add btn btn-accent text-xs px-6 py-2.5"
        >
          Quick Add
        </button>
      </div>
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="block">
          <p className="product-name text-sm tracking-wider mb-1 group-hover:text-[#B8976F] transition-colors">
            {product.name}
          </p>
        </Link>
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#6B665F]">${product.price}</p>
          <div className="flex items-center gap-1 text-xs text-[#B8976F]">
            <Star size={12} fill="currentColor" />
            <span>{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Homepage
const HomePage = () => {
  const { addToCart } = useCart()
  const navigate = useNavigate()

  const handleQuickAdd = (product) => {
    addToCart(product)
  }

  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { id: 3, caption: "Everyday elegance", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
    { id: 4, caption: "Timeless beauty", img: "https://images.unsplash.com/photo-1506630448388-4bc735f7d51f?w=400&q=80" },
    { id: 5, caption: "Soft details", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=400&q=80" },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#1C1917] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=2000&q=80')] bg-cover bg-center opacity-90" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-6xl md:text-7xl text-white tracking-[0.05em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/80 text-lg mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry, thoughtfully designed for the modern woman.
          </p>
          <Link to="/shop" className="btn btn-accent inline-block">
            Shop the Collection
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar py-4 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-2 text-xs tracking-[0.15em] uppercase text-[#6B665F]">
            <span>Free Worldwide Shipping</span>
            <span>30-Day Returns</span>
            <span>18K Gold Plated</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-[#B8976F] mb-2">Signature Pieces</p>
            <h2 className="font-serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-wider hover:text-[#B8976F] transition-colors hidden md:block">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onQuickAdd={handleQuickAdd} />
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-[0.2em] text-xs text-[#B8976F] mb-8 text-center">As Seen On You</p>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {ugcItems.map(item => (
              <div key={item.id} className="ugc-card">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="uppercase tracking-[0.2em] text-xs text-[#B8976F] mb-8 text-center">Discover</p>
        <h2 className="font-serif text-4xl text-center mb-12">Shop by Category</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", img: "https://images.unsplash.com/photo-1506630448388-4bc735f7d51f?w=800&q=80" }
          ].map((cat, i) => (
            <div 
              key={i} 
              onClick={() => navigate('/shop')}
              className="category-tile"
            >
              <img src={cat.img} alt={cat.name} />
              <div className="overlay">
                <span className="text-white text-lg tracking-[0.15em] font-serif">{cat.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=1200&q=80" 
              alt="Velmora atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center p-10 md:p-16 lg:p-20">
            <div>
              <p className="uppercase tracking-[0.2em] text-xs text-[#B8976F] mb-4">Since 2018</p>
              <h3 className="font-serif text-4xl mb-6">Our Story</h3>
              <p className="text-[#6B665F] leading-relaxed mb-8">
                Velmora was born from a desire to create jewelry that feels both precious and wearable. 
                Each piece is crafted with intention, using only the finest materials and timeless design principles.
              </p>
              <Link to="/" className="btn btn-outline inline-block">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="uppercase tracking-[0.2em] text-xs text-[#B8976F] mb-10">In Their Words</p>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for a year and they still look brand new." },
            { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. The necklace I bought has become my signature piece." },
            { name: "Amara K.", text: "Finally, jewelry that doesn't irritate my sensitive skin. The gold tone is so rich and warm." }
          ].map((t, i) => (
            <div key={i} className="space-y-4">
              <div className="stars flex justify-center gap-0.5">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
              </div>
              <p className="text-[#6B665F] italic leading-relaxed">"{t.text}"</p>
              <p className="text-sm tracking-wider">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#1C1917] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="font-serif text-3xl text-white mb-3">Join for 10% off</h3>
          <p className="text-white/60 mb-8 text-sm">Be the first to know about new arrivals and exclusive offers.</p>
          <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input type="email" placeholder="Your email" className="input flex-1 bg-white/5 border-white/20 text-white placeholder:text-white/40" required />
            <button type="submit" className="btn btn-accent">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E5E0D8] py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12">
          <div>
            <p className="font-serif text-2xl tracking-[0.2em] mb-4">VELMORA</p>
            <p className="text-xs text-[#6B665F]">Fine Jewelry</p>
          </div>
          <div>
            <p className="uppercase tracking-[0.15em] text-xs mb-4">Shop</p>
            <div className="space-y-2 text-sm text-[#6B665F]">
              <p>New Arrivals</p>
              <p>Bestsellers</p>
              <p>Collections</p>
              <p>Gift Sets</p>
            </div>
          </div>
          <div>
            <p className="uppercase tracking-[0.15em] text-xs mb-4">Help</p>
            <div className="space-y-2 text-sm text-[#6B665F]">
              <p>Shipping</p>
              <p>Returns</p>
              <p>Care Guide</p>
              <p>Contact</p>
            </div>
          </div>
          <div>
            <p className="uppercase tracking-[0.15em] text-xs mb-4">Company</p>
            <div className="space-y-2 text-sm text-[#6B665F]">
              <p>Our Story</p>
              <p>Journal</p>
              <p>Stockists</p>
              <p>Press</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#E5E0D8] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B665F]">
          <p>© 2026 Velmora. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Instagram</span>
            <span>Pinterest</span>
            <span>Visa</span>
            <span>Mastercard</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Product Detail Page
const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  const product = products.find(p => p.id === parseInt(id))
  if (!product) return <div className="p-10 text-center">Product not found</div>

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
  }

  return (
    <div className="pt-20 max-w-7xl mx-auto px-6 py-12">
      <button onClick={() => navigate(-1)} className="text-sm tracking-wider mb-8 hover:text-[#B8976F]">← Back</button>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square bg-[#F5F2ED] mb-4 overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[product.image, product.imageAlt, product.image, product.imageAlt].map((img, i) => (
              <div key={i} className="aspect-square bg-[#F5F2ED] overflow-hidden cursor-pointer">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-4">
          <p className="product-name text-3xl tracking-[0.15em] mb-3">{product.name}</p>
          <p className="text-2xl mb-4">${product.price}</p>
          
          <div className="flex items-center gap-2 mb-8">
            <div className="stars flex">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm text-[#6B665F]">{product.rating} · 124 reviews</span>
          </div>

          <p className="text-[#6B665F] leading-relaxed mb-8">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-8">
            <p className="uppercase tracking-[0.1em] text-xs mb-3">Finish</p>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map(v => (
                <button
                  key={v}
                  onClick={() => setSelectedVariant(v)}
                  className={`variant-pill ${selectedVariant === v ? 'active' : ''}`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <p className="uppercase tracking-[0.1em] text-xs mb-3">Quantity</p>
            <div className="flex items-center border border-[#E5E0D8] w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-[#F8F5F1]"><Minus size={16} /></button>
              <span className="px-6">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-[#F8F5F1]"><Plus size={16} /></button>
            </div>
          </div>

          <button onClick={handleAddToCart} className="btn btn-accent w-full mb-4">
            Add to Cart
          </button>
          <p className="text-center text-xs text-[#6B665F]">Ships in 1-2 business days</p>

          {/* Accordions */}
          <div className="mt-12 divide-y divide-[#E5E0D8]">
            {[
              { title: "Description", content: "Each piece is hand-finished in our atelier using traditional techniques passed down through generations. The 18K gold plating ensures lasting beauty and durability." },
              { title: "Materials & Care", content: "18K gold plated brass with hypoallergenic posts. Avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided pouch when not in use." },
              { title: "Shipping & Returns", content: "Complimentary worldwide shipping on all orders. Returns accepted within 30 days of delivery. Items must be unworn with original packaging." }
            ].map((acc, i) => (
              <div key={i}>
                <div 
                  className="accordion-header"
                  onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                >
                  <span>{acc.title}</span>
                  <span className="text-xl">{openAccordion === i ? '−' : '+'}</span>
                </div>
                <div className={`accordion-content text-[#6B665F] text-sm leading-relaxed ${openAccordion === i ? 'open' : ''}`}>
                  {acc.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20">
        <p className="uppercase tracking-[0.2em] text-xs text-[#B8976F] mb-8">You May Also Like</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map(p => (
            <ProductCard key={p.id} product={p} onQuickAdd={(prod) => addToCart(prod)} />
          ))}
        </div>
      </div>
    </div>
  )
}

// Shop Page
const ShopPage = () => {
  const { addToCart } = useCart()
  const [filters, setFilters] = useState({ category: 'All', price: 'All', material: 'All' })
  const [sort, setSort] = useState('featured')

  const filteredProducts = [...products]
    .filter(p => {
      if (filters.category !== 'All' && p.category !== filters.category) return false
      if (filters.material !== 'All' && p.material !== filters.material) return false
      if (filters.price === 'Under $50' && p.price >= 50) return false
      if (filters.price === '$50 - $80' && (p.price < 50 || p.price > 80)) return false
      if (filters.price === 'Over $80' && p.price <= 80) return false
      return true
    })
    .sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      return 0
    })

  return (
    <div className="pt-20 max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar Filters */}
        <div className="w-full md:w-56 flex-shrink-0">
          <p className="uppercase tracking-[0.15em] text-xs mb-6">Filters</p>
          
          <div className="space-y-8 text-sm">
            <div>
              <p className="font-medium mb-3">Category</p>
              {['All', 'Earrings', 'Necklaces', 'Sets'].map(c => (
                <label key={c} className="flex items-center gap-2 py-1 cursor-pointer">
                  <input 
                    type="radio" 
                    name="category" 
                    checked={filters.category === c}
                    onChange={() => setFilters({...filters, category: c})}
                  />
                  <span>{c}</span>
                </label>
              ))}
            </div>

            <div>
              <p className="font-medium mb-3">Price</p>
              {['All', 'Under $50', '$50 - $80', 'Over $80'].map(p => (
                <label key={p} className="flex items-center gap-2 py-1 cursor-pointer">
                  <input 
                    type="radio" 
                    name="price" 
                    checked={filters.price === p}
                    onChange={() => setFilters({...filters, price: p})}
                  />
                  <span>{p}</span>
                </label>
              ))}
            </div>

            <div>
              <p className="font-medium mb-3">Material</p>
              {['All', 'Gold', 'Silver'].map(m => (
                <label key={m} className="flex items-center gap-2 py-1 cursor-pointer">
                  <input 
                    type="radio" 
                    name="material" 
                    checked={filters.material === m}
                    onChange={() => setFilters({...filters, material: m})}
                  />
                  <span>{m}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <p className="text-sm text-[#6B665F]">{filteredProducts.length} products</p>
            <select 
              value={sort} 
              onChange={(e) => setSort(e.target.value)}
              className="border border-[#E5E0D8] px-4 py-2 text-sm bg-white"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} onQuickAdd={addToCart} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Main App
import { useParams } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <CartDrawer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
