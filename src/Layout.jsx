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
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="text-xl font-bold text-neutral-900 tracking-tight">
              SSourcing<span className="text-primary"> China</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary bg-primary-light'
                    : 'text-neutral-700 hover:text-primary hover:bg-neutral-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="bg-accent text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-accent-dark transition-colors text-sm"
            >
              Get a Free Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-neutral-700 hover:bg-neutral-100 border-none bg-transparent"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary bg-primary-light'
                    : 'text-neutral-700 hover:text-primary hover:bg-neutral-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 bg-accent text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-accent-dark transition-colors text-sm text-center"
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
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-lg font-bold tracking-tight">
                SSourcing China
              </span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from production to delivery.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@ssourcingchina.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <Phone className="w-4 h-4 text-primary" />
                <span>+86 755 8888 6666</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Shenzhen, Guangdong, China</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-sm text-neutral-400 hover:text-white transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-sm text-neutral-400 hover:text-white transition-colors">Factory Verification</Link></li>
              <li><Link to="/services" className="text-sm text-neutral-400 hover:text-white transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-sm text-neutral-400 hover:text-white transition-colors">Production Follow-up</Link></li>
              <li><Link to="/services" className="text-sm text-neutral-400 hover:text-white transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/how-it-works" className="text-sm text-neutral-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="text-sm text-neutral-400 hover:text-white transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="text-sm text-neutral-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-sm text-neutral-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-neutral-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Get Started</h4>
            <p className="text-sm text-neutral-400 mb-4">
              Ready to source from China with confidence? Get your free sourcing quote today.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-accent text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-accent-dark transition-colors text-sm"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            © 2026 SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-neutral-500">Privacy Policy</span>
            <span className="text-sm text-neutral-500">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
