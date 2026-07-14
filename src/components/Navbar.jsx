import { Link, useLocation } from 'react-router-dom';
import { Users, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Contacts', href: '/contacts' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
            <Users className="w-6 h-6" />
            <span>ConnectUs</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'text-indigo-600'
                    : 'text-gray-600 hover:text-indigo-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded-lg transition-colors text-sm"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-indigo-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block font-medium py-1 ${
                location.pathname === link.href
                  ? 'text-indigo-600'
                  : 'text-gray-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg text-center text-sm"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
