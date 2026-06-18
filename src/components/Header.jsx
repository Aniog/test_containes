import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/products', label: 'Products' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="ml-3 text-xl font-bold text-[#1E3A5F]">
                SSourcing<span className="text-[#E67E22]">China</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                  isActive(link.path)
                    ? 'text-[#E67E22] bg-orange-50'
                    : 'text-[#1E293B] hover:text-[#1E3A5F] hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="btn-primary"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#1E293B]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-md ${
                  isActive(link.path)
                    ? 'text-[#E67E22] bg-orange-50'
                    : 'text-[#1E293B] hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary block text-center"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;