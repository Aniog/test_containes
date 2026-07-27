import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { 
      label: 'Services', 
      children: [
        { path: '/services', label: 'All Services' },
        { path: '/services#supplier-search', label: 'Supplier Search' },
        { path: '/services#factory-verification', label: 'Factory Verification' },
        { path: '/services#quality-control', label: 'Quality Control' },
        { path: '/services#shipping', label: 'Shipping Coordination' },
      ]
    },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/products', label: 'Products' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SS</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-[#1E3A5F] font-bold text-lg">SSourcing</span>
              <span className="text-[#64748B] text-sm block -mt-1">China</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              item.children ? (
                <div key={item.label} className="relative group">
                  <button className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${isActive('/services') ? 'text-[#1E3A5F]' : 'text-[#64748B] hover:text-[#1E3A5F]'}`}>
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-[#E2E8F0] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2 text-sm text-[#64748B] hover:text-[#1E3A5F] hover:bg-[#F8FAFC]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${isActive(item.path) ? 'text-[#1E3A5F]' : 'text-[#64748B] hover:text-[#1E3A5F]'}`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#C9A227] text-white px-6 py-3 rounded-md font-semibold text-sm hover:bg-[#B8922A] transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#64748B]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E2E8F0] py-4">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <div className="px-4 py-2 text-sm font-semibold text-[#1E3A5F]">
                      {item.label}
                    </div>
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block pl-8 pr-4 py-2 text-sm text-[#64748B] hover:text-[#1E3A5F]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`block px-4 py-2 text-sm font-medium ${isActive(item.path) ? 'text-[#1E3A5F]' : 'text-[#64748B]'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 px-4">
              <Link
                to="/contact"
                className="block w-full text-center bg-[#C9A227] text-white px-6 py-3 rounded-md font-semibold text-sm hover:bg-[#B8922A] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/products', label: 'Products We Source' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const services = [
    'Supplier Search & Verification',
    'Factory Audits',
    'Quality Control Inspections',
    'Production Follow-up',
    'Shipping & Logistics',
    'Sample Management',
  ];

  return (
    <footer className="bg-[#1E3A5F] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#1E3A5F] font-bold text-lg">SS</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg">SSourcing</span>
                <span className="text-white/70 text-sm block -mt-1">China</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Professional China sourcing agent helping global buyers find reliable suppliers, verify factories, ensure quality, and coordinate seamless shipping.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-white/70 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C9A227] mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">Room 1208, Building A<br />Yonghe Plaza, Guangzhou<br />China 510000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C9A227] shrink-0" />
                <a href="tel:+862012345678" className="text-white/70 text-sm hover:text-white transition-colors">
                  +86 20 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C9A227] shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-white/70 text-sm hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#C9A227] shrink-0" />
                <span className="text-white/70 text-sm">24/7 Online Support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {currentYear} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-white/50 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/50 text-sm hover:text-white transition-colors">
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
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
