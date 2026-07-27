import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2, ChevronDown, Globe, Shield, CheckCircle } from 'lucide-react';

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      children: [
        { name: 'Supplier Sourcing', href: '/services#supplier-sourcing' },
        { name: 'Factory Verification', href: '/services#factory-verification' },
        { name: 'Quality Control', href: '/services#quality-control' },
        { name: 'Production Follow-up', href: '/services#production-followup' },
        { name: 'Shipping & Logistics', href: '/services#shipping' },
      ]
    },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Products', href: '/products' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href.split('#')[0]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">SSourcing</span>
                <span className="text-xl font-bold text-blue-600">China</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <button
                        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                          isActive(item.href)
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 animate-fade-in">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive(item.href)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
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
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Get a Free Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100 animate-fade-in">
              <div className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                        isActive(item.href)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-4 px-4">
                  <Link
                    to="/contact"
                    className="btn-primary w-full text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <Link to="/" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">SSourcing</span>
                  <span className="text-xl font-bold text-blue-400">China</span>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, ensure quality, and manage logistics.
              </p>
              <div className="flex items-center gap-4">
                <Globe className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-400">Based in Shenzhen, China</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['Services', 'How It Works', 'Products We Source', 'Case Studies', 'Blog'].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Our Services</h3>
              <ul className="space-y-3">
                {['Supplier Sourcing', 'Factory Verification', 'Quality Control', 'Production Follow-up', 'Shipping & Logistics'].map((item) => (
                  <li key={item}>
                    <span className="text-gray-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:info@ssourcingchina.com" className="text-sm hover:text-white transition-colors">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-400">Response Time</p>
                    <p className="text-sm">Within 24 hours</p>
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/contact" className="btn-primary text-sm">
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
