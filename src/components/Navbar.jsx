import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Supplier Verification', path: '/services#verification' },
        { name: 'Quality Control', path: '/services#quality' },
        { name: 'Production Follow-up', path: '/services#production' },
        { name: 'Shipping & Logistics', path: '/services#shipping' },
      ]
    },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Products', path: '/products' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">SSourcing</span>
              <span className="text-xl font-light text-blue-900">China</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-blue-900'
                      : 'text-gray-600 hover:text-blue-900'
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                </Link>
                
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-medium text-sm rounded-lg hover:bg-blue-800 transition-colors duration-200"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className={`block px-4 py-3 text-base font-medium ${
                    isActive(link.path)
                      ? 'text-blue-900 bg-blue-50 rounded-lg'
                      : 'text-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="ml-4 mt-2 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-500"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="block w-full text-center px-6 py-3 bg-blue-900 text-white font-medium rounded-lg mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;