import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products We Source', path: '/products' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-primary-dark text-white text-sm hidden md:block">
        <div className="container py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" />
              +86 21 1234 5678
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              hello@ssourcingchina.com
            </span>
          </div>
          <span className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            Shanghai, China — Serving Global Buyers
          </span>
        </div>
      </div>

      {/* Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md'
            : 'bg-white shadow-sm'
        }`}
      >
        <div className="container py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <span className="text-xl font-bold text-primary block leading-tight">
                SSourcing
              </span>
              <span className="text-xs text-neutral-mediumgray block leading-tight">
                China
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary bg-primary-light'
                    : 'text-neutral-darkgray hover:text-primary hover:bg-primary-light'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors inline-block"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-neutral-darkgray"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-neutral-lightgray bg-white">
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'text-primary bg-primary-light'
                      : 'text-neutral-darkgray hover:bg-primary-light'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent-dark text-white px-4 py-3 rounded-md text-base font-semibold transition-colors text-center mt-2"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-neutral-darkgray text-white">
        <div className="container section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <div>
                  <span className="text-lg font-bold block leading-tight">SSourcing</span>
                  <span className="text-xs text-neutral-mediumgray block leading-tight">China</span>
                </div>
              </div>
              <p className="text-neutral-mediumgray text-sm leading-relaxed mb-4">
                Your reliable sourcing partner in China. We help overseas buyers find trustworthy suppliers, verify factories, inspect quality, and manage shipping.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-neutral-mediumgray">
                <li><Link to="/services" className="hover:text-white transition-colors">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Factory Verification</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Quality Inspection</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Production Follow-Up</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Shipping Coordination</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-neutral-mediumgray">
                <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-neutral-mediumgray">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  Room 1205, Tower B, SOHO Donghai Plaza, 299 Tongren Road, Jing'an District, Shanghai 200040, China
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0" />
                  +86 21 1234 5678
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0" />
                  hello@ssourcingchina.com
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-mediumgray/30 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-mediumgray text-sm">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-neutral-mediumgray">
              <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
