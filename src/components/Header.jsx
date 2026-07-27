import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-[#E2E8F0] z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[#0F172A] rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">SS</span>
          </div>
          <span className="font-semibold text-xl text-[#0F172A]">SSourcing China</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'text-[#0F172A]'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-2.5 bg-[#0F172A] text-white text-sm font-medium rounded-lg hover:bg-[#1E293B] transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#0F172A]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-[#E2E8F0] bg-white">
          <nav className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium py-2 ${
                  isActive(link.href) ? 'text-[#0F172A]' : 'text-[#64748B]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-6 py-2.5 bg-[#0F172A] text-white text-sm font-medium rounded-lg"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
