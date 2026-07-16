import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Minus, Plus } from 'lucide-react';
import { useState, useEffect } from 'react';
import { CartProvider, useCart } from './lib/CartContext';

// Pages placeholders
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Collection from './pages/Collection';

function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 z-[70] backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      ></div>
      <div className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-background shadow-2xl z-[80] flex flex-col transition-transform transform">
        <div className="flex justify-between items-center p-6 border-b border-border">
          <h2 className="text-sm font-serif uppercase tracking-[0.2em] font-semibold">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="hover:text-accent transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 hide-scrollbars">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-foreground/20 mb-4" />
              <p className="text-sm font-medium uppercase tracking-[0.1em] mb-2">Your cart is empty</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-xs uppercase tracking-[0.2em] border-b border-foreground hover:text-accent hover:border-accent transition-colors mt-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                <div className="w-20 aspect-[3/4] bg-secondary flex-shrink-0">
                  <img 
                    src={item.resolvedSrc || `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=`} 
                    className="w-full h-full object-cover" 
                    alt={item.name} 
                  />
                </div>
                <div className="flex flex-col flex-1 pl-2">
                  <p id={`cart-item-${item.id}`} className="text-xs font-serif uppercase tracking-[0.1em] mb-1 leading-snug">{item.name}</p>
                  <p className="text-[10px] text-foreground/50 uppercase tracking-[0.1em] mb-2">{item.variant} Tone</p>
                  
                  <div className="flex justify-between items-end mt-auto">
                    <div className="flex items-center border border-border">
                      <button 
                        className="p-2 hover:bg-foreground/5 transition-colors"
                        onClick={() => updateQuantity(item.id, item.variant, -1)}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-medium">{item.quantity}</span>
                      <button 
                        className="p-2 hover:bg-foreground/5 transition-colors"
                        onClick={() => updateQuantity(item.id, item.variant, 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-sm font-medium mb-1">${(item.price * item.quantity).toFixed(2)}</p>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-[10px] text-foreground/50 hover:text-destructive underline uppercase tracking-[0.1em]"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-border bg-card">
            <div className="flex justify-between items-center mb-6 text-sm font-semibold uppercase tracking-widest">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-foreground/50 mb-6 text-center uppercase tracking-widest leading-relaxed">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-colors border border-transparent">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground">
      {/* Navbar */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-4 text-foreground' : 'bg-transparent py-6 text-foreground'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4 lg:hidden">
            <button onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Logo */}
          <Link to="/" className="text-2xl md:text-3xl font-serif tracking-widest uppercase relative z-50">
            Velmora
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em]">
            <Link to="/collection" className="hover:text-accent transition-colors">Shop</Link>
            <Link to="/collection" className="hover:text-accent transition-colors">Collections</Link>
            <Link to="/" className="hover:text-accent transition-colors">About</Link>
            <Link to="/" className="hover:text-accent transition-colors">Journal</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4 lg:gap-6 relative z-50">
            <button className="hover:text-accent transition-colors">
              <Search className="w-5 h-5 flex-shrink-0" />
            </button>
            <button className="hover:text-accent transition-colors relative" onClick={() => setIsCartOpen(true)}>
              <ShoppingBag className="w-5 h-5 flex-shrink-0" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Cart Drawer */}
      <CartDrawer />

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-background flex flex-col pt-24 px-8 text-foreground">
          <button 
            className="absolute top-6 right-6"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
          <nav className="flex flex-col gap-8 text-xl font-serif uppercase tracking-widest text-center">
            <Link to="/collection" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
            <Link to="/collection" onClick={() => setMobileMenuOpen(false)}>Collections</Link>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Journal</Link>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif tracking-widest mb-6 inline-block">Velmora</h3>
            <p className="text-primary-foreground/70 text-sm max-w-sm">
              Crafted to be treasured. Demi-fine jewelry for everyday elegance.
            </p>
          </div>
          <div>
            <h4 className="font-sans uppercase tracking-[0.2em] mb-6 text-xs font-semibold">Shop</h4>
            <ul className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <li><Link to="/collection" className="hover:text-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="/collection" className="hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/collection" className="hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/collection" className="hover:text-accent transition-colors">Huggies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans uppercase tracking-[0.2em] mb-6 text-xs font-semibold">Help</h4>
            <ul className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <li><Link to="/" className="hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/" className="hover:text-accent transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/" className="hover:text-accent transition-colors">Jewelry Care</Link></li>
              <li><Link to="/" className="hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans uppercase tracking-[0.2em] mb-6 text-xs font-semibold">Join the Club</h4>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Sign up for 10% off your first order.
            </p>
            <div className="flex border border-primary-foreground/20">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-none px-4 py-3 text-sm w-full focus:outline-none placeholder:text-primary-foreground/40"
              />
              <button className="bg-transparent hover:bg-primary-foreground/10 text-primary-foreground border-l border-primary-foreground/20 px-4 py-2 text-xs font-semibold transition-colors uppercase tracking-widest whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-8 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/collection" element={<Collection />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
