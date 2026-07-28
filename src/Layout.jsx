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

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="text-xl font-bold text-neutral-800">
              SSourcing <span className="text-brand-500">China</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === link.to
                    ? 'text-brand-500 bg-brand-50'
                    : 'text-neutral-600 hover:text-brand-500 hover:bg-neutral-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 bg-accent-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-accent-600 transition-colors"
            >
              Get a Free Quote
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-neutral-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === link.to
                    ? 'text-brand-500 bg-brand-50'
                    : 'text-neutral-600 hover:text-brand-500 hover:bg-neutral-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 text-center bg-accent-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-accent-600 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-neutral-800 text-neutral-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="text-lg font-bold text-white">
              SSourcing China
            </span>
          </div>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Your reliable China sourcing partner. We help global buyers find verified suppliers, manage quality, and coordinate shipping.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-white transition-colors">Supplier Sourcing</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Factory Verification</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Quality Inspection</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Production Follow-up</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Shipping Coordination</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
            <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>Guangzhou, Guangdong, China</li>
            <li>info@ssourcingchina.com</li>
            <li>+86 755 1234 5678</li>
          </ul>
          <Link
            to="/contact"
            className="inline-block mt-4 bg-accent-500 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-accent-600 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>

      <div className="border-t border-neutral-700 mt-10 pt-8 text-center text-sm text-neutral-500">
        &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
      </div>
    </div>
  </footer>
);

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-white">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
