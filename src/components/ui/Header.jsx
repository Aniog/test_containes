import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products We Source' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-brand-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-brand-800 text-lg leading-tight">SSourcing</span>
              <span className="text-xs text-slate-500 leading-tight -mt-0.5">China</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-brand-800 bg-brand-50'
                      : 'text-slate-600 hover:text-brand-700 hover:bg-slate-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex bg-accent-600 hover:bg-accent-500 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
            <button
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-brand-800 bg-brand-50'
                      : 'text-slate-600 hover:text-brand-700 hover:bg-slate-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-accent-600 hover:bg-accent-500 text-white font-semibold px-5 py-3 rounded-lg text-sm transition-colors mt-3"
            >
              Get a Free Sourcing Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}