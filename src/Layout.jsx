import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/products', label: 'Products We Source' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-navy-900 text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              info@ssourcingchina.com
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +86 755 8888 6666
            </span>
          </div>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Shenzhen, Guangdong, China
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              SS
            </div>
            <div>
              <span className="text-xl font-bold text-navy-900">SSourcing</span>
              <span className="text-xl font-bold text-primary-500"> China</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-500'
                    : 'text-navy-700 hover:text-primary-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-accent-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-accent-600 transition-colors"
            >
              Get a Free Quote
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-navy-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden bg-white border-t border-navy-100 px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block text-sm font-medium py-2 ${
                  location.pathname === link.path
                    ? 'text-primary-500'
                    : 'text-navy-700 hover:text-primary-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block bg-accent-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-accent-600 transition-colors text-center"
            >
              Get a Free Quote
            </Link>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  SS
                </div>
                <div>
                  <span className="text-xl font-bold">SSourcing</span>
                  <span className="text-xl font-bold text-primary-400"> China</span>
                </div>
              </div>
              <p className="text-navy-300 text-sm leading-relaxed">
                Professional China sourcing agent helping global buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-navy-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <div className="space-y-2 text-navy-300 text-sm">
                <p>Supplier Search & Verification</p>
                <p>Factory Audit & Inspection</p>
                <p>Quality Control & Testing</p>
                <p>Production Follow-up</p>
                <p>Shipping & Logistics</p>
                <p>Customs & Compliance</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-navy-300 text-sm">
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@ssourcingchina.com
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +86 755 8888 6666
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Nanshan District, Shenzhen, Guangdong, China
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-navy-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-navy-400 text-sm">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-6 text-navy-400 text-sm">
              <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
