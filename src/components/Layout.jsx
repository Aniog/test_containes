import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { state, dispatch } = useCart();
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

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <div className="min-h-screen bg-velmora-white">
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-velmora-white shadow-soft' : 'bg-transparent'
      }`}>
        <div className="container-luxury py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="font-serif text-2xl tracking-widest text-velmora-black">
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-wide uppercase ${
                    isScrolled ? 'text-velmora-black' : 'text-velmora-white'
                  } hover:opacity-70 transition-opacity`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button className={`${isScrolled ? 'text-velmora-black' : 'text-velmora-white'} hover:opacity-70`}>
                <Search size={20} />
              </button>
              
              <button
                onClick={() => dispatch({ type: 'TOGGLE_CART' })}
                className={`relative ${isScrolled ? 'text-velmora-black' : 'text-velmora-white'} hover:opacity-70`}
              >
                <ShoppingBag size={20} />
                {state.totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-velmora-gold text-velmora-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {state.totalItems}
                  </span>
                )}
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden ${isScrolled ? 'text-velmora-black' : 'text-velmora-white'}`}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-velmora-white border-t border-velmora-beige">
            <div className="container-luxury py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm tracking-wide uppercase text-velmora-black hover:text-velmora-gold"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Cart Drawer */}
      {state.isOpen && <CartDrawer />}

      {/* Footer */}
      <Footer />
    </div>
  );
};

const CartDrawer = () => {
  const { state, dispatch } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={() => dispatch({ type: 'CLOSE_CART' })}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-velmora-white z-50 shadow-premium overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-2xl">Your Cart</h2>
            <button onClick={() => dispatch({ type: 'CLOSE_CART' })}>
              <X size={24} />
            </button>
          </div>

          {state.items.length === 0 ? (
            <p className="text-velmora-text-light text-center py-8">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {state.items.map((item) => (
                  <div key={item.id} className="flex gap-4 py-4 border-b border-velmora-beige">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-20 h-20 object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-sm uppercase tracking-wide">{item.name}</h3>
                      <p className="text-velmora-gold font-medium">${item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => dispatch({
                            type: 'UPDATE_QUANTITY',
                            payload: { id: item.id, quantity: item.quantity - 1 }
                          })}
                          className="w-6 h-6 border border-velmora-beige flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => dispatch({
                            type: 'UPDATE_QUANTITY',
                            payload: { id: item.id, quantity: item.quantity + 1 }
                          })}
                          className="w-6 h-6 border border-velmora-beige flex items-center justify-center"
                        >
                          +
                        </button>
                        <button
                          onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                          className="ml-auto text-sm text-velmora-text-light hover:text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-velmora-beige pt-4">
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">${state.totalPrice.toFixed(2)}</span>
                </div>
                <button className="w-full btn-premium">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="bg-velmora-black text-velmora-white py-16 mt-20">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div>
            <h3 className="font-serif text-2xl tracking-widest mb-4">VELMORA</h3>
            <p className="text-sm text-gray-400 mb-6">
              Fine jewelry crafted to be treasured. Each piece tells a story of elegance and timeless beauty.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-velmora-gold">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-velmora-gold">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-velmora-gold">
                Pinterest
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-medium uppercase tracking-wide mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop?category=Earrings" className="text-gray-400 hover:text-velmora-gold text-sm">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="text-gray-400 hover:text-velmora-gold text-sm">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="text-gray-400 hover:text-velmora-gold text-sm">Huggies</Link></li>
              <li><Link to="/shop?category=Sets" className="text-gray-400 hover:text-velmora-gold text-sm">Sets</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-velmora-gold text-sm">All Products</Link></li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-medium uppercase tracking-wide mb-4">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-velmora-gold text-sm">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-velmora-gold text-sm">Size Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-velmora-gold text-sm">Care Instructions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-velmora-gold text-sm">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-velmora-gold text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-medium uppercase tracking-wide mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-velmora-gold text-sm">Our Story</Link></li>
              <li><Link to="/journal" className="text-gray-400 hover:text-velmora-gold text-sm">Journal</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-velmora-gold text-sm">Sustainability</a></li>
              <li><a href="#" className="text-gray-400 hover:text-velmora-gold text-sm">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Payment methods:</span>
            <span className="text-gray-400 text-sm">Visa</span>
            <span className="text-gray-400 text-sm">Mastercard</span>
            <span className="text-gray-400 text-sm">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Layout;
