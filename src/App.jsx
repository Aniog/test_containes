import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, X, Plus, Minus, Star } from 'lucide-react';

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
  };

  const removeFromCart = (cartId) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prev => prev.map(item => 
      item.cartId === cartId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <CartContext.Provider value={{
      cart, addToCart, removeFromCart, updateQuantity, 
      cartTotal, cartCount, isCartOpen, setIsCartOpen
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
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. Perfect for stacking or wearing alone.",
    price: 42,
    category: "Earrings",
    material: "Gold",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "An exquisite multicolor floral crystal necklace that captures light with every movement.",
    price: 68,
    category: "Necklaces",
    material: "Gold",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined.",
    price: 38,
    category: "Huggies",
    material: "Gold",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Intricately textured gold filigree drop earrings inspired by vintage lacework.",
    price: 54,
    category: "Earrings",
    material: "Gold",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "A curated gift-boxed pairing of our signature earrings and necklace. The perfect present.",
    price: 95,
    category: "Sets",
    material: "Gold",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
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
    <nav className={`nav ${isScrolled ? 'solid' : 'transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-[#2C2823]">
          VELMORA
        </Link>
        
        <div className="nav-links flex items-center gap-10 text-sm tracking-[0.1em] uppercase">
          <Link to="/shop" className="hover:text-[#8B7355] transition-colors">Shop</Link>
          <Link to="/shop" className="hover:text-[#8B7355] transition-colors">Collections</Link>
          <a href="#about" className="hover:text-[#8B7355] transition-colors">About</a>
          <a href="#journal" className="hover:text-[#8B7355] transition-colors">Journal</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/50 rounded-full transition-colors">
            <Search size={18} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-2 hover:bg-white/50 rounded-full transition-colors relative"
          >
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#8B7355] text-white text-xs rounded-full flex items-center justify-center">
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
          <h3 className="font-serif text-xl">Your Cart</h3>
          <button onClick={() => setIsCartOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="p-6 text-center text-[#6B665F]">
            Your cart is empty
          </div>
        ) : (
          <>
            <div className="p-6 space-y-6 flex-1">
              {cart.map(item => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F5F2EB] flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-sm tracking-wider">{item.name}</p>
                        <p className="text-xs text-[#6B665F] mt-1">{item.selectedVariant}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.cartId)}>
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DFD3]">
                        <button 
                          onClick={() => updateQuantity(item.cartId, (item.quantity || 1) - 1)}
                          className="p-1.5 hover:bg-[#F8F5F1]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity || 1}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, (item.quantity || 1) + 1)}
                          className="p-1.5 hover:bg-[#F8F5F1]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="font-medium">${item.price * (item.quantity || 1)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t mt-auto">
              <div className="flex justify-between mb-6 text-lg">
                <span>Total</span>
                <span className="font-medium">${cartTotal}</span>
              </div>
              <button className="btn-primary w-full mb-3">
                Proceed to Checkout
              </button>
              <p className="text-center text-xs text-[#6B665F]">
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
const HomePage = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const bestsellers = products.slice(0, 5);
  const ugcCaptions = [
    "Morning light in the garden",
    "Stacked for the evening",
    "A gift from her",
    "Everyday elegance",
    "Golden hour glow",
  ];

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#2C2823] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1600&q=80" 
          alt="Velmora Jewelry" 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-6xl md:text-7xl text-white tracking-[0.15em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/80 text-lg mb-10 tracking-wide">
            Demi-fine gold jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn-primary bg-white text-[#2C2823] hover:bg-[#F8F5F1]">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="trust-bar py-4 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-2 text-xs tracking-[0.15em] text-[#6B665F] text-center">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">DISCOVER</p>
            <h2 className="font-serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-widest hover:text-[#8B7355] transition-colors">VIEW ALL →</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map(product => (
            <div key={product.id} className="product-card group">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image primary" />
                <img src={product.image2} alt={product.name} className="product-image secondary" />
                <button 
                  onClick={() => addToCart(product)}
                  className="quick-add"
                >
                  Quick Add
                </button>
              </div>
              <div className="p-5">
                <Link to={`/product/${product.id}`} className="product-name text-sm block mb-1 hover:text-[#8B7355] transition-colors">
                  {product.name}
                </Link>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#6B665F]">${product.price}</span>
                  <div className="flex text-[#C5A46E]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* UGC Reel Row */}
      <div className="bg-[#F8F5F1] py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">AS SEEN ON</p>
          <h2 className="font-serif text-3xl">Worn by You</h2>
        </div>
        <div className="flex gap-4 pl-6 overflow-x-auto pb-4 scrollbar-hide">
          {ugcCaptions.map((caption, idx) => (
            <div key={idx} className="ugc-card">
              <img 
                src={`https://images.unsplash.com/photo-${['1535632066927-ab7c9ab60908','1599643478518-a784e5dc4c8f','1599643478518-a784e5dc4c8f','1611085583191-a3b181a88401','1506630448388-4e683c67ddb0'][idx]}?w=400&q=80`} 
                alt={caption} 
              />
              <div className="ugc-caption">{caption}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Shop by Category */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">EXPLORE</p>
          <h2 className="font-serif text-4xl">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat, idx) => (
            <Link key={idx} to="/shop" className="category-tile group">
              <img 
                src={`https://images.unsplash.com/photo-${['1535632066927-ab7c9ab60908','1599643478518-a784e5dc4c8f','1611085583191-a3b181a88401'][idx]}?w=800&q=80`} 
                alt={cat} 
                className="w-full h-full object-cover"
              />
              <div className="category-overlay">
                <span className="category-label">{cat}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Brand Story */}
      <div id="about" className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/3] bg-[#F5F2EB]">
          <img 
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" 
            alt="Our Story" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-4">EST. 2019</p>
          <h2 className="font-serif text-5xl mb-6 leading-none">Our Story</h2>
          <p className="text-[#6B665F] mb-8 leading-relaxed">
            Velmora was born from a desire to create jewelry that feels both precious and wearable. 
            Each piece is thoughtfully designed in our studio and crafted with the finest materials, 
            meant to be treasured for years to come.
          </p>
          <a href="#journal" className="btn-outline">Learn More</a>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">LOVED BY MANY</p>
            <h2 className="font-serif text-4xl">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for a year and they still look brand new." },
              { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift for my sister. She hasn't taken it off since." },
              { name: "Isabella T.", text: "Beautiful packaging and even more beautiful jewelry. Velmora has become my go-to for meaningful gifts." },
            ].map((review, idx) => (
              <div key={idx} className="border border-[#E5DFD3] p-8">
                <div className="flex text-[#C5A46E] mb-4">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-[#6B665F] mb-6 leading-relaxed">"{review.text}"</p>
                <p className="text-sm tracking-widest">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="newsletter py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="font-serif text-3xl mb-4">Join for 10% off</h3>
          <p className="text-white/70 mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          <form className="flex" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-4 bg-white/10 border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:border-white"
              required
            />
            <button type="submit" className="btn-primary bg-white text-[#2C2823] hover:bg-[#F8F5F1] px-8">Join</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2C2823] text-white/70 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12">
          <div>
            <div className="font-serif text-2xl tracking-[0.2em] text-white mb-6">VELMORA</div>
            <p className="text-sm">Fine jewelry, thoughtfully made.</p>
          </div>
          <div>
            <div className="text-white text-sm tracking-widest mb-4">SHOP</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-white">All Jewelry</Link>
              <Link to="/shop" className="block hover:text-white">Earrings</Link>
              <Link to="/shop" className="block hover:text-white">Necklaces</Link>
              <Link to="/shop" className="block hover:text-white">Huggies</Link>
            </div>
          </div>
          <div>
            <div className="text-white text-sm tracking-widest mb-4">HELP</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-white">Shipping</a>
              <a href="#" className="block hover:text-white">Returns</a>
              <a href="#" className="block hover:text-white">Care Guide</a>
              <a href="#" className="block hover:text-white">Contact</a>
            </div>
          </div>
          <div>
            <div className="text-white text-sm tracking-widest mb-4">COMPANY</div>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block hover:text-white">Our Story</a>
              <a href="#journal" className="block hover:text-white">Journal</a>
              <a href="#" className="block hover:text-white">Sustainability</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest">
          <div>© 2026 Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <span>INSTAGRAM</span>
            <span>PINTEREST</span>
            <span>TIKTOK</span>
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
    <div className="pt-20 max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square bg-[#F5F2EB] mb-4 overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[product.image, product.image2, product.image, product.image2].map((img, idx) => (
              <div key={idx} className="aspect-square bg-[#F5F2EB] overflow-hidden cursor-pointer">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-4">
          <h1 className="product-name font-serif text-4xl mb-3 tracking-[0.1em]">{product.name}</h1>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex text-[#C5A46E]">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm text-[#6B665F]">{product.rating}</span>
          </div>
          
          <p className="text-2xl mb-8">${product.price}</p>
          
          <p className="text-[#6B665F] mb-8 leading-relaxed">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-8">
            <p className="text-xs tracking-[0.15em] text-[#6B665F] mb-3">FINISH</p>
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
            <p className="text-xs tracking-[0.15em] text-[#6B665F] mb-3">QUANTITY</p>
            <div className="flex items-center border border-[#E5DFD3] w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-[#F8F5F1]"><Minus size={16} /></button>
              <span className="px-6">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-[#F8F5F1]"><Plus size={16} /></button>
            </div>
          </div>

          <button 
            onClick={() => addToCart(product, selectedVariant, quantity)}
            className="btn-primary w-full mb-4"
          >
            Add to Cart
          </button>
          <p className="text-center text-xs text-[#6B665F]">Ships in 1-2 business days</p>

          {/* Accordions */}
          <div className="mt-12 divide-y divide-[#E5DFD3]">
            {[
              { key: 'desc', title: 'Description', content: 'Each piece is hand-finished in our atelier using traditional techniques passed down through generations. Our demi-fine jewelry is designed to be worn daily and treasured for years.' },
              { key: 'care', title: 'Materials & Care', content: '18K gold plated over sterling silver base. Hypoallergenic and tarnish-resistant. Avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided pouch.' },
              { key: 'ship', title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $75. 30-day returns accepted. Items must be unworn with original packaging.' },
            ].map(({ key, title, content }) => (
              <div key={key}>
                <div className="accordion-header" onClick={() => toggleAccordion(key)}>
                  <span>{title}</span>
                  <span className="text-xl">{openAccordion === key ? '−' : '+'}</span>
                </div>
                <div className={`accordion-content text-[#6B665F] text-sm leading-relaxed ${openAccordion === key ? 'open' : ''}`}>
                  {content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <div className="mt-24">
        <h3 className="font-serif text-3xl mb-10 text-center">You May Also Like</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map(p => (
            <Link key={p.id} to={`/product/${p.id}`} className="product-card group">
              <div className="product-image-container">
                <img src={p.image} alt={p.name} className="product-image primary" />
                <img src={p.image2} alt={p.name} className="product-image secondary" />
              </div>
              <div className="p-5">
                <p className="product-name text-sm mb-1">{p.name}</p>
                <span className="text-sm text-[#6B665F]">${p.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// Shop / Collection Page
const ShopPage = () => {
  const { addToCart } = useCart();
  const [filters, setFilters] = useState({ category: 'All', price: 'All', material: 'All' });
  const [sort, setSort] = useState('featured');

  let filteredProducts = [...products];

  if (filters.category !== 'All') {
    filteredProducts = filteredProducts.filter(p => p.category === filters.category);
  }
  if (filters.material !== 'All') {
    filteredProducts = filteredProducts.filter(p => p.material === filters.material);
  }
  if (filters.price !== 'All') {
    if (filters.price === 'Under $50') filteredProducts = filteredProducts.filter(p => p.price < 50);
    if (filters.price === '$50 - $80') filteredProducts = filteredProducts.filter(p => p.price >= 50 && p.price <= 80);
    if (filters.price === 'Over $80') filteredProducts = filteredProducts.filter(p => p.price > 80);
  }

  if (sort === 'price-low') filteredProducts.sort((a, b) => a.price - b.price);
  if (sort === 'price-high') filteredProducts.sort((a, b) => b.price - a.price);
  if (sort === 'name') filteredProducts.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="pt-20 max-w-7xl mx-auto px-6 py-12">
      <div className="mb-10">
        <p className="text-xs tracking-[0.2em] text-[#8B7355]">DISCOVER</p>
        <h1 className="font-serif text-5xl">The Collection</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Filters */}
        <div className="lg:w-56 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            <div>
              <div className="filter-label">Category</div>
              {['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilters({ ...filters, category: cat })}
                  className={`block text-sm py-1 ${filters.category === cat ? 'text-[#8B7355] font-medium' : 'text-[#6B665F] hover:text-[#2C2823]'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div>
              <div className="filter-label">Price</div>
              {['All', 'Under $50', '$50 - $80', 'Over $80'].map(p => (
                <button
                  key={p}
                  onClick={() => setFilters({ ...filters, price: p })}
                  className={`block text-sm py-1 ${filters.price === p ? 'text-[#8B7355] font-medium' : 'text-[#6B665F] hover:text-[#2C2823]'}`}
                >
                  {p}
                </button>
              ))}
            </div>
            <div>
              <div className="filter-label">Material</div>
              {['All', 'Gold', 'Silver'].map(m => (
                <button
                  key={m}
                  onClick={() => setFilters({ ...filters, material: m })}
                  className={`block text-sm py-1 ${filters.material === m ? 'text-[#8B7355] font-medium' : 'text-[#6B665F] hover:text-[#2C2823]'}`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8 pb-4 border-b">
            <p className="text-sm text-[#6B665F]">{filteredProducts.length} products</p>
            <select 
              value={sort} 
              onChange={(e) => setSort(e.target.value)}
              className="text-sm border border-[#E5DFD3] px-4 py-2 bg-white focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">A - Z</option>
            </select>
          </div>

          <div className="product-grid grid grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card group">
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} className="product-image primary" />
                  <img src={product.image2} alt={product.name} className="product-image secondary" />
                  <button 
                    onClick={() => addToCart(product)}
                    className="quick-add"
                  >
                    Quick Add
                  </button>
                </div>
                <Link to={`/product/${product.id}`} className="block p-5">
                  <p className="product-name text-sm mb-1 hover:text-[#8B7355] transition-colors">{product.name}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#6B665F]">${product.price}</span>
                    <div className="flex text-[#C5A46E]">
                      {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                  </div>
                </Link>
              </div>
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
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-[#F8F5F1]">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
          <CartDrawer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
