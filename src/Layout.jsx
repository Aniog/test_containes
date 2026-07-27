import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, Search, Mail, Phone, MapPin, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Products', path: '/products-we-source' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center"><Mail className="w-4 h-4 mr-2" /> info@ssourcingchina.com</span>
            <span className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +86 123 4567 8900</span>
          </div>
          <div className="flex space-x-4">
            <span>Guangzhou, China</span>
            <span className="text-slate-500">|</span>
            <Link to="/contact" className="hover:text-white transition-colors">Request Callback</Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center text-white font-bold text-xl">
              SS
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">SSourcing China</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? 'text-primary' : 'text-slate-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-md font-semibold transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg">
            <nav className="flex flex-col py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-6 py-3 font-medium transition-colors ${
                    isActive(item.path) ? 'text-primary bg-slate-50' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-6 pt-4 pb-2">
                 <Link 
                  to="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground block text-center py-3 rounded-md font-semibold transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold text-lg">
                  SS
                </div>
                <span className="font-bold text-xl tracking-tight text-white">SSourcing China</span>
              </Link>
              <p className="text-slate-400 mb-6">
                Your reliable partner in China. We help global buyers find verified suppliers, manage quality control, and ensure smooth shipping.
              </p>
              <div className="flex space-x-4">
                {/* Social icons would go here */}
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {navigation.slice(0, 4).map(item => (
                  <li key={item.name}>
                    <Link to={item.path} className="hover:text-primary transition-colors flex items-center group">
                      <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                <li><Link to="/services" className="hover:text-primary transition-colors">Supplier Verification</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Product Development</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Quality Control</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Shipping & Logistics</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-primary shrink-0 mt-0.5" />
                  <span>Suite 1205, Business Tower, Tianhe District, Guangzhou, China 510000</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-primary shrink-0" />
                  <span>+86 123 4567 8900</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-primary shrink-0" />
                  <span>info@ssourcingchina.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
