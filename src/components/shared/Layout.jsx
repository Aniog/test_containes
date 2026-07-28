import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ShieldCheck, Truck, Factory } from 'lucide-react';
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

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
                <Factory className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold tracking-tight text-slate-900">SSourcing</p>
                <p className="text-xs text-slate-500">China</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`transition-colors hover:text-slate-900 ${
                    isActive(item.href) ? 'text-slate-900' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Button asChild size="sm" className="bg-slate-900 text-white hover:bg-slate-800">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="space-y-1 px-4 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm font-medium ${
                    isActive(item.href)
                      ? 'bg-slate-100 text-slate-900'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-slate-900 px-3 py-2 text-center text-sm font-medium text-white"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Factory className="h-5 w-5" />
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold tracking-tight text-slate-900">SSourcing China</p>
                  <p className="text-xs text-slate-500">Trusted China sourcing agent</p>
                </div>
              </div>
              <p className="mt-4 max-w-md text-sm text-slate-600">
                We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900">Services</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Supplier Sourcing</li>
                <li>Factory Verification</li>
                <li>Quality Inspection</li>
                <li>Shipping Coordination</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Guangzhou, China</li>
                <li>support@ssourcingchina.com</li>
                <li>+86 20 1234 5678</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="h-4 w-4" /> Verified Partner
              </span>
              <span className="inline-flex items-center gap-1">
                <Globe className="h-4 w-4" /> Global Shipping
              </span>
              <span className="inline-flex items-center gap-1">
                <Truck className="h-4 w-4" /> End-to-End Support
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
