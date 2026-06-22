import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { PackageSearch, Menu, X, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Products We Source', href: '/products-we-source' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Top bar */}
      <div className="bg-blue-900 text-white text-sm py-2 px-4 md:px-8 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <span className="hidden md:flex items-center gap-2">
            <Mail className="h-4 w-4" /> info@ssourcingchina.com
          </span>
          <span className="hidden md:flex items-center gap-2">
            <Phone className="h-4 w-4" /> +86 138-xxxx-xxxx
          </span>
        </div>
        <div className="flex gap-4">
          <Link to="/contact" className="hover:text-orange-400 transition-colors">Request a Quote</Link>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <div className="bg-blue-800 p-2 rounded-lg">
                  <PackageSearch className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-2xl tracking-tight text-blue-800">SSourcing<span className="text-orange-500">China</span></span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'border-orange-500 text-blue-800'
                      : 'border-transparent text-slate-600 hover:text-blue-800 hover:border-slate-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Link
                to="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-6 rounded-md transition-colors shadow-sm"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    isActive(item.href)
                      ? 'bg-blue-50 border-orange-500 text-blue-800'
                      : 'border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 px-4">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="bg-white/10 p-1.5 rounded text-white">
                  <PackageSearch className="h-6 w-6" />
                </div>
                <span className="font-bold text-2xl tracking-tight text-white">SSourcing<span className="text-orange-500">China</span></span>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Your reliable partner for sourcing, manufacturing, and supply chain management in China. We help global buyers navigate the Chinese market safely and efficiently.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-slate-100">Company</h3>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">About Us</Link></li>
                <li><Link to="/services" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">Our Services</Link></li>
                <li><Link to="/how-it-works" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">How It Works</Link></li>
                <li><Link to="/case-studies" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">Case Studies</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-slate-100">Services</h3>
              <ul className="space-y-4">
                <li><Link to="/services" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">Factory Audits</Link></li>
                <li><Link to="/services" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">Quality Control</Link></li>
                <li><Link to="/services" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">Shipping & Logistics</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-slate-100">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-400 text-sm">
                  <MapPin className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
                  <span>Futian District, Shenzhen, Guangdong Province, China</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <Phone className="h-5 w-5 text-slate-500 shrink-0" />
                  <span>+86 138-xxxx-xxxx</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <Mail className="h-5 w-5 text-slate-500 shrink-0" />
                  <span>info@ssourcingchina.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;