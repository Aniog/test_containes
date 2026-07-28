import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Products', path: '/products' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold text-primary">SSourcing China</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-text-muted hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/5 rounded'
                      : 'text-text-muted'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-semibold text-sm text-center mx-4 mt-2"
                onClick={() => setIsOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold">SSourcing China</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-sm font-medium">LN</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-sm font-medium">FB</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-sm font-medium">TW</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/70 hover:text-white text-sm transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white text-sm transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="text-white/70 hover:text-white text-sm transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="text-white/70 hover:text-white text-sm transition-colors">Products</Link></li>
              <li><Link to="/case-studies" className="text-white/70 hover:text-white text-sm transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-white/70 hover:text-white text-sm transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-white/70 hover:text-white text-sm transition-colors">Supplier Verification</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white text-sm transition-colors">Factory Audits</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white text-sm transition-colors">Quality Control</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white text-sm transition-colors">Production Follow-up</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white text-sm transition-colors">Shipping & Logistics</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white text-sm transition-colors">Sample Management</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="text-white/70 text-sm">
                <strong className="text-white">Email:</strong><br />
                info@ssourcing-china.com
              </li>
              <li className="text-white/70 text-sm">
                <strong className="text-white">Phone:</strong><br />
                +86 123 4567 8900
              </li>
              <li className="text-white/70 text-sm">
                <strong className="text-white">Location:</strong><br />
                Guangzhou, China
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              &copy; {currentYear} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;