import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Plus, Minus } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useCart } from '../../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/plugin/vite-plugin-strk-img.js'; // Just a placeholder config import if needed, ImageHelper works mainly via global or injected config

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-sand/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 -ml-2 text-brand-charcoal"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Desktop Nav - Left */}
        <nav className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-medium">
          <Link to="/shop" className="hover:text-brand-gold transition-colors">Shop</Link>
          <Link to="/shop?category=Necklaces" className="hover:text-brand-gold transition-colors">Necklaces</Link>
          <Link to="/shop?category=Earrings" className="hover:text-brand-gold transition-colors">Earrings</Link>
        </nav>

        {/* Logo - Center */}
        <Link 
          to="/" 
          className="font-serif text-3xl md:text-4xl tracking-widest absolute left-1/2 transform -translate-x-1/2 text-brand-charcoal"
        >
          VELMORA
        </Link>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <button className="hidden md:block hover:text-brand-gold transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button 
            className="hover:text-brand-gold transition-colors relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-charcoal text-brand-sand text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-brand-sand z-50 flex flex-col md:hidden">
          <div className="flex justify-between items-center p-4 border-b border-brand-charcoal/10">
            <span className="font-serif text-xl tracking-widest">VELMORA</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col p-8 space-y-6 text-xl font-serif">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop All</Link>
            <Link to="/shop?category=Earrings" onClick={() => setIsMobileMenuOpen(false)}>Earrings</Link>
            <Link to="/shop?category=Necklaces" onClick={() => setIsMobileMenuOpen(false)}>Necklaces</Link>
            <Link to="/shop?category=Huggies" onClick={() => setIsMobileMenuOpen(false)}>Huggies</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-taupe py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-widest text-brand-sand mb-6 block">VELMORA</Link>
            <p className="max-w-md text-sm leading-relaxed opacity-80">
              Demi-fine jewelry crafted for the everyday. We believe luxury should be lived in, not locked away. 
              Designed thoughtfully, produced responsibly.
            </p>
          </div>
          <div>
            <h4 className="font-serif uppercase tracking-widest text-brand-sand text-sm mb-6">Shop</h4>
            <ul className="space-y-4 text-sm opacity-80">
              <li><Link to="/shop" className="hover:text-brand-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-brand-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-brand-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-brand-gold transition-colors">Huggies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif uppercase tracking-widest text-brand-sand text-sm mb-6">Help</h4>
            <ul className="space-y-4 text-sm opacity-80">
              <li><a href="#" className="hover:text-brand-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-brand-taupe/20 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-sand transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-sand transition-colors">TikTok</a>
            <a href="#" className="hover:text-brand-sand transition-colors">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cart, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-brand-charcoal/40 backdrop-blur-sm z-50" 
        onClick={() => setIsCartOpen(false)}
      />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-sand z-50 flex flex-col shadow-2xl transform transition-transform duration-300">
        <div className="flex items-center justify-between p-6 border-b border-brand-charcoal/10">
          <h2 className="font-serif text-2xl">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:opacity-70 transition-opacity">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <ShoppingBag className="w-12 h-12 opacity-20" />
              <p className="text-xl font-serif">Your cart is empty</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-4 border-b border-brand-charcoal pb-1 uppercase tracking-widest text-sm hover:text-brand-gold hover:border-brand-gold transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={`${item.id}-${item.variant}-${index}`} className="flex gap-4 border-b border-brand-charcoal/10 pb-6">
                <div className="w-24 h-24 bg-brand-taupe/30 relative flex-shrink-0">
                  <img 
                    alt={item.name}
                    data-strk-img-id={`cart-img-${item.id}`}
                    data-strk-img={item.imgSearch}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif uppercase tracking-wide text-sm">{item.name}</h3>
                      <p className="font-medium">${item.price}</p>
                    </div>
                    {item.variant && <p className="text-xs opacity-60 mt-1">{item.variant}</p>}
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-brand-charcoal/20 rounded-md">
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="px-2 py-1 hover:bg-brand-charcoal/5"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="px-2 py-1 hover:bg-brand-charcoal/5"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id, item.variant)}
                      className="text-xs underline opacity-60 hover:opacity-100"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 bg-brand-taupe/20 border-t border-brand-charcoal/10">
            <div className="flex justify-between text-lg font-serif mb-6">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs opacity-60 text-center mb-6">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-brand-charcoal text-brand-sand py-4 uppercase tracking-widest text-sm hover:bg-brand-gold transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export function Layout({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // In real scenario we use strkImgConfig, but for this mock we pass empty object or actual config if available
      return ImageHelper.loadImages({}, containerRef.current);
    }
  }, [children]); // Re-run when children change to catch new images

  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-charcoal bg-brand-sand overflow-x-hidden" ref={containerRef}>
      <Navigation />
      <CartDrawer />
      <main className="flex-1 mt-[80px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
