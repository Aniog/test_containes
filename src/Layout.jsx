import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

const Layout = ({ children }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white font-bold text-sm">
                SS
              </div>
              <span className="text-lg font-semibold tracking-tight text-slate-900">
                SSourcing China
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-slate-900',
                    location.pathname === item.to
                      ? 'text-slate-900'
                      : 'text-slate-600'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>

            <button
              className="md:hidden p-2 text-slate-600"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="space-y-1 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    'block rounded-md px-3 py-2 text-base font-medium',
                    location.pathname === item.to
                      ? 'bg-slate-50 text-slate-900'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 block rounded-md bg-slate-900 px-3 py-2 text-center text-base font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white font-bold text-sm">
                  SS
                </div>
                <span className="text-lg font-semibold tracking-tight text-slate-900">
                  SSourcing China
                </span>
              </div>
              <p className="text-sm text-slate-600 max-w-md">
                Your trusted China-based sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Services</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><Link to="/services" className="hover:text-slate-900">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="hover:text-slate-900">Factory Verification</Link></li>
                <li><Link to="/services" className="hover:text-slate-900">Quality Inspection</Link></li>
                <li><Link to="/services" className="hover:text-slate-900">Shipping Coordination</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>info@ssourcingchina.com</li>
                <li>+86 755 1234 5678</li>
                <li>Shenzhen, China</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
