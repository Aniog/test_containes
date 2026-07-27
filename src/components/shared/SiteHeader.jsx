import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Products', href: '/products' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
              <span className="text-sm font-bold">SS</span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-slate-900">SSourcing China</p>
              <p className="text-xs text-slate-500">Trusted China Sourcing Agent</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`transition-colors hover:text-slate-900 ${
                  location.pathname === item.href ? 'text-slate-900' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="mailto:info@ssourcingchina.com" className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900">
              <Mail className="h-4 w-4" />
              info@ssourcingchina.com
            </a>
            <Button asChild size="sm">
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 bg-white pb-4">
            <nav className="flex flex-col gap-1 pt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    location.pathname === item.href
                      ? 'bg-slate-100 text-slate-900'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-md bg-slate-900 px-3 py-2 text-center text-sm font-medium text-white"
              >
                Get a Free Sourcing Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;
