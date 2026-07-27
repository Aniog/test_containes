import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Shield, ClipboardCheck, Ship, Factory, Search, Phone, Mail, MapPin } from 'lucide-react';
import Button from '@/components/ui/button';

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                +86 136 1234 5678
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                info@ssourcingchina.com
              </span>
            </div>
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              Serving Global Buyers Since 2015
            </span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <div>
                <span className="font-bold text-primary text-lg md:text-xl">SSourcing</span>
                <span className="text-gray-400 font-light hidden sm:inline"> China</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary bg-primary/5'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <Button variant="accent" size="sm">
                Get a Free Sourcing Quote
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-primary"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary bg-primary/5'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3">
                <Button variant="accent" className="w-full" onClick={() => setMobileOpen(false)}>
                  Get a Free Sourcing Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SC</span>
                </div>
                <span className="font-bold text-lg">SSourcing China</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Your trusted China-based sourcing agent. We help global buyers find reliable suppliers, verify factories, and manage quality control.
              </p>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Guangzhou, China
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-300 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-white mb-4">Our Services</h3>
              <ul className="space-y-2.5 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <Search className="w-3.5 h-3.5 text-accent" />
                  Supplier Sourcing
                </li>
                <li className="flex items-center gap-2">
                  <Factory className="w-3.5 h-3.5 text-accent" />
                  Factory Verification
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="w-3.5 h-3.5 text-accent" />
                  Quality Inspection
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-accent" />
                  Production Monitoring
                </li>
                <li className="flex items-center gap-2">
                  <Ship className="w-3.5 h-3.5 text-accent" />
                  Shipping & Logistics
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>info@ssourcingchina.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>+86 136 1234 5678</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>Room 1208, Tianhe Business Center, Guangzhou, China 510000</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button variant="accent" size="sm">
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-4 text-gray-400 text-sm">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}