import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Products', path: '/products' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
              <Globe className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-wide text-slate-900">SSourcing</p>
              <p className="text-xs text-slate-500">China</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors hover:text-slate-900 ${
                  location.pathname === item.path ? 'text-slate-900' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+8610XXXXXXXX" className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900">
              <Phone className="h-4 w-4" />
              <span>+86 10 XXXX XXXX</span>
            </a>
            <Button asChild size="sm">
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="mx-auto max-w-7xl px-4 py-4">
              <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`py-1 ${
                      location.pathname === item.path ? 'text-slate-900' : ''
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-4 flex flex-col gap-2">
                <a href="tel:+8610XXXXXXXX" className="flex items-center gap-2 text-sm text-slate-600">
                  <Phone className="h-4 w-4" />
                  <span>+86 10 XXXX XXXX</span>
                </a>
                <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 text-sm text-slate-600">
                  <Mail className="h-4 w-4" />
                  <span>info@ssourcingchina.com</span>
                </a>
                <Button asChild size="sm" className="mt-2">
                  <Link to="/contact" onClick={() => setMobileOpen(false)}>
                    Get a Free Sourcing Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white">
                  <Globe className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">SSourcing China</p>
                  <p className="text-xs text-slate-500">Trusted China sourcing partner</p>
                </div>
              </div>
              <p className="mt-3 max-w-md text-sm text-slate-600">
                We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping from China.
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
                <li>info@ssourcingchina.com</li>
                <li>+86 10 XXXX XXXX</li>
                <li>Beijing, China</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-200 pt-6 text-xs text-slate-500">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
