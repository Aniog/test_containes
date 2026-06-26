import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-white">
              <Globe className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-base font-semibold tracking-tight">SSourcing China</div>
              <div className="text-xs text-slate-500">Trusted China Sourcing Agent</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.to
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild size="sm">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </nav>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white px-4 pb-4 md:hidden">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    location.pathname === item.to
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild size="sm" className="mt-1">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  Get a Free Quote
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white">
                  <Globe className="h-4 w-4" />
                </div>
                <span className="text-sm font-semibold">SSourcing China</span>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Your trusted China-based sourcing agent for supplier verification, quality control, and shipping coordination.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Services</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><Link to="/services" className="hover:text-blue-600">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="hover:text-blue-600">Factory Verification</Link></li>
                <li><Link to="/services" className="hover:text-blue-600">Quality Inspection</Link></li>
                <li><Link to="/services" className="hover:text-blue-600">Shipping Coordination</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Company</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><Link to="/how-it-works" className="hover:text-blue-600">How It Works</Link></li>
                <li><Link to="/case-studies" className="hover:text-blue-600">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-blue-600">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Email: info@ssourcingchina.com</li>
                <li>WeChat: SSourcingChina</li>
                <li>HQ: Shenzhen, China</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
