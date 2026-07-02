import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, X, Plus, Minus, Star } from 'lucide-react';
import { Toaster, toast } from 'sonner';

// Cart Context
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, variant = 'Gold', quantity = 1) => {
    const cartItem = {
      ...product,
      selectedVariant: variant,
      cartId: `${product.id}-${variant}`,
    };
    
    setCart(prev => {
      const existing = prev.findIndex(item => item.cartId === cartItem.cartId);
      if (existing !== -1) {
        const updated = [...prev];
        updated[existing].quantity = (updated[existing].quantity || 1) + quantity;
        return updated;
      }
      return [...prev, { ...cartItem, quantity }];
    });
    
    setIsCartOpen(true);
    toast.success('Added to cart', {
      description: `${product.name} (${variant})`,
      duration: 2000,
    });
  };

  const removeFromCart = (cartId) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prev =>
      prev.map(item =>
        item.cartId === cartId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartTotal,
      cartCount,
      isCartOpen,
      setIsCartOpen,
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Seed Products
const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    price: 42,
    category: "Earrings",
    material: "Gold",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. Perfect for stacking or wearing alone.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    price: 68,
    category: "Necklaces",
    material: "Gold",
    description: "A statement necklace adorned with multicolor floral crystals. Each piece is hand-assembled.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    price: 38,
    category: "Huggies",
    material: "Gold",
    description: "Chunky dome huggie earrings with a sculptural silhouette. Bold yet refined.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    price: 54,
    category: "Earrings",
    material: "Gold",
    description: "Intricate filigree drop earrings with a textured gold finish. Lightweight and elegant.",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    price: 95,
    category: "Earrings",
    material: "Gold",
    description: "A curated gift set featuring matching earrings and necklace. Presented in a velvet box.",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    rating: 5.0,
  },
];

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${isScrolled ? 'nav-solid' : 'nav-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="serif text-2xl tracking-[0.3em] text-[#2C2823]">
          VELMORA
        </Link>

        <div className="nav-center hidden md:flex items-center gap-10 text-sm tracking-[0.15em] uppercase">
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/shop?category=Collections" className="nav-link">Collections</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/journal" className="nav-link">Journal</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:text-[#B8976E] transition-colors">
            <Search size={18} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-2 hover:text-[#B8976E] transition-colors relative"
          >
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#B8976E] text-white text-xs rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

// Cart Drawer
const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <>
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="p-6 border-b flex items-center justify-between">
          <h3 className="serif text-xl tracking-[0.15em]">Your Cart</h3>
          <button onClick={() => setIsCartOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="p-6 text-center text-[#6B665F]">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="p-6 space-y-6 flex-1">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F5F1EA] flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-sm tracking-[0.1em]">{item.name}</p>
                        <p className="text-xs text-[#6B665F] mt-0.5">{item.selectedVariant}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.cartId)}>
                        <X size={14} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DFD3]">
                        <button 
                          onClick={() => updateQuantity(item.cartId, (item.quantity || 1) - 1)}
                          className="p-1.5 hover:bg-[#F5F1EA]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity || 1}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, (item.quantity || 1) + 1)}
                          className="p-1.5 hover:bg-[#F5F1EA]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-sm">${(item.price * (item.quantity || 1)).toFixed(0)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t mt-auto">
              <div className="flex justify-between mb-6 text-sm tracking-[0.1em] uppercase">
                <span>Total</span>
                <span>${cartTotal}</span>
              </div>
              <button 
                className="btn btn-gold w-full"
                onClick={() => {
                  toast.success('Checkout initiated', {
                    description: 'This would connect to your payment provider.',
                  });
                }}
              >
                Proceed to Checkout
              </button>
              <p className="text-center text-xs text-[#6B665F] mt-4 tracking-[0.05em]">
                Free worldwide shipping on orders over $75
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

// Homepage
const Home = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const bestsellers = products.slice(0, 5);
  const ugcCaptions = [
    "Golden hour glow",
    "Everyday elegance",
    "Stacking season",
    "Soft light, strong lines",
    "Treasured moments",
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#2C2823] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=2000&q=80')] bg-cover bg-center opacity-90" />
        <div className="relative z-10 text-center px-6">
          <h1 className="serif text-[72px] md:text-[88px] text-white tracking-[0.15em] leading-none mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/80 text-lg mb-10 tracking-[0.1em]">Demi-fine jewelry for the modern woman</p>
          <Link to="/shop" className="btn btn-gold inline-block">Shop the Collection</Link>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-2 text-xs tracking-[0.2em] text-[#6B665F] uppercase text-center">
            <span>Free Worldwide Shipping</span>
            <span>30-Day Returns</span>
            <span>18K Gold Plated</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="section max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#6B665F] uppercase mb-2">Signature Pieces</p>
            <h2 className="serif text-4xl tracking-[0.1em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] underline underline-offset-4 hidden md:block">View All</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <div className="product-image-container">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image product-image-primary" 
                />
                <img 
                  src={product.image2} 
                  alt={product.name} 
                  className="product-image product-image-secondary" 
                />
                <button 
                  className="quick-add"
                  onClick={() => addToCart(product)}
                >
                  Quick Add
                </button>
              </div>
              <div className="p-4">
                <Link to={`/product/${product.id}`} className="block">
                  <p className="product-name text-sm tracking-[0.15em] mb-1 group-hover:text-[#B8976E] transition-colors">
                    {product.name}
                  </p>
                </Link>
                <p className="text-sm text-[#6B665F]">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.3em] text-[#6B665F] uppercase mb-8 text-center">As Seen On You</p>
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {ugcCaptions.map((caption, idx) => (
              <div key={idx} className="ugc-card">
                <img 
                  src={`https://images.unsplash.com/photo-${['1535632066927-ab7c9ab60908','1611085583191-a3b181a88401','1506630448388-4e683c67ddb0','1617038260897-41a1f14a8ca0','1599643478518-a784e5dc4c8f'][idx]}?w=400&q=80`} 
                  alt={caption} 
                />
                <div className="ugc-caption">{caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="section max-w-7xl mx-auto px-6">
        <p className="text-xs tracking-[0.3em] text-[#6B665F] uppercase mb-8 text-center">Shop by Category</p>
        <div className="grid md:grid-cols-3 gap-4">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat, idx) => (
            <div 
              key={idx} 
              className="category-tile"
              onClick={() => navigate(`/shop?category=${cat}`)}
            >
              <img 
                src={`https://images.unsplash.com/photo-${['1535632066927-ab7c9ab60908','1599643478518-a784e5dc4c8f','1611085583191-a3b181a88401'][idx]}?w=800&q=80`} 
                alt={cat} 
              />
              <div className="overlay">
                <span className="label">{cat}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="section bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F5F1EA]">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1000&q=80" 
              alt="Velmora atelier" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] text-[#6B665F] uppercase mb-4">Since 2018</p>
            <h3 className="serif text-4xl tracking-[0.1em] mb-6">Our Story</h3>
            <p className="text-[#6B665F] leading-relaxed mb-8">
              Velmora was born from a desire to create jewelry that feels both timeless and modern. 
              Each piece is crafted with intention, using only the finest materials that last a lifetime.
            </p>
            <Link to="/about" className="btn btn-outline inline-block">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-[0.3em] text-[#6B665F] uppercase mb-10 text-center">Words from our community</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for a year and they still look brand new." },
            { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. The perfect gift for my sister." },
            { name: "Amara K.", text: "Finally found pieces that don't irritate my sensitive skin. The gold tone is so rich." },
          ].map((review, idx) => (
            <div key={idx} className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#B8976E] text-[#B8976E]" />)}
              </div>
              <p className="text-[#6B665F] italic mb-4">"{review.text}"</p>
              <p className="text-sm tracking-[0.1em]">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter section">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="serif text-3xl tracking-[0.1em] mb-4 text-white">Join for 10% off</h3>
          <p className="text-white/70 mb-8 text-sm tracking-[0.05em]">Be the first to know about new arrivals and exclusive offers.</p>
          <form className="flex" onSubmit={(e) => { e.preventDefault(); toast.success('Welcome to Velmora'); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/40" 
              required 
            />
            <button type="submit" className="btn btn-gold">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2823] text-white/60 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12 text-sm">
          <div>
            <p className="serif text-white text-xl tracking-[0.3em] mb-4">VELMORA</p>
            <p className="text-xs tracking-[0.1em]">Fine Jewelry</p>
          </div>
          <div>
            <p className="text-white tracking-[0.15em] mb-4 text-xs uppercase">Shop</p>
            <div className="space-y-2 text-xs">
              <Link to="/shop" className="block hover:text-white">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-white">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-white">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-white">Huggies</Link>
            </div>
          </div>
          <div>
            <p className="text-white tracking-[0.15em] mb-4 text-xs uppercase">Help</p>
            <div className="space-y-2 text-xs">
              <a href="#" className="block hover:text-white">Shipping</a>
              <a href="#" className="block hover:text-white">Returns</a>
              <a href="#" className="block hover:text-white">Care Guide</a>
              <a href="#" className="block hover:text-white">Contact</a>
            </div>
          </div>
          <div>
            <p className="text-white tracking-[0.15em] mb-4 text-xs uppercase">Company</p>
            <div className="space-y-2 text-xs">
              <Link to="/about" className="block hover:text-white">Our Story</Link>
              <Link to="/journal" className="block hover:text-white">Journal</Link>
              <a href="#" className="block hover:text-white">Sustainability</a>
              <a href="#" className="block hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs tracking-[0.1em]">
          <p>© 2026 Velmora. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Visa</span><span>Mastercard</span><span>Amex</span><span>PayPal</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Product Detail Page
const ProductDetail = () => {
  const { id } = window.location.pathname.match(/\/product\/(\d+)/) || { id: '1' };
  const product = products.find(p => p.id === parseInt(id)) || products[0];
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div className="pt-20 max-w-7xl mx-auto px-6 pb-24">
      <div className="grid md:grid-cols-2 gap-12 pt-12">
        {/* Gallery */}
        <div>
          <div className="aspect-square bg-[#F5F1EA] mb-4">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[product.image, product.image2, product.image, product.image2].map((img, idx) => (
              <div key={idx} className="aspect-square bg-[#F5F1EA] cursor-pointer">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="pt-4">
          <p className="product-name text-3xl tracking-[0.2em] mb-3">{product.name}</p>
          <p className="text-2xl mb-4">${product.price}</p>
          
          <div className="flex items-center gap-2 mb-8">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#B8976E] text-[#B8976E]" />)}</div>
            <span className="text-sm text-[#6B665F]">({product.rating})</span>
          </div>

          <p className="text-[#6B665F] leading-relaxed mb-8 pr-4">{product.description}</p>

          {/* Variants */}
          <div className="mb-8">
            <p className="text-xs tracking-[0.15em] uppercase text-[#6B665F] mb-3">Tone</p>
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
            <p className="text-xs tracking-[0.15em] uppercase text-[#6B665F] mb-3">Quantity</p>
            <div className="flex items-center border border-[#E5DFD3] w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3"><Minus size={16} /></button>
              <span className="px-6">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-3"><Plus size={16} /></button>
            </div>
          </div>

          <button 
            onClick={() => addToCart(product, selectedVariant, quantity)}
            className="btn btn-gold w-full mb-4"
          >
            Add to Cart
          </button>

          {/* Accordions */}
          <div className="mt-12 divide-y divide-[#E5DFD3]">
            {[
              { key: 'desc', label: 'Description', content: 'Each piece is hand-finished in our atelier using traditional techniques passed down through generations. Our demi-fine collection offers the beauty of fine jewelry at an accessible price point.' },
              { key: 'care', label: 'Materials & Care', content: '18K gold plated over sterling silver base. Hypoallergenic and tarnish-resistant. Avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided pouch.' },
              { key: 'ship', label: 'Shipping & Returns', content: 'Complimentary worldwide shipping on all orders. Returns accepted within 30 days. Items must be unworn with original packaging.' },
            ].map(({ key, label, content }) => (
              <div key={key}>
                <div className="accordion-header" onClick={() => toggleAccordion(key)}>
                  <span>{label}</span>
                  <span className="text-xl leading-none">{openAccordion === key ? '−' : '+'}</span>
                </div>
                {openAccordion === key && (
                  <div className="accordion-content text-sm">{content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-24">
        <p className="text-xs tracking-[0.3em] text-[#6B665F] uppercase mb-8">You May Also Like</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedProducts.map(p => (
            <Link key={p.id} to={`/product/${p.id}`} className="group">
              <div className="aspect-square bg-[#F5F1EA] mb-3 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <p className="product-name text-sm tracking-[0.1em] mb-0.5 group-hover:text-[#B8976E]">{p.name}</p>
              <p className="text-sm text-[#6B665F]">${p.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// Shop Page
const Shop = () => {
  const [searchParams] = React.useState(new URLSearchParams(window.location.search));
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const { addToCart } = useCart();

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];

  let filtered = [...products];

  if (selectedCategory !== 'All') {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

  if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price);
  if (sortBy === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="pt-20 max-w-7xl mx-auto px-6 pb-24">
      <div className="flex items-end justify-between py-12">
        <div>
          <p className="text-xs tracking-[0.3em] text-[#6B665F]">Discover</p>
          <h1 className="serif text-5xl tracking-[0.1em]">The Collection</h1>
        </div>
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-[#E5DFD3] px-4 py-2 text-sm bg-white"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">A — Z</option>
        </select>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Filters */}
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div className="mb-8">
              <p className="filter-label">Category</p>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`block text-sm py-1 ${selectedCategory === cat ? 'text-[#B8976E]' : 'text-[#6B665F] hover:text-[#2C2823]'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div>
              <p className="filter-label">Price Range</p>
              <div className="flex items-center gap-3 text-sm">
                <input 
                  type="number" 
                  value={priceRange[0]} 
                  onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                  className="w-16 border border-[#E5DFD3] px-2 py-1" 
                />
                <span>—</span>
                <input 
                  type="number" 
                  value={priceRange[1]} 
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 120])}
                  className="w-16 border border-[#E5DFD3] px-2 py-1" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="md:col-span-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map(product => (
              <div key={product.id} className="product-card group">
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} className="product-image product-image-primary" />
                  <img src={product.image2} alt={product.name} className="product-image product-image-secondary" />
                  <button 
                    className="quick-add"
                    onClick={() => addToCart(product)}
                  >
                    Quick Add
                  </button>
                </div>
                <Link to={`/product/${product.id}`} className="block p-4">
                  <p className="product-name text-sm tracking-[0.15em] mb-1 group-hover:text-[#B8976E] transition-colors">
                    {product.name}
                  </p>
                  <p className="text-sm text-[#6B665F]">${product.price}</p>
                </Link>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center py-12 text-[#6B665F]">No products match your filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

// About Page
const About = () => (
  <div className="pt-20 max-w-3xl mx-auto px-6 pb-24">
    <div className="py-16 text-center">
      <p className="text-xs tracking-[0.3em] text-[#6B665F] mb-4">Est. 2018</p>
      <h1 className="serif text-6xl tracking-[0.1em] mb-8">Our Story</h1>
    </div>
    
    <div className="prose prose-neutral max-w-none text-[#6B665F] leading-relaxed space-y-6">
      <p>Velmora was founded with a simple belief: that beautiful, well-made jewelry should be accessible without compromise.</p>
      <p>Our demi-fine collection bridges the gap between fine jewelry and fast fashion. Each piece is crafted using traditional techniques and the highest quality materials—18K gold plating over sterling silver, natural crystals, and hypoallergenic findings.</p>
      <p>We design for the woman who values intention over excess. Jewelry that becomes part of her daily ritual, that she reaches for again and again.</p>
    </div>

    <div className="mt-16 pt-16 border-t border-[#E5DFD3] grid md:grid-cols-3 gap-8 text-sm">
      <div>
        <p className="tracking-[0.15em] uppercase mb-3 text-[#B8976E]">Handcrafted</p>
        <p className="text-[#6B665F]">Every piece is finished by hand in our small atelier.</p>
      </div>
      <div>
        <p className="tracking-[0.15em] uppercase mb-3 text-[#B8976E]">Ethically Sourced</p>
        <p className="text-[#6B665F]">We partner only with suppliers who share our values.</p>
      </div>
      <div>
        <p className="tracking-[0.15em] uppercase mb-3 text-[#B8976E]">Designed to Last</p>
        <p className="text-[#6B665F]">Quality that withstands daily wear for years to come.</p>
      </div>
    </div>
  </div>
);

// Journal Page
const Journal = () => (
  <div className="pt-20 max-w-4xl mx-auto px-6 pb-24">
    <div className="py-16 text-center">
      <h1 className="serif text-6xl tracking-[0.1em]">Journal</h1>
      <p className="mt-4 text-[#6B665F]">Stories, styling notes, and behind the scenes.</p>
    </div>

    <div className="space-y-16">
      {[
        { title: "How to Style Gold Jewelry Year-Round", excerpt: "From summer linen to winter layers, discover the versatility of warm metallics." },
        { title: "Behind the Design: The Sphere Collection", excerpt: "The sculptural forms that define our newest huggie silhouettes." },
        { title: "Caring for Your Demi-Fine Pieces", excerpt: "Simple rituals to keep your jewelry looking its best for years." },
      ].map((post, idx) => (
        <article key={idx} className="border-b border-[#E5DFD3] pb-16 last:border-0">
          <p className="text-xs tracking-[0.2em] text-[#6B665F] mb-3">EDITORIAL · 2026</p>
          <h3 className="serif text-3xl tracking-[0.05em] mb-4">{post.title}</h3>
          <p className="text-[#6B665F] mb-6">{post.excerpt}</p>
          <a href="#" className="text-sm tracking-[0.1em] underline underline-offset-4">Read More</a>
        </article>
      ))}
    </div>
  </div>
);

// Main App
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
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
          </Routes>
          <CartDrawer />
          <Toaster position="bottom-center" richColors closeButton />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
