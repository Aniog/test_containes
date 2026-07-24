import { useState, useEffect } from 'react';
import { Routes, Route, Link, Outlet, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Plus, Minus, ArrowRight, Star } from 'lucide-react';
import { cn } from './lib/utils';
import useCartStore from './store/cartStore';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';

// Temporary blank components
const AboutPage = () => <div className="pt-24 min-h-screen">About Page</div>;
const JournalPage = () => <div className="pt-24 min-h-screen">Journal Page</div>;

function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const cartItems = useCartStore(state => state.items);
  const cartTotal = useCartStore(state => state.getTotalPrice());
  const updateQuantity = useCartStore(state => state.updateQuantity);
  const removeItem = useCartStore(state => state.removeItem);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          (isScrolled || !isHome) ? "bg-background/90 backdrop-blur-md border-b border-border/50 text-foreground" : "bg-transparent text-foreground"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8 hidden md:flex">
            <Link to="/shop" className="text-xs font-semibold tracking-[0.2em] uppercase hover:text-accent transition-colors">Shop</Link>
            <Link to="/about" className="text-xs font-semibold tracking-[0.2em] uppercase hover:text-accent transition-colors">About</Link>
          </div>
          
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
          
          <Link to="/" className="font-serif text-3xl tracking-[0.25em] uppercase md:absolute md:left-1/2 md:-translate-x-1/2">
            VELMORA
          </Link>
          
          <div className="flex items-center gap-6">
            <button className="hover:text-accent transition-colors hidden md:block">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="relative hover:text-accent transition-colors"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Cart Drawer */}
      {isCartOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/40 z-50 transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background z-50 shadow-2xl flex flex-col transform transition-transform duration-300">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="font-serif text-2xl uppercase tracking-widest">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="hover:text-accent transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-muted-foreground">
                  <ShoppingBag className="w-12 h-12 opacity-30" />
                  <p className="font-serif italic text-lg text-foreground">Your cart is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-6 px-10 py-4 bg-primary text-primary-foreground uppercase tracking-[0.2em] text-xs font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                      <div className="w-24 h-24 bg-secondary flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-serif uppercase tracking-wider text-sm">{item.name}</h3>
                            <p className="text-xs text-muted-foreground mt-1 capitalize">{item.variant}</p>
                          </div>
                          <button 
                            onClick={() => removeItem(item.id, item.variant)}
                            className="text-muted-foreground hover:text-foreground text-xs underline"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="mt-auto flex justify-between items-center">
                          <div className="flex items-center border border-border">
                            <button 
                              className="px-2 py-1 hover:bg-secondary transition-colors"
                              onClick={() => item.quantity > 1 && updateQuantity(item.id, item.variant, item.quantity - 1)}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs">{item.quantity}</span>
                            <button 
                              className="px-2 py-1 hover:bg-secondary transition-colors"
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-serif tracking-wider">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {cartItems.length > 0 && (
              <div className="border-t p-6 pb-8 space-y-6 bg-background">
                <div className="flex justify-between items-center text-lg font-serif">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-sm text-muted-foreground">Shipping and taxes calculated at checkout.</p>
                <button className="w-full py-4 bg-primary text-primary-foreground uppercase tracking-[0.2em] text-xs font-semibold hover:bg-primary/90 transition-colors">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </>
      )}

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-primary text-primary-foreground py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl tracking-[0.25em] uppercase mb-6 text-accent">VELMORA</h3>
            <p className="text-primary-foreground/80 max-w-sm text-sm leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Accessible luxury designed for the modern woman.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg tracking-widest mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li><Link to="/shop" className="hover:text-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-accent transition-colors">Huggies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li><Link to="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-accent transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-accent transition-colors">Jewelry Care</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="journal" element={<JournalPage />} />
      </Route>
    </Routes>
  );
}

export default App;
