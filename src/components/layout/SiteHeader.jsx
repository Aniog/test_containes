import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
            <Globe className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            SSourcing China
          </span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm font-medium transition-colors ${
                isActive(item.to)
                  ? 'text-slate-900'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex md:items-center md:gap-4">
          <Link
            to="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  isActive(item.to)
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow"
              onClick={() => setOpen(false)}
            >
              Get a Free Sourcing Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
