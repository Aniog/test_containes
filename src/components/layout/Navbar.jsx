import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products', path: '/products' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header className="bg-white border-b border-brand-border sticky top-0 z-50 shadow-sm">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-[#1a4f8a] rounded-md flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-brand-dark">
              SS<span className="text-[#1a4f8a]">ourcing</span>
              <span className="text-[#c0392b] ml-0.5">China</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-[#1a4f8a] bg-blue-50'
                    : 'text-brand-body hover:text-[#1a4f8a] hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-[#1a4f8a] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#163f6e] transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-brand-body hover:text-[#1a4f8a] hover:bg-gray-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-brand-border">
          <div className="section-container py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-[#1a4f8a] bg-blue-50'
                    : 'text-brand-body hover:text-[#1a4f8a] hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 bg-[#1a4f8a] text-white px-4 py-2.5 rounded-lg text-sm font-semibold text-center hover:bg-[#163f6e] transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
