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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-brand-navy text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" />
              info@ssourcingchina.com
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              +86 138 0000 0000
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            Guangzhou, China
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-xl font-bold text-brand-navy">
                SSourcing<span className="text-brand-orange">China</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-brand-orange bg-orange-50'
                      : 'text-brand-dark hover:text-brand-orange hover:bg-gray-50'
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
                className="bg-brand-orange text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-orange-600 transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-brand-dark hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-md text-sm font-medium ${
                    location.pathname === link.path
                      ? 'text-brand-orange bg-orange-50'
                      : 'text-brand-dark hover:text-brand-orange hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-3 bg-brand-orange text-white px-4 py-2.5 rounded-lg font-semibold text-sm text-center hover:bg-orange-600"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SS</span>
                </div>
                <span className="text-lg font-bold">
                  SSourcing<span className="text-brand-orange">China</span>
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from production to delivery.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-base mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link to="/services" className="hover:text-brand-orange transition-colors">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="hover:text-brand-orange transition-colors">Factory Verification</Link></li>
                <li><Link to="/services" className="hover:text-brand-orange transition-colors">Quality Inspection</Link></li>
                <li><Link to="/services" className="hover:text-brand-orange transition-colors">Production Follow-up</Link></li>
                <li><Link to="/services" className="hover:text-brand-orange transition-colors">Shipping Coordination</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-base mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link to="/how-it-works" className="hover:text-brand-orange transition-colors">How It Works</Link></li>
                <li><Link to="/products" className="hover:text-brand-orange transition-colors">Products We Source</Link></li>
                <li><Link to="/case-studies" className="hover:text-brand-orange transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-brand-orange transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-brand-orange transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-base mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 text-brand-orange" />
                  info@ssourcingchina.com
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 text-brand-orange" />
                  +86 138 0000 0000
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-brand-orange" />
                  Guangzhou, Guangdong, China
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2026 SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
