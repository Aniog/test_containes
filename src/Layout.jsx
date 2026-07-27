import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products We Source' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 no-underline">
              <div className="w-8 h-8 bg-navy-800 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-navy-900 font-bold text-lg">SSourcing China</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 text-sm font-medium rounded-md no-underline transition-colors ${
                    location.pathname === link.to
                      ? 'text-navy-800 bg-navy-50'
                      : 'text-slate-600 hover:text-navy-800 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center gap-1 bg-brand-blue text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors no-underline"
              >
                Get a Free Quote <ChevronRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-slate-600 hover:text-navy-800 bg-transparent border-none"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium rounded-md no-underline ${
                    location.pathname === link.to
                      ? 'text-navy-800 bg-navy-50'
                      : 'text-slate-600 hover:text-navy-800 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block mt-2 bg-brand-blue text-white px-4 py-2 rounded-md text-sm font-medium text-center hover:bg-blue-700 transition-colors no-underline"
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
      <footer className="bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                  <span className="text-navy-900 font-bold text-sm">SS</span>
                </div>
                <span className="font-bold text-lg">SSourcing China</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Your reliable China sourcing partner. We help global buyers find suppliers, verify factories, inspect quality, and coordinate shipping.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-slate-200">Services</h4>
              <ul className="space-y-2">
                {['Supplier Sourcing', 'Factory Verification', 'Quality Inspection', 'Production Follow-up', 'Shipping Coordination'].map((s) => (
                  <li key={s}>
                    <Link to="/services" className="text-slate-300 hover:text-white text-sm no-underline transition-colors">{s}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-slate-200">Company</h4>
              <ul className="space-y-2">
                {[
                  { label: 'About Us', to: '/how-it-works' },
                  { label: 'Case Studies', to: '/case-studies' },
                  { label: 'Blog', to: '/blog' },
                  { label: 'Contact', to: '/contact' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-slate-300 hover:text-white text-sm no-underline transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-slate-200">Get in Touch</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <p>info@ssourcingchina.com</p>
                <p>+86 755 1234 5678</p>
                <p>Shenzhen, Guangdong, China</p>
              </div>
              <Link
                to="/contact"
                className="inline-block mt-4 bg-brand-blue text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors no-underline"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white no-underline transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white no-underline transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
