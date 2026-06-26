import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Supplier Research', path: '/services#supplier-research' },
        { name: 'Factory Verification', path: '/services#factory-verification' },
        { name: 'Quality Control', path: '/services#quality-control' },
        { name: 'Production Follow-up', path: '/services#production' },
        { name: 'Shipping Coordination', path: '/services#shipping' },
      ]
    },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Products', path: '/products' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-800">SSourcing</span>
              <span className="text-xs text-slate-500 -mt-1">China</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                        isActive(item.path) 
                          ? 'text-blue-600' 
                          : 'text-slate-600 hover:text-blue-600'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-slate-200 py-2 animate-fade-in">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      isActive(item.path) 
                        ? 'text-blue-600' 
                        : 'text-slate-600 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-blue-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 py-4 animate-fade-in">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium ${
                    isActive(item.path) ? 'text-blue-600 bg-blue-50' : 'text-slate-600'
                  }`}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-6">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-slate-500 hover:text-blue-600"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 pt-4">
              <Link to="/contact" className="btn-primary w-full justify-center" onClick={() => setIsOpen(false)}>
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

  const footerLinks = {
    services: [
      { name: 'Supplier Research', path: '/services#supplier-research' },
      { name: 'Factory Verification', path: '/services#factory-verification' },
      { name: 'Quality Control', path: '/services#quality-control' },
      { name: 'Production Follow-up', path: '/services#production' },
      { name: 'Shipping Coordination', path: '/services#shipping' },
    ],
    company: [
      { name: 'About Us', path: '/#about' },
      { name: 'How It Works', path: '/how-it-works' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Blog', path: '/blog' },
    ],
    support: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'FAQ', path: '/#faq' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ],
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">SSourcing</span>
                <span className="text-xs text-slate-400 -mt-1">China</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm mb-6">
              Your trusted China sourcing partner. We help overseas businesses find reliable suppliers, verify factories, and ensure quality products.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">Room 1208, Building A<br />Guangzhou, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <a href="tel:+862012345678" className="text-slate-400 hover:text-white text-sm transition-colors">
                  +86 20 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-slate-400 hover:text-white text-sm transition-colors">
                  info@ssourcingchina.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
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
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
