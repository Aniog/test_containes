import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products', path: '/products' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center text-white font-extrabold text-lg">
              S
            </div>
            <span className="text-xl font-extrabold text-navy tracking-tight group-hover:text-navy-light transition-colors">
              SSourcing China
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-amber'
                    : 'text-slate hover:text-navy'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="mailto:hello@ssourcingchina.com"
              className="text-sm font-medium text-slate-muted hover:text-navy"
            >
              hello@ssourcingchina.com
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-amber text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-amber-hover transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'text-amber bg-amber-light'
                    : 'text-slate hover:bg-cloud'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-amber text-white text-base font-semibold px-5 py-3 rounded-lg hover:bg-amber-hover transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
