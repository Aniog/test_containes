import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ShoppingCart, Search, X, Plus, Minus, Star, ArrowRight, Menu } from 'lucide-react';
import { Toaster, toast } from 'sonner';

// Seed Products
const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. Perfect for stacking or wearing alone.",
    material: "18K Gold Plated Brass, Crystal",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    variant: ["Gold", "Silver"],
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    description: "A statement necklace adorned with multicolor floral crystals. Each piece is hand-assembled.",
    material: "18K Gold Plated Brass, Crystal",
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    variant: ["Gold", "Silver"],
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    description: "Chunky dome huggie earrings with a sculptural silhouette. Bold yet refined.",
    material: "18K Gold Plated Brass",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    variant: ["Gold", "Silver"],
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    description: "Intricate filigree drop earrings with a textured gold finish. Timeless elegance.",
    material: "18K Gold Plated Brass",
    rating: 4.6,
    reviews: 73,
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    variant: ["Gold", "Silver"],
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Earrings",
    price: 95,
    description: "A curated gift set featuring matching earrings and necklace. Presented in a velvet box.",
    material: "18K Gold Plated Brass, Crystal",
    rating: 4.9,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    variant: ["Gold", "Silver"],
  },
];

// UGC Images (simulated reels)
const ugcItems = [
  { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80" },
  { id: 2, caption: "Golden hour", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
  { id: 3, caption: "Effortless", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
  { id: 4, caption: "Everyday luxe", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80" },
  { id: 5, caption: "Soft glow", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80" },
];

// Testimonials
const testimonials = [
  { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for months and they still look brand new.", rating: 5 },
  { name: "Sofia R.", text: "Bought the Flora necklace as a gift for my sister. She hasn't taken it off since.", rating: 5 },
  { name: "Isabella T.", text: "Beautiful packaging and even more beautiful jewelry. My new go-to for special occasions.", rating: 5 },
];

// Cart Context
const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, variant = "Gold", quantity = 1) => {
    const existing = cart.findIndex(
      item => item.id === product.id && item.variant === variant
    );

    if (existing !== -1) {
      const updated = [...cart];
      updated[existing].quantity += quantity;
      setCart(updated);
    } else {
      setCart([...cart, { ...product, variant, quantity }]);
    }
    
    toast.success(`${product.name} added to cart`, {
      description: `$${product.price} × ${quantity}`,
      action: {
        label: "View Cart",
        onClick: () => setIsCartOpen(true),
      },
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    const updated = [...cart];
    updated[index].quantity = newQuantity;
    setCart(updated);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart, addToCart, removeFromCart, updateQuantity, cartTotal, cartCount, isCartOpen, setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  return React.useContext(CartContext);
}

// Navigation Component
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#F8F5F1] border-b border-[#E5DFD3]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="serif text-2xl tracking-[0.2em] text-[#2C2823]">VELMORA</Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.08em] uppercase">
          <Link to="/shop" className="hover:text-[#B8976F] transition-colors">Shop</Link>
          <Link to="/shop" className="hover:text-[#B8976F] transition-colors">Collections</Link>
          <a href="#about" className="hover:text-[#B8976F] transition-colors">About</a>
          <a href="#journal" className="hover:text-[#B8976F] transition-colors">Journal</a>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-[#F5F1EA] rounded-full transition-colors" aria-label="Search">
            <Search size={18} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)} 
            className="p-2 hover:bg-[#F5F1EA] rounded-full transition-colors relative"
            aria-label="Cart"
          >
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#B8976F] text-[#2C2823] text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F8F5F1] border-t border-[#E5DFD3] px-6 py-6 flex flex-col gap-4 text-sm tracking-[0.08em] uppercase">
          <Link to="/shop" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link to="/shop" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
          <a href="#about" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#journal" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>Journal</a>
        </div>
      )}
    </nav>
  );
}

// Cart Drawer
function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    toast.success("Thank you for shopping with Velmora", {
      description: "Checkout would connect to a payment provider.",
    });
  };

  return (
    <>
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/40 z-[60]" onClick={() => setIsCartOpen(false)} />
      )}
      <div className={`cart-drawer fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#F8F5F1] z-[70] shadow-2xl flex flex-col ${isCartOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-[#E5DFD3]">
          <h3 className="serif text-xl tracking-[0.1em]">Your Cart</h3>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <ShoppingCart size={48} className="text-[#A39B8F] mb-4" />
            <p className="text-[#6B665F]">Your cart is empty</p>
            <button 
              onClick={() => { setIsCartOpen(false); navigate('/shop'); }} 
              className="mt-6 btn-outline text-sm"
            >
              Browse Collection
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto p-6 space-y-6">
              {cart.map((item, index) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-sm tracking-[0.1em]">{item.name}</p>
                        <p className="text-xs text-[#6B665F] mt-0.5">{item.variant} Tone</p>
                      </div>
                      <button onClick={() => removeFromCart(index)} aria-label="Remove">
                        <X size={16} className="text-[#A39B8F]" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DFD3]">
                        <button onClick={() => updateQuantity(index, item.quantity - 1)} className="p-1.5 hover:bg-[#F5F1EA]">
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(index, item.quantity + 1)} className="p-1.5 hover:bg-[#F5F1EA]">
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-[#E5DFD3] bg-[#F5F1EA]">
              <div className="flex justify-between mb-6 text-lg">
                <span>Total</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <button onClick={handleCheckout} className="btn-primary w-full">Checkout</button>
              <p className="text-center text-xs text-[#6B665F] mt-4 tracking-[0.05em]">Free worldwide shipping on orders over $75</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

// Homepage
function Home() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [selectedVariant, setSelectedVariant] = useState({});

  const bestsellers = products.slice(0, 5);

  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      {/* Hero */}
      <section className="relative h-[100dvh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#2C2823]">
          <img 
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=2000&q=80" 
            alt="Velmora Fine Jewelry" 
            className="w-full h-full object-cover opacity-75"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-[72px] md:text-[88px] leading-[0.9] tracking-[-0.02em] text-white mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/90 text-lg tracking-[0.05em] mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry, made with intention.
          </p>
          <Link to="/shop" className="btn-primary inline-block">Shop the Collection</Link>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5DFD3] py-4 text-xs tracking-[0.15em] uppercase text-[#6B665F] flex flex-wrap justify-center gap-x-8 gap-y-2 px-6 text-center">
        <span>Free Worldwide Shipping</span>
        <span>30-Day Returns</span>
        <span>18K Gold Plated</span>
        <span>Hypoallergenic</span>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[#B8976F] text-sm tracking-[0.15em] uppercase mb-2">Signature Pieces</p>
            <h2 className="serif text-4xl tracking-[-0.01em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:flex items-center gap-2 text-sm tracking-[0.08em] hover:text-[#B8976F] transition-colors">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
              <div className="relative aspect-[4/3.5] bg-[#F5F1EA] overflow-hidden mb-4">
                <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
                <img src={product.image2} alt={product.name} className="secondary absolute inset-0 w-full h-full object-cover" />
                <button 
                  onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                  className="quick-add text-xs"
                >
                  Quick Add
                </button>
              </div>
              <div className="px-1">
                <p className="product-name text-sm tracking-[0.12em] mb-1">{product.name}</p>
                <p className="text-[#6B665F] text-sm">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#F5F1EA] py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <p className="text-[#B8976F] text-sm tracking-[0.15em] uppercase mb-2">As Seen On You</p>
          <h2 className="serif text-4xl tracking-[-0.01em]">Moments in Gold</h2>
        </div>
        <div className="flex gap-4 pl-6 overflow-x-auto pb-4 scrollbar-hide">
          {ugcItems.map((item) => (
            <div key={item.id} className="ugc-card w-[180px] md:w-[220px] aspect-[9/16] bg-[#2C2823] rounded-lg overflow-hidden relative">
              <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
              <div className="ugc-caption">
                <p>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-[#B8976F] text-sm tracking-[0.15em] uppercase mb-2">Find Your Piece</p>
          <h2 className="serif text-4xl tracking-[-0.01em]">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat, idx) => (
            <Link 
              key={idx} 
              to={`/shop?category=${cat}`} 
              className="category-tile aspect-[16/10] bg-[#2C2823] rounded-lg overflow-hidden relative block"
            >
              <img 
                src={products[idx % 3].image} 
                alt={cat} 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              <div className="category-label">{cat}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20 border-t border-[#E5DFD3]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F5F1EA] rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&q=80" 
              alt="Our Craft" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <p className="text-[#B8976F] text-sm tracking-[0.15em] uppercase mb-4">Our Philosophy</p>
            <h2 className="serif text-5xl tracking-[-0.02em] leading-none mb-8">Jewelry that<br />becomes part of you.</h2>
            <p className="text-[#6B665F] text-[15px] leading-relaxed mb-8 max-w-md">
              Velmora was born from a desire to create pieces that feel personal, not performative. 
              Each design is crafted with quiet intention—meant to be worn, loved, and passed down.
            </p>
            <a href="#journal" className="inline-flex items-center gap-2 text-sm tracking-[0.08em] hover:text-[#B8976F] transition-colors">
              Read Our Story <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F5F1EA] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#B8976F] text-sm tracking-[0.15em] uppercase mb-2">In Their Words</p>
            <h2 className="serif text-4xl tracking-[-0.01em]">What Our Community Says</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-[#B8976F] text-[#B8976F]" />
                  ))}
                </div>
                <p className="text-[#2C2823] mb-6 leading-relaxed">"{t.text}"</p>
                <p className="text-sm tracking-[0.05em] text-[#6B665F]">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <p className="text-[#B8976F] text-sm tracking-[0.15em] uppercase mb-3">Stay Close</p>
          <h3 className="serif text-4xl tracking-[-0.01em] text-white mb-4">Join for 10% off your first order</h3>
          <p className="text-white/70 text-sm mb-8">Receive early access to new collections and stories from our studio.</p>
          <form className="flex gap-3" onSubmit={(e) => { e.preventDefault(); toast.success("Welcome to Velmora"); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-white/10 border border-white/30 px-5 py-3 text-sm placeholder:text-white/50 focus:outline-none focus:border-white/60 text-white" 
              required 
            />
            <button type="submit" className="btn-primary whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2823] text-[#A39B8F] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12 text-sm">
          <div>
            <p className="serif text-2xl tracking-[0.2em] text-white mb-4">VELMORA</p>
            <p className="text-xs tracking-[0.1em]">FINE JEWELRY</p>
          </div>
          <div>
            <p className="text-white tracking-[0.1em] uppercase mb-4 text-xs">Shop</p>
            <div className="space-y-2">
              <Link to="/shop?category=Earrings" className="block hover:text-white">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-white">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-white">Huggies</Link>
            </div>
          </div>
          <div>
            <p className="text-white tracking-[0.1em] uppercase mb-4 text-xs">Help</p>
            <div className="space-y-2">
              <a href="#" className="block hover:text-white">Shipping</a>
              <a href="#" className="block hover:text-white">Returns</a>
              <a href="#" className="block hover:text-white">Care Guide</a>
              <a href="#" className="block hover:text-white">Contact</a>
            </div>
          </div>
          <div>
            <p className="text-white tracking-[0.1em] uppercase mb-4 text-xs">Company</p>
            <div className="space-y-2">
              <a href="#about" className="block hover:text-white">Our Story</a>
              <a href="#journal" className="block hover:text-white">Journal</a>
              <a href="#" className="block hover:text-white">Sustainability</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[0.1em]">
          <p>© {new Date().getFullYear()} Velmora. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Instagram</span>
            <span>Pinterest</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Product Detail Page
function ProductDetail() {
  const { id } = React.useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));
  const [selectedVariant, setSelectedVariant] = useState("Gold");
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) return <div className="p-12 text-center">Product not found</div>;

  const related = products.filter(p => p.id !== product.id).slice(0, 4);
  const images = [product.image, product.image2];

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <button onClick={() => navigate(-1)} className="text-sm tracking-[0.08em] mb-8 hover:text-[#B8976F]">← Back to Collection</button>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.2] bg-[#F5F1EA] overflow-hidden mb-4 rounded-lg">
              <img src={images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 overflow-hidden rounded border-2 ${selectedImage === idx ? 'border-[#B8976F]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} className={i < Math.floor(product.rating) ? "fill-[#B8976F] text-[#B8976F]" : "text-[#E5DFD3]"} />
                ))}
              </div>
              <span className="text-sm text-[#6B665F]">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <h1 className="product-name text-4xl tracking-[0.12em] mb-3">{product.name}</h1>
            <p className="text-2xl font-light mb-8">${product.price}</p>

            <p className="text-[#6B665F] leading-relaxed mb-8 pr-4">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.1em] uppercase text-[#6B665F] mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variant.map((v) => (
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
              <p className="text-xs tracking-[0.1em] uppercase text-[#6B665F] mb-3">Quantity</p>
              <div className="flex items-center border border-[#E5DFD3] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-[#F5F1EA]"><Minus size={16} /></button>
                <span className="px-6">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-[#F5F1EA]"><Plus size={16} /></button>
              </div>
            </div>

            <button 
              onClick={() => addToCart(product, selectedVariant, quantity)} 
              className="btn-primary w-full mb-4"
            >
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6B665F] tracking-[0.05em]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5DFD3]">
              {[
                { key: 'desc', label: 'Description', content: product.description + " Each piece is hand-finished in our studio and inspected for quality before shipping." },
                { key: 'care', label: 'Materials & Care', content: `${product.material}. Avoid contact with perfumes, lotions, and harsh chemicals. Store in a dry place. Clean gently with a soft cloth.` },
                { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $75. 30-day returns accepted on unworn items in original packaging. Contact us for any questions.' }
              ].map((acc) => (
                <div key={acc.key}>
                  <div className="accordion-header" onClick={() => toggleAccordion(acc.key)}>
                    <span>{acc.label}</span>
                    <span className="text-xl leading-none">{openAccordion === acc.key ? '−' : '+'}</span>
                  </div>
                  <div className={`accordion-content text-[#6B665F] text-sm leading-relaxed ${openAccordion === acc.key ? 'open' : ''}`}>
                    {acc.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24">
          <p className="text-[#B8976F] text-sm tracking-[0.15em] uppercase mb-2">Complete the Look</p>
          <h3 className="serif text-3xl tracking-[-0.01em] mb-8">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((p) => (
              <div key={p.id} className="product-card cursor-pointer" onClick={() => navigate(`/product/${p.id}`)}>
                <div className="relative aspect-[4/3.5] bg-[#F5F1EA] overflow-hidden mb-4">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <p className="product-name text-sm tracking-[0.1em] mb-1">{p.name}</p>
                <p className="text-[#6B665F] text-sm">${p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Shop / Collection Page
function Shop() {
  const [searchParams] = React.useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const filtered = products
    .filter(p => !activeCategory || p.category === activeCategory)
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Filters */}
          <div className="w-full md:w-64 flex-shrink-0">
            <p className="filter-label mb-4">Filters</p>
            
            <div className="mb-8">
              <p className="text-sm mb-3">Category</p>
              {['Earrings', 'Necklaces', 'Huggies'].map(cat => (
                <label key={cat} className="flex items-center gap-2 py-1.5 cursor-pointer text-sm">
                  <input 
                    type="radio" 
                    name="category" 
                    checked={activeCategory === cat}
                    onChange={() => setActiveCategory(cat)}
                  />
                  {cat}
                </label>
              ))}
              <button onClick={() => setActiveCategory('')} className="text-xs text-[#B8976F] mt-1">Clear</button>
            </div>

            <div>
              <p className="text-sm mb-3">Price Range</p>
              <div className="flex gap-3 items-center text-sm">
                <input type="number" value={priceRange[0]} onChange={(e) => setPriceRange([parseInt(e.target.value)||0, priceRange[1]])} className="w-16 border border-[#E5DFD3] px-2 py-1" />
                <span>—</span>
                <input type="number" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)||120])} className="w-16 border border-[#E5DFD3] px-2 py-1" />
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <p className="text-sm text-[#6B665F]">{filtered.length} products</p>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-[#E5DFD3] bg-transparent px-4 py-2 text-sm focus:outline-none"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {filtered.map((product) => (
                <div key={product.id} className="product-card group cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
                  <div className="relative aspect-[4/3.5] bg-[#F5F1EA] overflow-hidden mb-4">
                    <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
                    <img src={product.image2} alt={product.name} className="secondary absolute inset-0 w-full h-full object-cover" />
                    <button 
                      onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                      className="quick-add text-xs"
                    >
                      Quick Add
                    </button>
                  </div>
                  <div>
                    <p className="product-name text-sm tracking-[0.12em] mb-1">{product.name}</p>
                    <p className="text-[#6B665F] text-sm">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main App
function App() {
  return (
    <Router>
      <CartProvider>
        <Toaster position="top-center" richColors closeButton />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <CartDrawer />
      </CartProvider>
    </Router>
  );
}

export default App;

