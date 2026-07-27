import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 no-underline">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-primary-900 font-bold text-lg tracking-tight">SSourcing China</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors no-underline ${
                    location.pathname === link.path
                      ? 'text-primary-500 bg-primary-50'
                      : 'text-neutral-700 hover:text-primary-500 hover:bg-neutral-50'
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
                className="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors no-underline"
              >
                Get a Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-neutral-700 hover:bg-neutral-50 border-0 bg-transparent"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-neutral-200 bg-white">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2.5 rounded-md text-sm font-medium no-underline ${
                    location.pathname === link.path
                      ? 'text-primary-500 bg-primary-50'
                      : 'text-neutral-700 hover:text-primary-500 hover:bg-neutral-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block bg-accent-500 hover:bg-accent-600 text-white px-3 py-2.5 rounded-lg font-semibold text-sm text-center mt-3 no-underline"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SS</span>
                </div>
                <span className="text-white font-bold text-lg">SSourcing China</span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from production to delivery.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4">Services</h3>
              <ul className="space-y-2">
                {['Supplier Search', 'Factory Verification', 'Quality Inspection', 'Production Follow-up', 'Shipping Coordination'].map((s) => (
                  <li key={s}>
                    <Link to="/services" className="text-neutral-400 hover:text-white text-sm no-underline transition-colors">{s}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
              <ul className="space-y-2">
                {[
                  { label: 'About Us', path: '/' },
                  { label: 'How It Works', path: '/how-it-works' },
                  { label: 'Case Studies', path: '/case-studies' },
                  { label: 'Blog', path: '/blog' },
                  { label: 'Contact', path: '/contact' },
                ].map((c) => (
                  <li key={c.label}>
                    <Link to={c.path} className="text-neutral-400 hover:text-white text-sm no-underline transition-colors">{c.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4">Contact Us</h3>
              <div className="space-y-3 text-sm text-neutral-400">
                <p>Shanghai, China</p>
                <p>info@ssourcingchina.com</p>
                <p>+86 21 5XXX XXXX</p>
                <Link
                  to="/contact"
                  className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg font-semibold text-sm mt-2 no-underline transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">&copy; 2024 SSourcing China. All rights reserved.</p>
            <div className="flex gap-6 text-neutral-500 text-sm">
              <span className="hover:text-neutral-300 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-neutral-300 cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
