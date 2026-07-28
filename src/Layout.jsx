import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Mail, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Products We Source', path: '/products' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Globe className="w-8 h-8 text-blue-700" />
            <span className="text-xl font-bold text-slate-900">
              SSourcing <span className="text-blue-700">China</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                  location.pathname === link.path
                    ? 'text-blue-700'
                    : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                    location.pathname === link.path
                      ? 'text-blue-700'
                      : 'text-slate-600'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Free Sourcing Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Supplier Sourcing', path: '/services' },
      { name: 'Factory Verification', path: '/services' },
      { name: 'Quality Inspection', path: '/services' },
      { name: 'Production Monitoring', path: '/services' },
      { name: 'Shipping Coordination', path: '/services' },
    ],
    company: [
      { name: 'About Us', path: '/contact' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
    ],
    resources: [
      { name: 'How It Works', path: '/how-it-works' },
      { name: 'Products We Source', path: '/products' },
      { name: 'FAQ', path: '/#faq' },
    ],
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">
                SSourcing <span className="text-blue-400">China</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and ensure product quality.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+8612345678901" className="hover:text-white transition-colors">
                  +86 123 4567 8901
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Shenzhen, Guangdong, China</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              &copy; {currentYear} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/contact" className="text-sm text-slate-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-sm text-slate-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
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
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
