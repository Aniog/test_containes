import React, { useEffect } from 'react';
import { ShoppingBag, Menu, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Layout = ({ children }) => {
  const { cart, cartOpen, toggleCart, removeFromCart, updateQuantity } = useCart();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const layoutRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (layoutRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, layoutRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [cartOpen, cart]);

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div ref={layoutRef} className="min-h-screen flex flex-col font-sans text-neutral-900 bg-[#FAFAFA]">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-4 lg:hidden">
            <button onClick={() => setMobileMenuOpen(true)}>
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-neutral-900' : 'text-neutral-900'}`} />
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
            <Link to="/shop" className="hover:text-amber-700 transition-colors">Shop</Link>
            <Link to="/collections" className="hover:text-amber-700 transition-colors">Collections</Link>
            <Link to="/about" className="hover:text-amber-700 transition-colors">About</Link>
          </nav>

          <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
            <span className={`font-serif text-2xl tracking-[0.2em] uppercase ${isScrolled ? 'text-neutral-900' : 'text-neutral-900'}`}>
              Velmora
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <button>
              <Search className={`w-5 h-5 ${isScrolled ? 'text-neutral-900' : 'text-neutral-900'}`} />
            </button>
            <button onClick={toggleCart} className="relative">
              <ShoppingBag className={`w-5 h-5 ${isScrolled ? 'text-neutral-900' : 'text-neutral-900'}`} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-700 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <span className="font-serif text-2xl tracking-[0.2em] uppercase mb-6 block">Velmora</span>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Quiet luxury and demi-fine jewelry crafted to be treasured. Designed for the modern romantic.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-sm tracking-widest uppercase mb-6">Shop</h4>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-white transition-colors">Huggies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-sm tracking-widest uppercase mb-6">Help</h4>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li><Link to="#" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Jewelry Care</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-sm tracking-widest uppercase mb-6">Company</h4>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li><Link to="#" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Journal</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Sustainability</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-xs">
          <p>&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      {cartOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-[60]" onClick={toggleCart} />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col transform transition-transform duration-300">
            <div className="flex items-center justify-between p-6 border-b border-neutral-100">
              <h2 className="font-serif text-xl">Your Cart</h2>
              <button onClick={toggleCart} className="p-2 hover:bg-neutral-50 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-neutral-500 gap-4">
                  <ShoppingBag className="w-12 h-12 text-neutral-300" />
                  <p>Your cart is empty.</p>
                  <button onClick={() => { toggleCart(); window.location.href='/shop'; }} className="mt-4 px-8 py-3 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-24 h-24 bg-neutral-100 rounded flex-shrink-0 relative overflow-hidden">
                         <img
                          data-strk-img-id={`cart-item-${item.id}`}
                          data-strk-img={`[cart-item-title-${item.id}]`}
                          data-strk-img-ratio="1x1"
                          data-strk-img-width="150"
                          alt={item.name}
                          className="w-full h-full object-cover"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        />
                      </div>
                      <div className="flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between">
                            <h3 id={`cart-item-title-${item.id}`} className="font-medium text-sm">{item.name}</h3>
                            <button onClick={() => removeFromCart(item.id)} className="text-neutral-400 hover:text-red-500">
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-neutral-500 text-xs mt-1">{item.variant || 'Standard'}</p>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center border border-neutral-200 rounded">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 text-neutral-500 hover:text-neutral-900">-</button>
                            <span className="text-sm w-8 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 text-neutral-500 hover:text-neutral-900">+</button>
                          </div>
                          <span className="font-medium">${item.price * item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {cart.length > 0 && (
              <div className="p-6 border-t border-neutral-100 bg-neutral-50">
                <div className="flex justify-between mb-6">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-medium">${cartTotal}</span>
                </div>
                <button className="w-full py-4 bg-amber-700 text-white font-medium hover:bg-amber-800 transition-colors">
                  Checkout
                </button>
                <p className="text-xs text-center text-neutral-500 mt-4">Shipping & taxes calculated at checkout</p>
              </div>
            )}
          </div>
        </>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col p-6 lg:hidden">
          <div className="flex justify-end mb-8">
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="w-6 h-6 text-neutral-900" />
            </button>
          </div>
          <nav className="flex flex-col gap-6 text-2xl font-serif">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
            <Link to="/collections" onClick={() => setMobileMenuOpen(false)}>Collections</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Layout;
