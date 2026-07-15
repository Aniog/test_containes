import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, X, Plus, Minus, Star, Menu } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import { CartProvider, useCart } from './context/CartContext';
import { products, getProductById, getRelatedProducts } from './data/products';
import './App.css';

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/' },
    { label: 'Journal', path: '/' },
  ];

  return (
    <nav className={`nav fixed top-0 left-0 right-0 z-50 border-b border-transparent ${isScrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="serif text-2xl tracking-[0.2em] text-[#2C2825]">
          VELMORA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.1em]">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.path} className="hover:text-[#B89778] transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-[#F8F6F3] rounded-full transition-colors" aria-label="Search">
            <Search className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)} 
            className="p-2 hover:bg-[#F8F6F3] rounded-full transition-colors relative"
            aria-label="Cart"
          >
            <ShoppingCart className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#B89778] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-white px-6 py-4 flex flex-col gap-3 text-sm"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.path} 
                className="py-2" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Cart Drawer
const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-[60]" onClick={() => setIsCartOpen(false)} />
          <div className={`cart-drawer fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-xl flex flex-col ${isCartOpen ? 'open' : ''}`}>
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="serif text-xl">Your Cart</h3>
              <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
                <X className="w-5 h-5" />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
                <ShoppingCart className="w-12 h-12 text-[#E5E0D8] mb-4" />
                <p className="text-[#6B665F]">Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-auto p-6 space-y-6">
                  {cart.map((item) => (
                    <div key={item.cartId} className="flex gap-4">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between">
                          <div>
                            <p className="product-name text-sm tracking-wider">{item.name}</p>
                            <p className="text-xs text-[#6B665F] mt-0.5">{item.selectedVariant}</p>
                          </div>
                          <button onClick={() => removeFromCart(item.cartId)} aria-label="Remove">
                            <X className="w-4 h-4 text-[#6B665F]" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border rounded">
                            <button onClick={() => updateQuantity(item.cartId, item.quantity - 1)} className="p-1.5">
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 text-sm">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.cartId, item.quantity + 1)} className="p-1.5">
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <p className="font-medium">${(item.price * item.quantity).toFixed(0)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-6 border-t space-y-4">
                  <div className="flex justify-between text-lg">
                    <span>Total</span>
                    <span className="font-medium">${cartTotal}</span>
                  </div>
                  <button 
                    className="btn-primary w-full py-4 rounded-none text-sm tracking-[0.1em]"
                    onClick={() => {
                      toast.success('Checkout would open here');
                      setIsCartOpen(false);
                    }}
                  >
                    PROCEED TO CHECKOUT
                  </button>
                  <p className="text-center text-xs text-[#6B665F]">Free worldwide shipping on orders over $75</p>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

// Product Card
const ProductCard = ({ product, onQuickAdd }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F8F6F3] mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image-primary absolute inset-0 w-full h-full object-cover"
        />
        <img 
          src={product.imageSecondary} 
          alt={product.name} 
          className="product-image-secondary absolute inset-0 w-full h-full object-cover"
        />
        <button 
          onClick={(e) => { e.preventDefault(); onQuickAdd(product); }}
          className="absolute bottom-4 right-4 bg-white px-5 py-2 text-xs tracking-[0.1em] opacity-0 group-hover:opacity-100 transition-all btn-outline"
        >
          QUICK ADD
        </button>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="product-name text-sm tracking-wider">{product.name}</h3>
          <p className="text-xs text-[#6B665F] mt-1">{product.category}</p>
        </div>
        <p className="font-medium text-sm">${product.price}</p>
      </div>
    </Link>
  );
};

// Homepage
const Home = () => {
  const { addToCart } = useCart();

  const handleQuickAdd = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  const bestsellers = products.slice(0, 5);
  const ugcCaptions = [
    "Golden hour glow",
    "Everyday elegance",
    "Treasured forever",
    "Soft light, strong gold",
    "Worn with love",
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#2C2825] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80" 
          alt="Velmora Jewelry" 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[0.1em] mb-6">Crafted to be Treasured</h1>
          <p className="text-white/90 text-lg mb-8 tracking-wide">Demi-fine gold jewelry, made to last a lifetime.</p>
          <Link to="/shop" className="btn-primary inline-block px-10 py-4 text-sm tracking-[0.15em]">
            SHOP THE COLLECTION
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b py-4 text-center text-xs tracking-[0.15em] text-[#6B665F] flex flex-wrap justify-center gap-x-8 gap-y-1">
        <span>Free Worldwide Shipping</span>
        <span>30-Day Returns</span>
        <span>18K Gold Plated</span>
        <span>Hypoallergenic</span>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <h2 className="serif text-4xl tracking-[0.05em]">Bestsellers</h2>
          <Link to="/shop" className="text-sm tracking-[0.1em] hover:text-[#B89778]">VIEW ALL →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {bestsellers.map((p) => (
            <ProductCard key={p.id} product={p} onQuickAdd={handleQuickAdd} />
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-[#F8F6F3] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm tracking-[0.2em] text-[#6B665F] mb-8">AS SEEN ON YOU</p>
          <div className="ugc-scroll flex gap-4 overflow-x-auto pb-4">
            {[1,2,3,4,5].map((i, idx) => (
              <div key={i} className="relative flex-shrink-0 w-[180px] aspect-[9/16] bg-[#2C2825] overflow-hidden rounded">
                <img 
                  src={['https://picsum.photos/id/1011/400/700','https://picsum.photos/id/1005/400/700','https://picsum.photos/id/106/400/700','https://picsum.photos/id/201/400/700','https://picsum.photos/id/160/400/700'][idx]}
                  alt="UGC" 
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="serif text-white text-sm tracking-wide">{ugcCaptions[idx]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="serif text-4xl tracking-[0.05em] text-center mb-12">Shop by Category</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat, idx) => (
            <Link key={cat} to="/shop" className="category-tile group relative aspect-[4/3] overflow-hidden bg-[#2C2825]">
              <img 
                src={['https://picsum.photos/id/1011/800/600','https://picsum.photos/id/106/800/600','https://picsum.photos/id/201/800/600'][idx]} 
                alt={cat} 
                className="w-full h-full object-cover"
              />
              <div className="overlay absolute inset-0 bg-black/40 flex items-center justify-center opacity-0">
                <span className="text-white text-xl tracking-[0.2em] serif">{cat}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/3] bg-[#F8F6F3]">
          <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80" alt="Our Story" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="uppercase tracking-[0.2em] text-xs text-[#B89778] mb-3">EST. 2018</p>
          <h2 className="serif text-5xl tracking-[0.05em] mb-6">Our Story</h2>
          <p className="text-[#6B665F] leading-relaxed mb-8">
            Velmora was born from a desire to create jewelry that feels as meaningful as it is beautiful. 
            Each piece is crafted with intention, using only the finest materials, designed to be worn daily 
            and treasured for years to come.
          </p>
          <Link to="/" className="btn-outline px-8 py-3 text-sm tracking-[0.1em]">LEARN MORE</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F8F6F3] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="serif text-4xl tracking-[0.05em] mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { name: "Elena R.", text: "The quality is unmatched. My huggies have become my everyday staple." },
              { name: "Maya K.", text: "Bought the Royal Heirloom Set as a gift — she absolutely loved it." },
              { name: "Sofia L.", text: "Beautiful packaging and even more beautiful jewelry. Will be back!" },
            ].map((t, i) => (
              <div key={i} className="bg-white p-8">
                <div className="flex gap-0.5 mb-4">
                  {Array(5).fill(0).map((_, j) => <Star key={j} className="w-4 h-4 fill-[#B89778] text-[#B89778]" />)}
                </div>
                <p className="text-[#6B665F] mb-4">"{t.text}"</p>
                <p className="text-sm tracking-wide">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-xl mx-auto px-6 py-20 text-center">
        <h2 className="serif text-4xl tracking-[0.05em] mb-3">Join for 10% off</h2>
        <p className="text-[#6B665F] mb-8">Be the first to know about new arrivals and exclusive offers.</p>
        <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); toast.success('Welcome to Velmora'); }}>
          <input type="email" placeholder="Your email address" className="newsletter-input flex-1 px-5 py-3 text-sm" required />
          <button type="submit" className="btn-primary px-8 text-sm tracking-[0.1em]">JOIN</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t pt-16 pb-10 text-sm">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12">
          <div>
            <div className="serif text-xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-[#6B665F]">Fine jewelry, thoughtfully made.</p>
          </div>
          <div>
            <div className="font-medium mb-4 tracking-wide">SHOP</div>
            <div className="space-y-2 text-[#6B665F]">
              <div>Earrings</div><div>Necklaces</div><div>Huggies</div><div>Gift Sets</div>
            </div>
          </div>
          <div>
            <div className="font-medium mb-4 tracking-wide">HELP</div>
            <div className="space-y-2 text-[#6B665F]">
              <div>Shipping</div><div>Returns</div><div>Care Guide</div><div>Contact</div>
            </div>
          </div>
          <div>
            <div className="font-medium mb-4 tracking-wide">COMPANY</div>
            <div className="space-y-2 text-[#6B665F]">
              <div>Our Story</div><div>Journal</div><div>Stockists</div>
            </div>
            <div className="mt-6 flex gap-4 text-[#6B665F]">
              <span>IG</span><span>PT</span><span>TT</span>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-[#6B665F] mt-16 tracking-wider">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
      </footer>
    </div>
  );
};

// Product Detail Page
const ProductDetail = () => {
  const { addToCart } = useCart();
  const [variant, setVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const location = useLocation();
  const productId = location.pathname.split('/').pop();
  const product = getProductById(productId);
  const related = getRelatedProducts(productId);

  if (!product) return <div className="pt-20 p-6">Product not found</div>;

  const handleAdd = () => {
    addToCart(product, variant, quantity);
    toast.success(`${product.name} added to cart`);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div className="pt-20 max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Gallery */}
        <div>
          <div className="aspect-square bg-[#F8F6F3] mb-4 overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[product.image, product.imageSecondary, product.image, product.imageSecondary].map((img, i) => (
              <div key={i} className="aspect-square bg-[#F8F6F3] overflow-hidden cursor-pointer">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="pt-2">
          <h1 className="product-name text-3xl tracking-[0.15em] mb-2">{product.name}</h1>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-0.5">
              {Array(5).fill(0).map((_, i) => <Star key={i} className="w-4 h-4 fill-[#B89778] text-[#B89778]" />)}
            </div>
            <span className="text-sm text-[#6B665F]">{product.rating}</span>
          </div>
          <p className="text-2xl mb-8">${product.price}</p>

          <p className="text-[#6B665F] mb-8 leading-relaxed">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-8">
            <p className="text-xs tracking-[0.15em] mb-3">TONE</p>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((v) => (
                <button 
                  key={v} 
                  onClick={() => setVariant(v)}
                  className={`variant-pill px-6 py-2 text-sm ${variant === v ? 'active' : ''}`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <p className="text-xs tracking-[0.15em] mb-3">QUANTITY</p>
            <div className="flex items-center border w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3"><Minus className="w-3 h-3" /></button>
              <span className="px-6">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-3"><Plus className="w-3 h-3" /></button>
            </div>
          </div>

          <button onClick={handleAdd} className="btn-primary w-full py-4 text-sm tracking-[0.15em] mb-10">
            ADD TO CART
          </button>

          {/* Accordions */}
          <div className="border-t divide-y">
            {[
              { key: 'desc', label: 'Description', content: 'Each piece is hand-finished in our atelier using traditional techniques passed down through generations. Our demi-fine jewelry is designed for everyday wear while maintaining its beauty over time.' },
              { key: 'care', label: 'Materials & Care', content: '18K gold plated over sterling silver base. Hypoallergenic and tarnish-resistant. Avoid contact with perfumes and lotions. Store in the provided pouch when not in use.' },
              { key: 'ship', label: 'Shipping & Returns', content: 'Complimentary worldwide shipping on all orders. Returns accepted within 30 days. Items must be unworn with original packaging.' },
            ].map((acc) => (
              <div key={acc.key}>
                <button 
                  onClick={() => toggleAccordion(acc.key)} 
                  className="accordion-trigger w-full flex justify-between py-5 text-left"
                >
                  <span className="tracking-[0.1em] text-sm">{acc.label}</span>
                  <span className="text-xl leading-none">{openAccordion === acc.key ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-[#6B665F] text-sm leading-relaxed ${openAccordion === acc.key ? 'open' : ''}`}>
                  <p className="pb-5 pr-8">{acc.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20">
        <h3 className="serif text-3xl tracking-[0.05em] mb-10 text-center">You May Also Like</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} onQuickAdd={(prod) => { addToCart(prod); toast.success(`${prod.name} added`); }} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Shop / Collection Page
const Shop = () => {
  const { addToCart } = useCart();
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');

  const filtered = products
    .filter(p => categoryFilter.length === 0 || categoryFilter.includes(p.category))
    .filter(p => p.price >= priceFilter[0] && p.price <= priceFilter[1])
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

  const toggleCategory = (cat) => {
    setCategoryFilter(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleQuickAdd = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="pt-20 max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-end mb-10">
        <h1 className="serif text-5xl tracking-[0.05em]">Shop All</h1>
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          className="border px-4 py-2 text-sm bg-transparent"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      <div className="grid md:grid-cols-5 gap-10">
        {/* Filters */}
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div className="mb-8">
              <p className="text-xs tracking-[0.15em] mb-4">CATEGORY</p>
              {['Earrings', 'Necklaces', 'Huggies', 'Sets'].map(cat => (
                <label key={cat} className="flex items-center gap-2 py-1 cursor-pointer text-sm">
                  <input 
                    type="checkbox" 
                    checked={categoryFilter.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                    className="filter-checkbox"
                  />
                  {cat}
                </label>
              ))}
            </div>
            <div>
              <p className="text-xs tracking-[0.15em] mb-4">PRICE</p>
              <input 
                type="range" 
                min="0" 
                max="120" 
                value={priceFilter[1]} 
                onChange={(e) => setPriceFilter([0, parseInt(e.target.value)])}
                className="w-full accent-[#B89778]"
              />
              <div className="flex justify-between text-xs text-[#6B665F] mt-1">
                <span>$0</span>
                <span>${priceFilter[1]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="md:col-span-4">
          <p className="text-sm text-[#6B665F] mb-6">{filtered.length} products</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onQuickAdd={handleQuickAdd} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App
function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-[#F8F6F3]">
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
    </Router>
  );
}

export default App;
