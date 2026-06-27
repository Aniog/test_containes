import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const { itemCount } = useCart();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white shadow-sm'
            : location.pathname === '/'
            ? 'bg-transparent'
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl tracking-widest uppercase transition-colors ${
                isScrolled || location.pathname !== '/'
                  ? 'text-velmora-black'
                  : 'text-white'
              }`}
            >
              Velmora
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-wide uppercase transition-colors hover:opacity-70 ${
                    isScrolled || location.pathname !== '/'
                      ? 'text-velmora-black'
                      : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button
                className={`transition-colors hover:opacity-70 ${
                  isScrolled || location.pathname !== '/'
                    ? 'text-velmora-black'
                    : 'text-white'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className={`relative transition-colors hover:opacity-70 ${
                  isScrolled || location.pathname !== '/'
                    ? 'text-velmora-black'
                    : 'text-white'
                }`}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center cart-badge-pulse">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden transition-colors hover:opacity-70 ${
                  isScrolled || location.pathname !== '/'
                    ? 'text-velmora-black'
                    : 'text-white'
                }`}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm tracking-wide uppercase text-velmora-black hover:opacity-70"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Cart Drawer */}
      {isCartOpen && (
        <CartDrawer onClose={() => setIsCartOpen(false)} />
      )}
    </>
  );
};

// Cart Drawer Component
const CartDrawer = ({ onClose }) => {
  const { items, total, removeFromCart, updateQuantity, clearCart } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl">Your Cart</h2>
            <button onClick={onClose} aria-label="Close cart">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          {items.length === 0 ? (
            <p className="text-center text-velmora-gray-500 py-12">
              Your cart is empty
            </p>
          ) : (
            <>
              <div className="space-y-6 mb-8">
                {items.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-24 h-24 object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-sm uppercase tracking-wider mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-velmora-gray-500 mb-2">
                        {item.material}
                      </p>
                      <p className="text-sm mb-2">${item.price}</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.cartId, item.quantity - 1)
                          }
                          className="w-8 h-8 border flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.cartId, item.quantity + 1)
                          }
                          className="w-8 h-8 border flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.cartId)}
                      className="text-velmora-gray-400 hover:text-velmora-black"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t pt-6">
                <div className="flex justify-between mb-4">
                  <span className="font-serif text-lg">Total</span>
                  <span className="font-serif text-lg">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <button className="w-full btn-premium btn-premium-solid mb-3">
                  Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-sm text-velmora-gray-500 hover:text-velmora-black"
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
