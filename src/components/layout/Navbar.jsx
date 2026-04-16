import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Product', path: '/product' },
  { label: 'Pricing', path: '/pricing' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-slate-900 tracking-tight">Arcane<span className="text-slate-400">AI</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-slate-900'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/product#contact"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/pricing"
              className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block text-sm font-medium py-2 transition-colors ${
                location.pathname === link.path ? 'text-slate-900' : 'text-slate-500'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/pricing"
            className="block text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-lg text-center mt-2"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
