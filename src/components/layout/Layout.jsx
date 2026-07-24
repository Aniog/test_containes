import { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, X, Menu, Minus, Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

function Header() {
  const { itemCount, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled || !isHome || isMobileMenuOpen
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-4 text-foreground'
          : 'bg-transparent py-6 text-primary-foreground'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -ml-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link to="/" className="text-2xl font-serif font-semibold tracking-widest text-center flex-1 md:flex-none md:text-left drop-shadow-sm">
          VELMORA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 justify-center flex-1">
          <Link to="/shop" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity drop-shadow-sm">Shop</Link>
          <Link to="/collections" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity drop-shadow-sm">Collections</Link>
          <Link to="/about" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity drop-shadow-sm">About</Link>
          <Link to="/journal" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity drop-shadow-sm">Journal</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 justify-end">
          <button className="p-2 hover:opacity-70 transition-opacity hidden md:block">
            <Search size={22} className="drop-shadow-sm" />
          </button>
          <button className="p-2 hover:opacity-70 transition-opacity relative" onClick={openCart}>
            <ShoppingBag size={22} className="drop-shadow-sm" />
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        'md:hidden fixed inset-x-0 top-full bg-background border-b border-border transition-all duration-300 overflow-hidden',
        isMobileMenuOpen ? 'max-h-screen py-6' : 'max-h-0 py-0 border-transparent'
      )}>
        <nav className="flex flex-col items-center gap-6 text-foreground">
          <Link to="/shop" className="text-lg tracking-widest uppercase">Shop</Link>
          <Link to="/collections" className="text-lg tracking-widest uppercase">Collections</Link>
          <Link to="/about" className="text-lg tracking-widest uppercase">About</Link>
          <Link to="/journal" className="text-lg tracking-widest uppercase">Journal</Link>
        </nav>
      </div>
    </header>
  );
}

function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, cartTotal } = useCart();
  const drawerRef = useRef(null);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-50 transition-opacity backdrop-blur-sm" onClick={closeCart} />
      <div 
        ref={drawerRef}
        className="fixed inset-y-0 right-0 w-full max-w-md bg-background z-50 shadow-2xl flex flex-col transform transition-transform duration-300 translate-x-0"
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl">Your Cart ({items.length})</h2>
          <button onClick={closeCart} className="p-2 hover:opacity-70 transition-opacity">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
              <ShoppingBag size={48} className="text-muted-foreground opacity-50" />
              <p className="text-muted-foreground">Your cart is empty.</p>
              <button 
                onClick={closeCart}
                className="mt-4 bg-primary text-primary-foreground px-8 py-3 uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4 border-b border-border pb-6 last:border-0">
                <div className="w-24 h-24 bg-muted overflow-hidden flex-shrink-0 relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 id={`cart-item-name-${item.id}`} className="font-serif text-lg leading-tight uppercase tracking-wider">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1 capitalize">{item.variant}</p>
                    </div>
                    <p className="font-medium">${item.price}</p>
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center border border-border">
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="px-2 py-1 hover:bg-muted transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-4 text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="px-2 py-1 hover:bg-muted transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id, item.variant)}
                      className="text-xs tracking-wider uppercase text-muted-foreground underline hover:text-foreground transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-background">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-serif">Subtotal</span>
              <span className="font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 text-center">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-primary text-primary-foreground py-4 uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8 text-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-serif font-semibold tracking-widest block mb-6">
              VELMORA
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-xs">
              Crafted to be treasured. Demi-fine jewelry designed for the modern editorial aesthetic.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wider">Shop</h4>
            <ul className="flex flex-col gap-4 text-muted-foreground">
              <li><Link to="/shop?category=earrings" className="hover:text-foreground transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-foreground transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-foreground transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-foreground transition-colors">All Jewelry</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wider">Help</h4>
            <ul className="flex flex-col gap-4 text-muted-foreground">
              <li><Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-foreground transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/jewelry-care" className="hover:text-foreground transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
          </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-4 text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-foreground transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-foreground transition-colors">Sustainability</Link></li>
              <li><Link to="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 text-muted-foreground text-xs gap-4">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}