import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone, Mail } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/products', label: 'Products We Source' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <div className="bg-brand-navy text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" />
              Based in Guangzhou, China
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" />
              info@ssourcingchina.com
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-3.5 h-3.5" />
            +86 130 1234 5678
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="text-xl font-bold text-brand-navy">SSourcing China</span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-brand-blue'
                    : 'text-neutral-700 hover:text-brand-blue'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-brand-blue text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
            >
              Get a Free Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-neutral-700 bg-transparent border-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-neutral-200 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block py-2.5 text-sm font-medium ${
                  location.pathname === link.path
                    ? 'text-brand-blue'
                    : 'text-neutral-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-4 bg-brand-blue text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center"
            >
              Get a Free Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-xl font-bold">SSourcing China</span>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Your trusted sourcing partner in China. We help global buyers find reliable suppliers, verify factories, and ensure quality from production to delivery.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-neutral-300 text-sm">
              <li><Link to="/services" className="hover:text-white transition">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Factory Verification</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Quality Inspection</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Production Follow-up</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-neutral-300 text-sm">
              <li><Link to="/how-it-works" className="hover:text-white transition">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-white transition">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-neutral-300 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                info@ssourcingchina.com
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                +86 130 1234 5678
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 mt-0.5 shrink-0" />
                Guangzhou, Guangdong, China
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            © 2026 SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6 text-neutral-400 text-sm">
            <span className="hover:text-white transition cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
