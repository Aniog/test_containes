import React, { useState, useEffect } from 'react';
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="text-navy font-bold text-lg lg:text-xl">
              SSourcing China
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-navy bg-navy/5'
                    : 'text-body hover:text-navy hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-1 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
          >
            Get a Free Quote
            <ChevronRight className="w-4 h-4" />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-navy"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-navy bg-navy/5'
                    : 'text-body hover:text-navy hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mt-4 text-center bg-accent hover:bg-accent-hover text-white px-5 py-3 rounded-lg font-semibold text-sm transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-charcoal text-gray-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="text-white font-bold text-lg">SSourcing China</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your reliable China sourcing partner. We help global buyers find verified suppliers, manage quality, and coordinate shipping.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Supplier Sourcing</Link></li>
            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Factory Verification</Link></li>
            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Quality Inspection</Link></li>
            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Production Follow-up</Link></li>
            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Shipping Coordination</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
            <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products We Source</Link></li>
            <li><Link to="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
            <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>info@ssourcingchina.com</li>
            <li>+86 755 8888 0000</li>
            <li>Shenzhen, Guangdong, China</li>
          </ul>
          <Link
            to="/contact"
            className="inline-block mt-4 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-white">
    <Navbar />
    <main className="flex-1 pt-16 lg:pt-20">{children}</main>
    <Footer />
  </div>
);

export default Layout;
