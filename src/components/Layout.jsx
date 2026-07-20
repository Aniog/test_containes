import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const { cart, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/' },
    { label: 'Journal', path: '/' },
  ];

  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F5F5F5]">
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-[#0F0F0F] border-b border-[#2A2A2A]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-[#F5F5F5]">
            VELMORA
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.08em] uppercase">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.path} className="hover:text-[#C5A46E] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 hover:text-[#C5A46E] transition-colors">
              <Search size={18} />
            </button>
            <button onClick={() => setCartOpen(true)} className="p-2 hover:text-[#C5A46E] transition-colors relative">
              <ShoppingBag size={18} />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#C5A46E] text-[#0F0F0F] text-xs flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="border-t border-[#2A2A2A] bg-[#0F0F0F]">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <input
                type="text"
                placeholder="Search our collection..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input w-full"
              />
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-[#0F0F0F] border-t border-[#2A2A2A] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
            <div>
              <div className="font-serif text-xl tracking-[0.15em] mb-6">VELMORA</div>
            </div>
            <div>
              <div className="text-xs tracking-[0.1em] uppercase mb-4 text-[#A3A3A3]">Shop</div>
              <div className="space-y-2 text-sm">
                <Link to="/shop" className="block hover:text-[#C5A46E]">All Jewelry</Link>
                <Link to="/shop" className="block hover:text-[#C5A46E]">Earrings</Link>
                <Link to="/shop" className="block hover:text-[#C5A46E]">Necklaces</Link>
                <Link to="/shop" className="block hover:text-[#C5A46E]">Huggies</Link>
              </div>
            </div>
            <div>
              <div className="text-xs tracking-[0.1em] uppercase mb-4 text-[#A3A3A3]">Help</div>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-[#C5A46E]">Shipping</a>
                <a href="#" className="block hover:text-[#C5A46E]">Returns</a>
                <a href="#" className="block hover:text-[#C5A46E]">Care Guide</a>
                <a href="#" className="block hover:text-[#C5A46E]">Contact</a>
              </div>
            </div>
            <div>
              <div className="text-xs tracking-[0.1em] uppercase mb-4 text-[#A3A3A3]">Company</div>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-[#C5A46E]">Our Story</a>
                <a href="#" className="block hover:text-[#C5A46E]">Journal</a>
                <a href="#" className="block hover:text-[#C5A46E]">Sustainability</a>
                <a href="#" className="block hover:text-[#C5A46E]">Stockists</a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#2A2A2A] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#A3A3A3]">
            <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
            <div className="flex gap-6">
              <span>Instagram</span>
              <span>Pinterest</span>
              <span>Visa</span>
              <span>Mastercard</span>
              <span>Amex</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      <div className={`fixed inset-0 z-[60] ${cartOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/60 transition-opacity ${cartOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setCartOpen(false)} />
        <div className={`cart-drawer absolute right-0 top-0 h-full w-full max-w-md bg-[#0F0F0F] border-l border-[#2A2A2A] p-8 overflow-y-auto ${cartOpen ? 'open' : ''}`}>
          <div className="flex justify-between items-center mb-8">
            <div className="font-serif text-xl tracking-[0.08em]">Your Cart</div>
            <button onClick={() => setCartOpen(false)}><X size={20} /></button>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-12 text-[#A3A3A3]">Your cart is empty</div>
          ) : (
            <>
              <div className="space-y-6 mb-8">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <img src={item.image1} alt={item.name} className="w-20 h-20 object-cover" />
                    <div className="flex-1 text-sm">
                      <div className="font-serif tracking-[0.04em] mb-1">{item.name}</div>
                      <div className="text-[#A3A3A3] mb-2">{item.variant} · ${item.price}</div>
                      <div className="flex items-center gap-3">
                        <button onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)} className="w-6 h-6 border border-[#2A2A2A]">-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)} className="w-6 h-6 border border-[#2A2A2A]">+</button>
                        <button onClick={() => removeFromCart(item.id, item.variant)} className="ml-auto text-[#A3A3A3] hover:text-[#C5A46E]">Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#2A2A2A] pt-6">
                <div className="flex justify-between mb-6 text-lg">
                  <span>Total</span>
                  <span className="font-serif">${getCartTotal()}</span>
                </div>
                <button className="btn btn-primary w-full mb-3">Checkout</button>
                <button onClick={() => setCartOpen(false)} className="btn btn-outline w-full">Continue Shopping</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;