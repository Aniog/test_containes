import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Factory } from 'lucide-react';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
        <nav className="section-container">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Factory className="h-8 w-8 text-slate-900" />
              <span className="text-xl font-bold tracking-tight text-slate-900">
                ARTITECT MACHINERY
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-slate-900" />
              ) : (
                <Menu className="h-6 w-6 text-slate-900" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-slate-200 py-4">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      <main>{children}</main>

      <footer className="bg-slate-900 text-slate-300">
        <div className="section-container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Factory className="h-6 w-6 text-white" />
                <span className="text-lg font-bold text-white">
                  ARTITECT MACHINERY
                </span>
              </div>
              <p className="text-sm text-slate-400 max-w-md">
                Precision engineering for sheet metal folding solutions. 
                Delivering quality double folding machines and metal folder equipment 
                for industrial applications worldwide.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/products" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-slate-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>info@artitect-machinery.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Industrial District, Tech Park</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800">
            <p className="text-sm text-slate-500 text-center">
              © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
