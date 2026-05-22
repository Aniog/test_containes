import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Leaf } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const { pathname } = useLocation();

  const homeLinks = [
    { label: 'Shop', href: '/#shop' },
    { label: 'Categories', href: '/#categories' },
    { label: 'About', href: '/#about' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-green-700 font-extrabold text-xl tracking-tight">
            <Leaf className="w-6 h-6 text-green-600" />
            FreshFruit
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {homeLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-gray-600 hover:text-green-700 font-medium text-sm transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/reviews"
                className={`font-medium text-sm transition-colors ${
                  pathname === '/reviews'
                    ? 'text-green-700 font-semibold'
                    : 'text-gray-600 hover:text-green-700'
                }`}
              >
                Reviews
              </Link>
            </li>
          </ul>

          {/* Cart + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Shopping cart"
              onClick={() => setIsOpen(true)}
              className="relative bg-green-50 hover:bg-green-100 text-green-700 rounded-full p-2 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </button>
            <button
              className="md:hidden text-gray-600 hover:text-green-700 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {homeLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="block text-gray-700 hover:text-green-700 font-medium py-1 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/reviews"
                className={`block font-medium py-1 transition-colors ${
                  pathname === '/reviews' ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
