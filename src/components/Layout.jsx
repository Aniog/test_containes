import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
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
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="bg-slate-900 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              <span>China Sourcing Agent for Global Buyers</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+8613800000000" className="flex items-center gap-1 hover:text-blue-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+86 138 0000 0000</span>
            </a>
            <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-1 hover:text-blue-300 transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@ssourcingchina.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-slate-900">
                SSourcing<span className="text-blue-600">China</span>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-blue-600'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Get a Free Quote
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.path)
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block px-3 py-2 mt-4 bg-blue-600 text-white text-center rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold mb-4">
                SSourcing<span className="text-blue-400">China</span>
              </div>
              <p className="text-slate-300 mb-4 max-w-md">
                Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, 
                verify factories, inspect quality, and coordinate shipping from China.
              </p>
              <div className="flex gap-4">
                <a href="mailto:info@ssourcingchina.com" className="text-slate-300 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="tel:+8613800000000" className="text-slate-300 hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Factory Verification</Link></li>
                <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Quality Inspection</Link></li>
                <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Shipping Coordination</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/how-it-works" className="text-slate-300 hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/case-studies" className="text-slate-300 hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="text-slate-300 hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
