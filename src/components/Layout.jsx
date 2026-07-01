import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, X, Menu, Minus, Plus, Instagram, Twitter, Facebook } from 'lucide-react';
import { useCart } from '../context/CartContext';

function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeFromCart, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-velmora-light z-50 shadow-xl flex flex-col transform transition-transform duration-300">
        <div className="flex items-center justify-between p-6 border-b border-velmora-border">
          <h2 className="text-xl font-serif">Your Cart</h2>
          <button onClick={() => setIsOpen(false)} className="text-velmora-gray hover:text-velmora-dark transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center text-velmora-gray pt-12">
              <p>Your cart is empty.</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="mt-6 uppercase tracking-wider text-sm font-semibold text-velmora-dark border-b border-velmora-dark pb-1"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-velmora-muted flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="uppercase tracking-widest text-xs font-semibold">{item.name}</h3>
                        <p className="font-semibold">${item.price}</p>
                      </div>
                      {item.variant && <p className="text-sm text-velmora-gray mt-1 capitalize">{item.variant}</p>}
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-velmora-border">
                        <button 
                          className="px-2 py-1 text-velmora-gray hover:text-velmora-dark"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 text-sm font-medium">{item.quantity}</span>
                        <button 
                          className="px-2 py-1 text-velmora-gray hover:text-velmora-dark"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button 
                        className="text-xs text-velmora-gray underline hover:text-velmora-dark transition-colors"
                        onClick={() => removeFromCart(item.id, item.variant)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-velmora-border bg-velmora-muted/30">
            <div className="flex justify-between font-serif text-lg mb-6">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-velmora-gray mb-6 text-center">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-velmora-dark text-velmora-light py-4 font-semibold tracking-wider hover:bg-velmora-gray transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsOpen: setCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navClass = `fixed w-full top-0 z-40 transition-all duration-300 ${
    isScrolled || !isHome || mobileMenuOpen ? 'bg-velmora-light text-velmora-dark shadow-sm' : 'bg-transparent text-white'
  }`;

  return (
    <header className={navClass}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <Link to="/" className="font-serif text-2xl tracking-widest font-semibold">VELMORA</Link>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
            <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
            <Link to="/shop?category=earrings" className="hover:text-velmora-gold transition-colors">Collections</Link>
            <Link to="#" className="hover:text-velmora-gold transition-colors">About</Link>
            <Link to="#" className="hover:text-velmora-gold transition-colors">Journal</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:text-velmora-gold transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="p-2 hover:text-velmora-gold transition-colors relative"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-velmora-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-velmora-light text-velmora-dark shadow-md border-t border-velmora-border flex flex-col p-6 gap-6 text-lg font-medium tracking-wide">
          <Link to="/shop">Shop</Link>
          <Link to="/shop?category=earrings">Collections</Link>
          <Link to="#">About</Link>
          <Link to="#">Journal</Link>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-velmora-dark text-velmora-light pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-serif text-2xl tracking-widest font-semibold mb-6">VELMORA</h3>
            <p className="text-sm text-velmora-muted/80 leading-relaxed mb-6">
              Crafted to be Treasured. Demi-fine jewelry for the modern romantic.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-velmora-gold transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-velmora-gold transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-velmora-gold transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold tracking-wider text-sm mb-6 uppercase">Shop</h4>
            <ul className="space-y-4 text-sm text-velmora-muted/80">
              <li><Link to="/shop" className="hover:text-velmora-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-velmora-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-velmora-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-velmora-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=gifts" className="hover:text-velmora-gold transition-colors">Gifts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold tracking-wider text-sm mb-6 uppercase">Help</h4>
            <ul className="space-y-4 text-sm text-velmora-muted/80">
              <li><a href="#" className="hover:text-velmora-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-velmora-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-velmora-gold transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="hover:text-velmora-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold tracking-wider text-sm mb-6 uppercase">Company</h4>
            <ul className="space-y-4 text-sm text-velmora-muted/80">
              <li><a href="#" className="hover:text-velmora-gold transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-velmora-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-velmora-gold transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-velmora-gold transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-10 text-xs text-velmora-muted/60">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="px-2 py-1 border border-white/20 rounded">Visa</span>
            <span className="px-2 py-1 border border-white/20 rounded">Mastercard</span>
            <span className="px-2 py-1 border border-white/20 rounded">Amex</span>
            <span className="px-2 py-1 border border-white/20 rounded">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <CartDrawer />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}