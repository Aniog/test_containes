import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Mail, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products We Source', path: '/products' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              sourcing@ssourcingchina.com
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +86 755 8888 8888
            </span>
          </div>
          <span className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Serving buyers in 40+ countries
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">SSourcing</span>
                <span className="text-xl font-light text-muted-foreground ml-1">China</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary bg-primary/5'
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact" className="btn-primary">
                Get a Free Sourcing Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-primary/5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border">
            <nav className="container-custom py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary bg-primary/5'
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="btn-primary w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Free Sourcing Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0A1628] text-white">
        <div className="container-custom py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <span className="text-xl font-bold">SSourcing</span>
                  <span className="text-xl font-light text-white/60 ml-1">China</span>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Your trusted sourcing partner in China. We help global buyers find reliable suppliers, verify factories, and ensure product quality.
              </p>
              <div className="space-y-2 text-sm text-white/70">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent" />
                  sourcing@ssourcingchina.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent" />
                  +86 755 8888 8888
                </p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/services" className="hover:text-accent transition-colors">Product Sourcing</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-colors">Supplier Verification</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-colors">Quality Inspection</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-colors">Production Follow-up</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-colors">Shipping Coordination</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/how-it-works" className="hover:text-accent transition-colors">How It Works</Link></li>
                <li><Link to="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-semibold text-white mb-4">Products We Source</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/products" className="hover:text-accent transition-colors">Electronics & Components</Link></li>
                <li><Link to="/products" className="hover:text-accent transition-colors">Machinery & Equipment</Link></li>
                <li><Link to="/products" className="hover:text-accent transition-colors">Consumer Goods</Link></li>
                <li><Link to="/products" className="hover:text-accent transition-colors">Building Materials</Link></li>
                <li><Link to="/products" className="hover:text-accent transition-colors">Textiles & Apparel</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/50">
              <Link to="/contact" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
              <Link to="/contact" className="hover:text-white/70 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
