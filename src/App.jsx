import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { ShoppingCart, Search, X, Plus, Minus, Star, ArrowRight, Menu } from 'lucide-react'

// Seed product data
const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. Perfect for stacking or wearing alone.",
    material: "18K Gold Plated Brass, Crystal",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    description: "A statement necklace adorned with multicolor floral crystals. Each piece is hand-assembled.",
    material: "18K Gold Plated Brass, Crystal",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    description: "Chunky dome huggie earrings with a sculptural silhouette. Lightweight and comfortable for daily wear.",
    material: "18K Gold Plated Brass",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    rating: 4.7,
    reviews: 156
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    description: "Intricate filigree drop earrings with a textured gold finish. Inspired by vintage lacework.",
    material: "18K Gold Plated Brass",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    rating: 4.6,
    reviews: 73
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Sets",
    price: 95,
    description: "A curated gift set featuring matching earrings and necklace. Presented in a velvet-lined keepsake box.",
    material: "18K Gold Plated Brass, Crystal",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    rating: 4.9,
    reviews: 67
  }
]

// Cart context
const CartContext = React.createContext()

function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, variant = 'Gold') => {
    const existing = cart.findIndex(item => item.id === product.id && item.variant === variant)
    if (existing !== -1) {
      const updated = [...cart]
      updated[existing].quantity += 1
      setCart(updated)
    } else {
      setCart([...cart, { ...product, variant, quantity: 1 }])
    }
    setIsCartOpen(true)
  }

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  const updateQuantity = (index, qty) => {
    if (qty < 1) return
    const updated = [...cart]
    updated[index].quantity = qty
    setCart(updated)
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, cartTotal, cartCount, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  return React.useContext(CartContext)
}

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cartCount, setIsCartOpen } = useCart()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`nav fixed top-0 left-0 right-0 z-50 ${scrolled ? 'scrolled bg-white' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="serif text-2xl tracking-[0.2em] text-[var(--color-base)]">VELMORA</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.08em]">
          <Link to="/shop" className="hover:text-[var(--color-gold)] transition-colors">Shop</Link>
          <Link to="/shop" className="hover:text-[var(--color-gold)] transition-colors">Collections</Link>
          <Link to="/" className="hover:text-[var(--color-gold)] transition-colors">About</Link>
          <Link to="/" className="hover:text-[var(--color-gold)] transition-colors">Journal</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-[var(--color-border)] rounded-full transition-colors">
            <Search size={18} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-2 hover:bg-[var(--color-border)] rounded-full transition-colors relative"
          >
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[var(--color-gold)] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-6 flex flex-col gap-4 text-sm tracking-[0.08em]">
          <Link to="/shop" className="py-2" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
          <Link to="/shop" className="py-2" onClick={() => setMobileMenuOpen(false)}>Collections</Link>
          <Link to="/" className="py-2" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/" className="py-2" onClick={() => setMobileMenuOpen(false)}>Journal</Link>
        </div>
      )}
    </nav>
  )
}

// Cart Drawer
function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart()

  return (
    <>
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="p-6 border-b flex items-center justify-between">
          <span className="text-lg tracking-[0.1em]">YOUR CART</span>
          <button onClick={() => setIsCartOpen(false)}><X size={20} /></button>
        </div>
        
        {cart.length === 0 ? (
          <div className="p-6 text-center text-[var(--color-taupe)]">
            <p className="mb-4">Your cart is empty</p>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="btn-outline text-sm"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        ) : (
          <>
            <div className="p-6 space-y-6 flex-1">
              {cart.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover bg-[var(--color-ivory)]" />
                  <div className="flex-1 text-sm">
                    <div className="product-name text-xs mb-1 pr-6">{item.name}</div>
                    <div className="text-[var(--color-taupe)]">{item.variant} • ${item.price}</div>
                    <div className="flex items-center gap-3 mt-3">
                      <button onClick={() => updateQuantity(index, item.quantity - 1)} className="p-1"><Minus size={14} /></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(index, item.quantity + 1)} className="p-1"><Plus size={14} /></button>
                      <button onClick={() => removeFromCart(index)} className="ml-auto text-[var(--color-taupe)] hover:text-[var(--color-base)]">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t mt-auto">
              <div className="flex justify-between mb-6 text-sm tracking-[0.05em]">
                <span>TOTAL</span>
                <span>${cartTotal}</span>
              </div>
              <button className="btn-primary w-full">CHECKOUT</button>
              <p className="text-center text-xs text-[var(--color-taupe)] mt-4 tracking-[0.05em]">Free worldwide shipping on orders over $75</p>
            </div>
          </>
        )}
      </div>
    </>
  )
}

// Homepage
function Home() {
  const { addToCart } = useCart()
  const navigate = useNavigate()

  const bestsellers = products.slice(0, 5)
  const ugcCaptions = ["For her", "Everyday elegance", "Golden hour", "Timeless", "Made to last"]

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[var(--color-base)] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80" 
          alt="Velmora Jewelry" 
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="serif text-[56px] md:text-[72px] text-white tracking-[0.08em] mb-4">Crafted to be Treasured</h1>
          <p className="text-white/90 text-lg mb-10 tracking-[0.05em]">Demi-fine jewelry for the modern woman</p>
          <button 
            onClick={() => navigate('/shop')}
            className="btn-primary"
          >
            SHOP THE COLLECTION
          </button>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-white py-4 border-b text-xs tracking-[0.15em] text-center text-[var(--color-taupe)] flex flex-wrap justify-center gap-x-8 gap-y-1 px-4">
        <span>FREE WORLDWIDE SHIPPING</span>
        <span>30-DAY RETURNS</span>
        <span>18K GOLD PLATED</span>
        <span>HYPOALLERGENIC</span>
      </div>

      {/* Bestsellers */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs tracking-[0.2em] text-[var(--color-taupe)]">DISCOVER</span>
            <h2 className="serif text-4xl tracking-[0.05em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:flex items-center gap-2 text-sm tracking-[0.08em] hover:text-[var(--color-gold)]">
            VIEW ALL <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bestsellers.map(product => (
            <div key={product.id} className="product-card group cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
              <div className="product-image-container aspect-[4/3.5]">
                <img src={product.image} alt={product.name} className="product-image product-image-primary" />
                <img src={product.image2} alt={product.name} className="product-image product-image-secondary" />
                <button 
                  onClick={(e) => { e.stopPropagation(); addToCart(product) }}
                  className="quick-add text-xs tracking-[0.1em]"
                >
                  QUICK ADD
                </button>
              </div>
              <div className="p-4">
                <div className="product-name text-sm tracking-[0.12em] mb-1">{product.name}</div>
                <div className="text-sm text-[var(--color-taupe)]">${product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* UGC Reel Row */}
      <div className="bg-[var(--color-ivory)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 text-center">
            <span className="text-xs tracking-[0.2em] text-[var(--color-taupe)]">AS SEEN ON</span>
            <h3 className="serif text-3xl tracking-[0.05em] mt-1">Real Moments</h3>
          </div>
          <div className="ugc-scroll flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {[1,2,3,4,5].map((i, idx) => (
              <div key={i} className="ugc-card aspect-[9/16]">
                <img 
                  src={`https://images.unsplash.com/photo-${['1535632066927-ab7c9ab60908','1617038220319-276d3cfab638','1617038220319-276d3cfab638','1515562141207-7a88fb7ce338','1599643478518-a784e5dc4c8f'][idx]}?w=400&q=80`} 
                  alt="UGC" 
                />
                <div className="ugc-caption">{ugcCaptions[idx]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shop by Category */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-10 text-center">
          <span className="text-xs tracking-[0.2em] text-[var(--color-taupe)]">EXPLORE</span>
          <h2 className="serif text-4xl tracking-[0.05em]">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4 category-grid">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat, idx) => (
            <div key={idx} className="category-tile aspect-[4/3]" onClick={() => navigate('/shop')}>
              <img 
                src={['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80','https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80','https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80'][idx]} 
                alt={cat} 
                className="w-full h-full object-cover"
              />
              <div className="category-label">{cat}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Story */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/3] bg-[var(--color-ivory)] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=900&q=80" alt="Our Story" className="w-full h-full object-cover" />
        </div>
        <div>
          <span className="text-xs tracking-[0.2em] text-[var(--color-taupe)]">SINCE 2019</span>
          <h2 className="serif text-4xl tracking-[0.03em] mt-3 mb-6">Our Story</h2>
          <p className="text-[var(--color-taupe)] leading-relaxed mb-8">
            Velmora was born from a simple belief: that beautiful, responsibly-made jewelry should be accessible. 
            Each piece is thoughtfully designed in our studio and crafted with care using premium materials.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 text-sm tracking-[0.08em] border-b border-[var(--color-base)] pb-1 hover:text-[var(--color-gold)] hover:border-[var(--color-gold)]">
            READ MORE <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.2em] text-[var(--color-taupe)]">LOVED BY MANY</span>
            <h2 className="serif text-4xl tracking-[0.05em] mt-2">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for months and they still look brand new." },
              { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift for my sister. She absolutely loved it. Beautiful packaging too." },
              { name: "Maya K.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is so rich and elegant." }
            ].map((t, i) => (
              <div key={i} className="testimonial">
                <div className="stars mb-4">★★★★★</div>
                <p className="text-sm leading-relaxed mb-6 text-[var(--color-taupe)]">"{t.text}"</p>
                <div className="text-sm tracking-[0.05em]">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="newsletter py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="serif text-3xl tracking-[0.05em] mb-3">Join for 10% off</h3>
          <p className="text-white/70 text-sm mb-8 tracking-[0.03em]">Be the first to know about new arrivals and exclusive offers.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="flex-1 bg-white/10 border border-white/30 px-5 py-3 text-sm placeholder:text-white/50 focus:outline-none"
            />
            <button className="btn-primary">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[var(--color-base)] text-white/70 py-16 text-sm">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12">
          <div>
            <div className="serif text-white text-2xl tracking-[0.2em] mb-6">VELMORA</div>
            <div className="text-xs tracking-[0.1em]">© {new Date().getFullYear()} Velmora Fine Jewelry</div>
          </div>
          <div>
            <div className="text-white tracking-[0.1em] mb-4 text-xs">SHOP</div>
            <div className="space-y-2 text-xs">
              <div>New Arrivals</div>
              <div>Bestsellers</div>
              <div>Gift Sets</div>
            </div>
          </div>
          <div>
            <div className="text-white tracking-[0.1em] mb-4 text-xs">HELP</div>
            <div className="space-y-2 text-xs">
              <div>Shipping</div>
              <div>Returns</div>
              <div>Care Guide</div>
              <div>Contact</div>
            </div>
          </div>
          <div>
            <div className="text-white tracking-[0.1em] mb-4 text-xs">COMPANY</div>
            <div className="space-y-2 text-xs">
              <div>Our Story</div>
              <div>Journal</div>
              <div>Stockists</div>
            </div>
            <div className="flex gap-4 mt-6 text-white">
              <span>IG</span><span>TT</span><span>PT</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Product Detail Page
function ProductDetail() {
  const { id } = window.location.pathname.split('/').pop()
  const product = products.find(p => p.id === parseInt(id)) || products[0]
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)
  const { addToCart } = useCart()
  const navigate = useNavigate()

  const related = products.filter(p => p.id !== product.id).slice(0, 4)

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  return (
    <div className="pt-20 pb-20 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 pt-8">
        {/* Gallery */}
        <div>
          <div className="aspect-[4/3.5] bg-[var(--color-ivory)] mb-4 overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[product.image, product.image2, product.image, product.image2].map((img, i) => (
              <div key={i} className="aspect-square bg-[var(--color-ivory)] overflow-hidden cursor-pointer">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="pt-4">
          <div className="product-name text-3xl tracking-[0.12em] mb-3">{product.name}</div>
          <div className="flex items-center gap-3 mb-6">
            <div className="stars text-lg">★★★★★</div>
            <span className="text-sm text-[var(--color-taupe)]">{product.rating} ({product.reviews} reviews)</span>
          </div>
          <div className="text-2xl mb-8">${product.price}</div>

          <p className="text-[var(--color-taupe)] leading-relaxed mb-8 pr-4">{product.description}</p>

          {/* Variants */}
          <div className="mb-8">
            <div className="filter-label mb-3">TONE</div>
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
            <div className="filter-label mb-3">QUANTITY</div>
            <div className="flex items-center gap-4">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 border"><Minus size={16} /></button>
              <span className="w-8 text-center">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-2 border"><Plus size={16} /></button>
            </div>
          </div>

          <button 
            onClick={() => addToCart(product, selectedVariant)}
            className="btn-primary w-full mb-4"
          >
            ADD TO CART
          </button>
          <p className="text-center text-xs text-[var(--color-taupe)] tracking-[0.08em]">Ships in 1-2 business days</p>

          {/* Accordions */}
          <div className="mt-12 divide-y">
            {[
              { key: 'desc', label: 'DESCRIPTION', content: product.description + ' Each piece is hand-finished in our atelier.' },
              { key: 'care', label: 'MATERIALS & CARE', content: `${product.material}. Avoid contact with perfumes and lotions. Store in a dry place. Clean gently with a soft cloth.` },
              { key: 'ship', label: 'SHIPPING & RETURNS', content: 'Free worldwide shipping on orders over $75. 30-day returns. All pieces are final sale after wear.' }
            ].map(acc => (
              <div key={acc.key}>
                <div className="accordion-header" onClick={() => toggleAccordion(acc.key)}>
                  <span>{acc.label}</span>
                  <span className="text-xl">{openAccordion === acc.key ? '−' : '+'}</span>
                </div>
                <div className={`accordion-content text-sm text-[var(--color-taupe)] leading-relaxed ${openAccordion === acc.key ? 'open' : ''}`}>
                  {acc.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <div className="mt-24">
        <div className="mb-8 text-center">
          <span className="text-xs tracking-[0.2em] text-[var(--color-taupe)]">DISCOVER MORE</span>
          <h3 className="serif text-3xl tracking-[0.05em] mt-1">You May Also Like</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {related.map(p => (
            <div key={p.id} className="product-card cursor-pointer" onClick={() => navigate(`/product/${p.id}`)}>
              <div className="aspect-[4/3.5] bg-[var(--color-ivory)]">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="product-name text-sm tracking-[0.1em] mb-1">{p.name}</div>
                <div className="text-sm text-[var(--color-taupe)]">${p.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Shop / Collection Page
function Shop() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [priceRange, setPriceRange] = useState([0, 120])
  const [sortBy, setSortBy] = useState('featured')
  const { addToCart } = useCart()
  const navigate = useNavigate()

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']

  let filtered = products.filter(p => {
    const catMatch = activeCategory === 'All' || p.category === activeCategory
    const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1]
    return catMatch && priceMatch
  })

  if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price)
  if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price)
  if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating)

  return (
    <div className="pt-20 max-w-7xl mx-auto px-6 pb-20">
      <div className="py-12 text-center">
        <span className="text-xs tracking-[0.2em] text-[var(--color-taupe)]">EXPLORE OUR COLLECTION</span>
        <h1 className="serif text-5xl tracking-[0.05em] mt-2">The Collection</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Filters */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <div className="mb-8">
              <div className="filter-label">CATEGORY</div>
              <div className="space-y-2 text-sm">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`block w-full text-left py-1 transition-colors ${activeCategory === cat ? 'text-[var(--color-gold)]' : 'hover:text-[var(--color-gold)]'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <div className="filter-label mb-4">PRICE RANGE</div>
              <input 
                type="range" 
                min="0" 
                max="120" 
                value={priceRange[1]} 
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full accent-[var(--color-gold)]"
              />
              <div className="flex justify-between text-xs text-[var(--color-taupe)] mt-1">
                <span>$0</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <span className="text-sm text-[var(--color-taupe)]">{filtered.length} products</span>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-[var(--color-border)] px-4 py-2 text-sm bg-white focus:outline-none"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Sort: Highest Rated</option>
            </select>
          </div>

          <div className="product-grid grid grid-cols-2 md:grid-cols-3 gap-5">
            {filtered.map(product => (
              <div key={product.id} className="product-card group cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
                <div className="product-image-container aspect-[4/3.5]">
                  <img src={product.image} alt={product.name} className="product-image product-image-primary" />
                  <img src={product.image2} alt={product.name} className="product-image product-image-secondary" />
                  <button 
                    onClick={(e) => { e.stopPropagation(); addToCart(product) }}
                    className="quick-add text-xs tracking-[0.1em]"
                  >
                    QUICK ADD
                  </button>
                </div>
                <div className="p-4">
                  <div className="product-name text-sm tracking-[0.12em] mb-1">{product.name}</div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[var(--color-taupe)]">${product.price}</span>
                    <span className="text-xs text-[var(--color-gold)]">★★★★ {product.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Main App
function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
          <CartDrawer />
        </div>
      </CartProvider>
    </Router>
  )
}

export default App
