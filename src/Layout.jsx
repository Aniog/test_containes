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

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <span className="text-xl md:text-2xl font-bold text-navy">
              SSourcing<span className="text-orange">China</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium no-underline transition-colors ${
                  location.pathname === link.path
                    ? 'text-navy bg-slate-100'
                    : 'text-slate-700 hover:text-navy hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="bg-orange text-white px-5 py-2.5 rounded-lg font-semibold text-sm no-underline hover:bg-orange-dark transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 border-none bg-transparent"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-sm font-medium no-underline ${
                  location.pathname === link.path
                    ? 'text-navy bg-slate-100'
                    : 'text-slate-700 hover:text-navy hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 bg-orange text-white px-4 py-2.5 rounded-lg font-semibold text-sm text-center no-underline hover:bg-orange-dark transition-colors"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              SSourcing<span className="text-orange">China</span>
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from production to delivery.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><Link to="/services" className="text-slate-300 text-sm hover:text-white no-underline transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-slate-300 text-sm hover:text-white no-underline transition-colors">Factory Verification</Link></li>
              <li><Link to="/services" className="text-slate-300 text-sm hover:text-white no-underline transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-slate-300 text-sm hover:text-white no-underline transition-colors">Production Follow-up</Link></li>
              <li><Link to="/services" className="text-slate-300 text-sm hover:text-white no-underline transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><Link to="/how-it-works" className="text-slate-300 text-sm hover:text-white no-underline transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="text-slate-300 text-sm hover:text-white no-underline transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="text-slate-300 text-sm hover:text-white no-underline transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-slate-300 text-sm hover:text-white no-underline transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-slate-300 text-sm hover:text-white no-underline transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">info@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">+86 136 0000 8888</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Guangzhou, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-600 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © 2026 SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-slate-400 text-sm hover:text-white no-underline transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="text-slate-400 text-sm hover:text-white no-underline transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
