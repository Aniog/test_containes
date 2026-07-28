import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/products', label: 'Products' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#1E3A5F] rounded flex items-center justify-center">
                <span className="text-white font-semibold text-sm">SS</span>
              </div>
              <span className="font-semibold text-xl text-[#1F2937]">SSourcing China</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-[#1E3A5F]'
                      : 'text-[#4B5563] hover:text-[#1E3A5F]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="px-4 py-2 bg-[#1E3A5F] text-white text-sm font-medium rounded hover:bg-[#2E5A8B] transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium ${
                    isActive(link.href) ? 'text-[#1E3A5F]' : 'text-[#4B5563]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 bg-[#1E3A5F] text-white text-sm font-medium rounded text-center"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">{children}</main>

      <footer className="bg-[#1F2937] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-[#1E3A5F] font-semibold text-sm">SS</span>
                </div>
                <span className="font-semibold text-lg">SSourcing China</span>
              </div>
              <p className="text-sm text-slate-400">
                Your trusted partner for sourcing from China.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="flex flex-col gap-2 text-sm text-slate-400">
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                <Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
                <Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="flex flex-col gap-2 text-sm text-slate-400">
                <Link to="/products" className="hover:text-white transition-colors">Products</Link>
                <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="flex flex-col gap-3 text-sm text-slate-400">
                <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={16} /> info@ssourcingchina.com
                </a>
                <a href="tel:+862162345678" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone size={16} /> +86 21 6234 5678
                </a>
                <p>Shanghai, China</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700 text-sm text-slate-400 text-center">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
