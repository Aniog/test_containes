import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products We Source', path: '/products' },
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
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-brand-blue rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="font-bold text-brand-blue text-lg leading-tight">
              SSourcing<span className="text-brand-accent"> China</span>
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
                    ? 'text-brand-accent bg-blue-50'
                    : 'text-slate-700 hover:text-brand-accent hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-brand-accent hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? 'text-brand-accent bg-blue-50'
                  : 'text-slate-700 hover:text-brand-accent hover:bg-slate-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 pb-1">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-brand-accent hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
