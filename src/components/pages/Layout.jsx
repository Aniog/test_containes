import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, cartCount, cartTotal, removeFromCart, updateQuantity } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="serif text-2xl tracking-widest font-light" style={{ color: isScrolled ? '#2A2A28' : '#FEFCF9' }}>
            VELMORA
          </Link>

          {/* Center: Nav Links (Desktop) */}
          <div className="hidden md:flex space-x-8">
            {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
              <Link
                key={link}
                to={link === 'Shop' ? '/shop' : `/${link.toLowerCase()}`}
                className="text-sm tracking-wider uppercase transition-colors duration-300"
                style={{ color: isScrolled ? '#2A2A28' : '#FEFCF9' }}
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 transition-colors duration-300" style={{ color: isScrolled ? '#2A2A28' : '#FEFCF9' }}>
              <Search size={20} />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 transition-colors duration-300 relative"
              style={{ color: isScrolled ? '#2A2A28' : '#FEFCF9' }}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 transition-colors duration-300"
              style={{ color: isScrolled ? '#2A2A28' : '#FEFCF9' }}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-6 py-4 space-y-4">
              {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
                <Link
                  key={link}
                  to={link === 'Shop' ? '/shop' : `/${link.toLowerCase()}`}
                  className="block text-sm tracking-wider uppercase text-charcoal"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsCartOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="serif text-2xl">Your Cart ({cartCount})</h2>
                <button onClick={() => setIsCartOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <p className="text-soft-gray text-center mt-8">Your cart is empty</p>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item) => (
                      <div key={item.cartId} className="flex gap-4 pb-6 border-b">
                        <img 
                          src={item.images[0]} 
                          alt={item.name}
                          className="w-24 h-24 object-cover"
                        />
                        <div className="flex-grow">
                          <h3 className="product-name text-sm mb-1">{item.name}</h3>
                          <p className="text-sm text-soft-gray mb-2">${item.price}</p>
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                              className="w-8 h-8 border flex items-center justify-center"
                            >
                              -
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                              className="w-8 h-8 border flex items-center justify-center"
                            >
                              +
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.cartId)}
                            className="text-sm text-soft-gray mt-2 hover:text-charcoal"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t">
                  <div className="flex justify-between mb-4">
                    <span className="serif text-lg">Total</span>
                    <span className="serif text-lg">${cartTotal.toFixed(2)}</span>
                  </div>
                  <button className="btn-primary w-full">
                    Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-charcoal text-warm-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="serif text-2xl mb-4">VELMORA</h3>
              <p className="text-sm text-soft-gray">Fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday elegance.</p>
            </div>
            
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4">Shop</h4>
              <ul className="space-y-2">
                {['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Bestsellers'].map((link) => (
                  <li key={link}>
                    <Link to="/shop" className="text-sm text-soft-gray hover:text-warm-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4">Help</h4>
              <ul className="space-y-2">
                {['Shipping & Returns', 'FAQ', 'Contact Us', 'Size Guide', 'Care Instructions'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-soft-gray hover:text-warm-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2">
                {['Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-soft-gray hover:text-warm-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-soft-gray mb-4 md:mb-0">&copy; 2024 Velmora Fine Jewelry. All rights reserved.</p>
            <div className="flex space-x-4">
              {['Instagram', 'Facebook', 'Pinterest', 'TikTok'].map((social) => (
                <a key={social} href="#" className="text-sm text-soft-gray hover:text-warm-white transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
