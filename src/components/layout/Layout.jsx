import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';

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
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 text-sm">
        <div className="section-container flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              <a href="mailto:info@ssourcingchina.com" className="hover:text-blue-300 transition-colors">info@ssourcingchina.com</a>
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              <span>+86 755 8888 9999</span>
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5" />
            <span>Shenzhen, China</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SS</span>
              </div>
              <div>
                <span className="text-xl font-bold text-slate-900">SSourcing</span>
                <span className="text-xl font-light text-blue-600 ml-1">China</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/contact" className="btn-accent">
                Get a Free Sourcing Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="section-container py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="btn-accent w-full justify-center"
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
      <footer className="bg-slate-900 text-slate-300">
        <div className="section-container section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SS</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-white">SSourcing</span>
                  <span className="text-xl font-light text-blue-400 ml-1">China</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                Your trusted partner for sourcing products from China. We help global buyers find reliable suppliers, verify factories, and ensure quality.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Shenzhen, Guangdong, China</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">info@ssourcingchina.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>+86 755 8888 9999</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="hover:text-white transition-colors">Product Sourcing</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Supplier Verification</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Quality Inspection</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Production Monitoring</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Shipping Coordination</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors">Products We Source</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog & Resources</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
              <p className="text-sm text-slate-400 mb-4">Get sourcing tips and industry insights delivered to your inbox.</p>
              <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="btn-primary w-full justify-center">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
