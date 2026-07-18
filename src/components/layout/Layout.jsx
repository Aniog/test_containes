import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Minus, Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { ImageHelper } from '../../lib/strk-sdk';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount, openCart } = useCart();

  const isHomepage = location.pathname === '/';
  const isTransparent = isHomepage && !isScrolled && !isMobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop' },
    { name: 'About', path: '/' },
    { name: 'Journal', path: '/' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent text-white'
          : 'bg-background text-foreground shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -ml-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm tracking-widest uppercase hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <Link to="/" className="text-3xl font-serif tracking-widest">
              VELMORA
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center justify-end space-x-4 flex-1">
            <button className="p-2 hover:text-primary transition-colors hidden sm:block">
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={openCart}
              className="p-2 hover:text-primary transition-colors relative"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-primary text-primary-foreground text-[10px] h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background border-t border-border transition-all duration-300 ${
          isMobileMenuOpen ? 'block opacity-100 visible' : 'hidden opacity-0 invisible'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 text-foreground">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 text-base tracking-widest uppercase border-b border-border last:border-0"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1 border-b border-white/20 pb-8 md:border-0 md:pb-0">
            <h3 className="text-2xl font-serif tracking-widest mb-6">VELMORA</h3>
            <p className="text-white/70 text-sm mb-6">
              Crafted to be treasured. Demi-fine jewelry for the modern romantic.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-white/70 hover:text-white transition-colors text-sm">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-white/70 hover:text-white transition-colors text-sm">Earrings</Link></li>
              <li><Link to="/shop" className="text-white/70 hover:text-white transition-colors text-sm">Necklaces</Link></li>
              <li><Link to="/shop" className="text-white/70 hover:text-white transition-colors text-sm">Huggies</Link></li>
              <li><Link to="/shop" className="text-white/70 hover:text-white transition-colors text-sm">Sets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-6">Help</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white/70 hover:text-white transition-colors text-sm">FAQ</Link></li>
              <li><Link to="/" className="text-white/70 hover:text-white transition-colors text-sm">Shipping & Returns</Link></li>
              <li><Link to="/" className="text-white/70 hover:text-white transition-colors text-sm">Jewelry Care</Link></li>
              <li><Link to="/" className="text-white/70 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Instagram</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">TikTok</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Pinterest</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-white">Privacy Policy</Link>
            <Link to="/" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function CartDrawer() {
  const { isCartOpen, closeCart, items, removeItem, updateQuantity, cartTotal } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      const loadImages = async () => {
        try {
          const config = await import('../../strk-img-config.json', { assert: { type: 'json' } }).catch(() => null);
          if (config && ImageHelper) {
            ImageHelper.loadImages(config.default || config, containerRef.current);
          }
        } catch (err) {
          // ignore
        }
      };
      
      const frameId = window.requestAnimationFrame(() => loadImages());
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, items]);

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-50 transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div 
        ref={containerRef}
        className={`fixed inset-y-0 right-0 w-full md:w-[400px] bg-background shadow-xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl">Your Cart</h2>
          <button onClick={closeCart} className="p-2 -mr-2 hover:text-primary transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <ShoppingBag className="h-12 w-12 text-muted-foreground opacity-50" />
              <p className="text-muted-foreground">Your cart is currently empty.</p>
              <button 
                onClick={closeCart}
                className="mt-4 px-6 py-3 bg-primary text-primary-foreground tracking-widest uppercase text-sm hover:bg-primary/90 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.id} className="flex space-x-4">
                  <div className="h-24 w-24 flex-shrink-0 rounded-md overflow-hidden bg-muted relative">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.name}
                  className="w-full h-full object-cover"
                  {...{"data-strk-img-id": item.cartImgId}}
                />
                  </div>
                  <div className="flex flex-col flex-1 justify-between">
                    <div>
                  <div className="flex justify-between items-start">
                    <h3 id={`cart-item-title-${item.id}`} className="font-serif text-lg leading-tight uppercase pr-4">{item.name}</h3>
                    <p className="font-medium">${item.price}</p>
                  </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <div className="flex items-center border border-border rounded-sm">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 px-2 hover:text-primary"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-2 text-sm text-center min-w-[24px]">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 px-2 hover:text-primary"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2"
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
          <div className="border-t border-border p-6 bg-background">
            <div className="flex justify-between text-lg font-medium mb-6">
              <p>Subtotal</p>
              <p>${cartTotal.toFixed(2)}</p>
            </div>
            <button className="w-full py-4 bg-foreground text-white uppercase tracking-widest text-sm hover:bg-black transition-colors">
              Checkout
            </button>
            <p className="text-center text-xs text-muted-foreground mt-4">
              Shipping & taxes calculated at checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
}
