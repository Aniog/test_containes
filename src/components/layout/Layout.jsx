import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone, Mail } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Products', href: '/products' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">SSourcing China</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Header Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+86123456789" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                <Phone className="w-4 h-4 mr-2" />
                +86 123 4567 89
              </a>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-lg text-base font-medium ${
                    isActive(item.href)
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-100">
                <a href="tel:+86123456789" className="flex items-center px-3 py-2 text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  +86 123 4567 89
                </a>
                <Link
                  to="/contact"
                  className="mt-2 block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">SSourcing China</span>
              </div>
              <p className="text-gray-300 max-w-md">
                Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-gray-300 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +86 123 4567 89
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@ssourcingchina.com
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;