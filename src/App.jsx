import React, { useState, createContext, useContext } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { ShoppingCart, Search, X, Plus, Minus, Star, ArrowRight, Menu } from 'lucide-react'
import { Toaster, toast } from 'sonner'

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
    toast.success(`Added ${product.name} to cart`)
  }

  const removeFromCart = (index) => {
    const updated = cart.filter((_, i) => i !== index)
    setCart(updated)
  }

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return
    const updated = [...cart]
    updated[index].quantity = newQuantity
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
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. Perfect for stacking or wearing alone.",
    price: 42,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "A statement necklace adorned with multicolor floral crystals. Each piece is hand-assembled.",
    price: 68,
    category: "Necklaces",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky dome huggie earrings with a sculptural silhouette. Bold yet refined.",
    price: 38,
    category: "Huggies",
    material: "18K Gold Plated",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Intricate filigree drop earrings with a textured gold finish. Lightweight and elegant.",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.6,
    reviews: 73,
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "A curated gift set featuring matching earrings and necklace. Presented in a velvet box.",
    price: 95,
    category: "Necklaces",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
  }
]

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { cartCount, setIsCartOpen } = useCart()

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`nav ${isScrolled ? 'nav-solid' : 'nav-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="serif text-2xl tracking-[0.3em] text-[#2C2823]">VELMORA</Link>
        
        <div className="nav-center hidden md:flex items-center gap-10">
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/shop" className="nav-link">Collections</Link>
          <a href="#about" className="nav-link">About</a>
          <a href="#journal" className="nav-link">Journal</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:text-[#B8976D] transition-colors">
            <Search size={18} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-2 hover:text-[#B8976D] transition-colors relative"
          >
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#B8976D] text-white text-xs rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white px-6 py-6 flex flex-col gap-4">
          <Link to="/shop" className="nav-link py-2">Shop</Link>
          <Link to="/shop" className="nav-link py-2">Collections</Link>
          <a href="#about" className="nav-link py-2">About</a>
          <a href="#journal" className="nav-link py-2">Journal</a>
        </div>
      )}
    </nav>
  )
}

// Cart Drawer
const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart()

  return (
    <>
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="serif text-xl">Your Cart</h3>
          <button onClick={() => setIsCartOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <ShoppingCart size={48} className="text-[#E5DFD4] mb-4" />
            <p className="text-[#6B665F]">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto p-6 space-y-6">
              {cart.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F5F2ED] flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-sm tracking-wider">{item.name}</p>
                        <p className="text-xs text-[#6B665F] mt-0.5">{item.variant}</p>
                      </div>
                      <button onClick={() => removeFromCart(index)} className="text-[#6B665F]">
                        <X size={14} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DFD4]">
                        <button onClick={() => updateQuantity(index, item.quantity - 1)} className="p-1.5 hover:bg-[#F5F2ED]">
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(index, item.quantity + 1)} className="p-1.5 hover:bg-[#F5F2ED]">
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t">
              <div className="flex justify-between mb-6 text-lg">
                <span>Total</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="btn btn-gold w-full mb-3">Checkout</button>
              <p className="text-center text-xs text-[#6B665F]">Free worldwide shipping on orders over $75</p>
            </div>
          </>
        )}
      </div>
    </>
  )
}

// Product Card
const ProductCard = ({ product }) => {
  const { addToCart } = useCart()
  const navigate = useNavigate()

  return (
    <div className="product-card group">
      <div 
        className="product-image-container cursor-pointer"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img src={product.image} alt={product.name} className="product-image primary" />
        <img src={product.image2} alt={product.name} className="product-image secondary" />
        <button 
          onClick={(e) => { e.stopPropagation(); addToCart(product) }}
          className="quick-add btn btn-gold text-xs px-6 py-2.5"
        >
          Quick Add
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 
              className="product-name text-sm tracking-wider cursor-pointer hover:text-[#B8976D]"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              {product.name}
            </h3>
            <p className="text-xs text-[#6B665F] mt-1">{product.material}</p>
          </div>
          <p className="font-medium">${product.price}</p>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className="fill-[#B8976D] text-[#B8976D]" />
            ))}
          </div>
          <span className="text-xs text-[#6B665F]">({product.reviews})</span>
        </div>
      </div>
    </div>
  )
}

// Homepage
const Home = () => {
  const bestsellers = products.slice(0, 5)
  const navigate = useNavigate()

  const ugcCaptions = [
    "Golden hour glow",
    "Everyday elegance",
    "Stacked with love",
    "Effortless shine",
    "Treasured moments"
  ]

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#2C2823] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=2000&q=80" 
          alt="Velmora Jewelry" 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-white text-6xl md:text-7xl tracking-[0.08em] mb-6">Crafted to be Treasured</h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 tracking-wide">Demi-fine jewelry for the modern woman</p>
          <Link to="/shop" className="btn btn-gold inline-flex items-center gap-2">
            Shop the Collection <ArrowRight size={16} />
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5DFD4] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.15em] text-[#6B665F] uppercase">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">·</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#6B665F] uppercase mb-2">Signature Pieces</p>
            <h2 className="serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:flex items-center gap-2 text-sm hover:text-[#B8976D]">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-[#F5F2ED] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] text-[#6B665F] uppercase mb-8 text-center">As Seen On You</p>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {ugcCaptions.map((caption, i) => (
              <div key={i} className="ugc-card">
                <img 
                  src={`https://images.unsplash.com/photo-${['1617038260897-41a1f14a8ca0','1599643478518-a784e5dc4c8f','1617038260897-41a1f14a8ca0','1611085583191-a3b181a88401','1599643478518-a784e5dc4c8f'][i]}?w=400&q=80`} 
                  alt={caption} 
                />
                <div className="ugc-caption">{caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-xs tracking-[0.2em] text-[#6B665F] uppercase mb-8 text-center">Discover</p>
        <h2 className="serif text-4xl text-center mb-12">Shop by Category</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat, i) => (
            <div key={i} className="category-tile" onClick={() => navigate('/shop')}>
              <img 
                src={`https://images.unsplash.com/photo-${['1617038260897-41a1f14a8ca0','1599643478518-a784e5dc4c8f','1617038260897-41a1f14a8ca0'][i]}?w=800&q=80`} 
                alt={cat} 
              />
              <div className="category-overlay">
                <span className="category-label">{cat}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20 border-t border-[#E5DFD4]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F5F2ED]">
            <img 
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&q=80" 
              alt="Our Craft" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-[#6B665F] uppercase mb-4">Our Philosophy</p>
            <h2 className="serif text-4xl mb-6">Jewelry that tells your story</h2>
            <p className="text-[#6B665F] leading-relaxed mb-8">
              Founded on the belief that fine jewelry should be accessible, Velmora creates demi-fine pieces 
              that honor tradition while embracing the modern woman. Each piece is crafted with intention, 
              designed to be worn daily and treasured for years.
            </p>
            <a href="#journal" className="btn btn-outline inline-flex">Our Story</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-[#F5F2ED]">
        <p className="text-xs tracking-[0.2em] text-[#6B665F] uppercase mb-8 text-center">Voices of Velmora</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new." },
            { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift for my sister. She hasn't taken it off since. Beautiful packaging too." },
            { name: "Maya K.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is so rich and warm." }
          ].map((t, i) => (
            <div key={i} className="testimonial">
              <div className="flex mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-[#B8976D] text-[#B8976D]" />)}
              </div>
              <p className="text-[#6B665F] italic leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-sm tracking-wide">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div className="bg-[#2C2823] text-white p-12">
          <p className="text-xs tracking-[0.2em] text-[#B8976D] uppercase mb-4">The Velmora Journal</p>
          <h3 className="serif text-3xl mb-4">Join for 10% off your first order</h3>
          <p className="text-white/70 mb-8">Receive stories, styling tips, and early access to new collections.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Your email address" className="input flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50" />
            <button className="btn btn-gold whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2823] text-white/70 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12">
          <div>
            <div className="serif text-2xl tracking-[0.3em] text-white mb-6">VELMORA</div>
            <p className="text-sm">Fine jewelry, thoughtfully made.</p>
          </div>
          <div>
            <p className="text-white text-sm tracking-widest mb-4">SHOP</p>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-white">All Jewelry</Link>
              <Link to="/shop" className="block hover:text-white">Earrings</Link>
              <Link to="/shop" className="block hover:text-white">Necklaces</Link>
              <Link to="/shop" className="block hover:text-white">Huggies</Link>
            </div>
          </div>
          <div>
            <p className="text-white text-sm tracking-widest mb-4">HELP</p>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-white">Shipping</a>
              <a href="#" className="block hover:text-white">Returns</a>
              <a href="#" className="block hover:text-white">Care Guide</a>
              <a href="#" className="block hover:text-white">Contact</a>
            </div>
          </div>
          <div>
            <p className="text-white text-sm tracking-widest mb-4">COMPANY</p>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block hover:text-white">Our Story</a>
              <a href="#journal" className="block hover:text-white">Journal</a>
              <a href="#" className="block hover:text-white">Sustainability</a>
              <a href="#" className="block hover:text-white">Careers</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Velmora. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Instagram</span>
            <span>Pinterest</span>
            <span>TikTok</span>
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
  const product = products.find(p => p.id === parseInt(id))
  
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) return <div className="pt-20 p-6">Product not found</div>

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  return (
    <div className="pt-20 max-w-7xl mx-auto px-6 py-12">
      <button onClick={() => navigate(-1)} className="text-sm text-[#6B665F] mb-8 hover:text-[#B8976D]">← Back</button>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square bg-[#F5F2ED] mb-4 overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[product.image, product.image2, product.image, product.image2].map((img, i) => (
              <div key={i} className="aspect-square bg-[#F5F2ED] overflow-hidden cursor-pointer">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="product-name text-3xl tracking-wider mb-2">{product.name}</h1>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-[#B8976D] text-[#B8976D]" />)}
            </div>
            <span className="text-sm text-[#6B665F]">{product.rating} · {product.reviews} reviews</span>
          </div>
          
          <p className="text-2xl font-medium mb-8">${product.price}</p>
          
          <p className="text-[#6B665F] leading-relaxed mb-8">{product.description}</p>

          {/* Variants */}
          <div className="mb-8">
            <p className="filter-label mb-3">Tone</p>
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
            <p className="filter-label mb-3">Quantity</p>
            <div className="flex items-center border border-[#E5DFD4] w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-[#F5F2ED]"><Minus size={16} /></button>
              <span className="px-6">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-[#F5F2ED]"><Plus size={16} /></button>
            </div>
          </div>

          <button 
            onClick={() => addToCart(product, selectedVariant, quantity)}
            className="btn btn-gold w-full mb-4"
          >
            Add to Cart
          </button>
          <p className="text-center text-xs text-[#6B665F]">Ships in 1-2 business days</p>

          {/* Accordions */}
          <div className="mt-12 divide-y divide-[#E5DFD4]">
            {[
              { key: 'desc', title: 'Description', content: 'Each Velmora piece is hand-finished in small batches. Our demi-fine construction uses a thick layer of 18K gold over a hypoallergenic base, ensuring lasting beauty without the premium price.' },
              { key: 'care', title: 'Materials & Care', content: '18K gold plated brass. Hypoallergenic and tarnish-resistant. Avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided pouch when not in use.' },
              { key: 'ship', title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $75. All orders ship within 1-2 business days. 30-day returns accepted on unworn items in original packaging.' }
            ].map(item => (
              <div key={item.key}>
                <div className="accordion-header" onClick={() => toggleAccordion(item.key)}>
                  <span className="font-medium">{item.title}</span>
                  <span className="text-xl">{openAccordion === item.key ? '−' : '+'}</span>
                </div>
                <div className={`accordion-content text-[#6B665F] text-sm leading-relaxed ${openAccordion === item.key ? 'open' : ''}`}>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20 pt-12 border-t">
        <h3 className="serif text-2xl mb-8">You May Also Like</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  )
}

// Shop Page
const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [priceRange, setPriceRange] = useState([0, 120])
  const [sortBy, setSortBy] = useState('featured')
  const [selectedMaterial, setSelectedMaterial] = useState('all')

  const filteredProducts = React.useMemo(() => {
    let result = [...products]

    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category))
    }

    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

    if (selectedMaterial !== 'all') {
      result = result.filter(p => p.material.includes(selectedMaterial))
    }

    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price)
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price)
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating)

    return result
  }, [selectedCategories, priceRange, sortBy, selectedMaterial])

  const toggleCategory = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter(c => c !== cat))
    } else {
      setSelectedCategories([...selectedCategories, cat])
    }
  }

  return (
    <div className="pt-20 max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs tracking-[0.2em] text-[#6B665F] uppercase">Discover</p>
          <h1 className="serif text-4xl">The Collection</h1>
        </div>
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          className="input w-auto text-sm py-2 pr-8"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Best Rated</option>
        </select>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="md:col-span-1">
          <div className="sticky top-24 space-y-8">
            <div>
              <p className="filter-label">Category</p>
              {['Earrings', 'Necklaces', 'Huggies'].map(cat => (
                <label key={cat} className="flex items-center gap-3 py-1.5 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                    className="accent-[#B8976D]"
                  />
                  <span className="text-sm">{cat}</span>
                </label>
              ))}
            </div>

            <div>
              <p className="filter-label">Price Range</p>
              <div className="flex items-center gap-3">
                <input 
                  type="number" 
                  value={priceRange[0]} 
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="input py-2 text-sm w-20" 
                />
                <span className="text-[#6B665F]">to</span>
                <input 
                  type="number" 
                  value={priceRange[1]} 
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="input py-2 text-sm w-20" 
                />
              </div>
            </div>

            <div>
              <p className="filter-label">Material</p>
              <select 
                value={selectedMaterial} 
                onChange={(e) => setSelectedMaterial(e.target.value)}
                className="input text-sm py-2"
              >
                <option value="all">All Materials</option>
                <option value="Gold">18K Gold Plated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="md:col-span-3">
          <p className="text-sm text-[#6B665F] mb-6">{filteredProducts.length} products</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map(p => <ProductCard key={p.id} product={p} />)}
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
        <div className="min-h-screen">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
          <CartDrawer />
          <Toaster position="top-center" richColors closeButton />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
