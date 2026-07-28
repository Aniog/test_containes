import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    if (mainRef.current) {
      return ImageHelper.loadImages(strkImgConfig, mainRef.current);
    }
    return undefined;
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/products', label: 'Products' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
                <Globe className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-slate-900">SSourcing</div>
                <div className="text-xs text-slate-500">China</div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-slate-900'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900">
                <Mail className="h-4 w-4" />
                <span className="hidden lg:inline">info@ssourcingchina.com</span>
              </a>
              <Button asChild size="sm">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="space-y-1 px-4 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block rounded-md px-3 py-2 text-sm font-medium ${
                    isActive(item.path)
                      ? 'bg-slate-50 text-slate-900'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block rounded-md bg-slate-900 px-3 py-2 text-center text-sm font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      <main ref={mainRef}>{children}</main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
                  <Globe className="h-5 w-5" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-slate-900">SSourcing</div>
                  <div className="text-xs text-slate-500">China</div>
                </div>
              </div>
              <p className="mt-4 max-w-md text-sm text-slate-600">
                A China-based sourcing agent helping overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
              </p>
              <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600">
                <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 hover:text-slate-900">
                  <Mail className="h-4 w-4" />
                  info@ssourcingchina.com
                </a>
                <a href="tel:+8610XXXXXXXX" className="flex items-center gap-2 hover:text-slate-900">
                  <Phone className="h-4 w-4" />
                  +86 10 XXXX XXXX
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-900">Services</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><Link to="/services" className="hover:text-slate-900">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="hover:text-slate-900">Factory Verification</Link></li>
                <li><Link to="/services" className="hover:text-slate-900">Quality Inspection</Link></li>
                <li><Link to="/services" className="hover:text-slate-900">Shipping Coordination</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-900">Company</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><Link to="/how-it-works" className="hover:text-slate-900">How It Works</Link></li>
                <li><Link to="/case-studies" className="hover:text-slate-900">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-slate-900">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-slate-900">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs text-slate-500">
              <Link to="/privacy" className="hover:text-slate-900">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-slate-900">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
