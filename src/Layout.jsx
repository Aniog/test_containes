import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

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
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (typeof ImageHelper === 'undefined' || typeof ImageHelper.loadImages !== 'function') {
        return;
      }
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
                <span className="text-sm font-bold">SS</span>
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-slate-900">SSourcing China</div>
                <div className="text-xs text-slate-500">Trusted China Sourcing Agent</div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`transition-colors hover:text-slate-900 ${
                    location.pathname === item.to ? 'text-slate-900 font-medium' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+8610-8888-6666" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900">
                <Phone className="h-4 w-4" />
                <span>+86 10-8888-6666</span>
              </a>
              <Link to="/contact">
                <Button size="sm">Get a Free Sourcing Quote</Button>
              </Link>
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
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm ${
                    location.pathname === item.to ? 'bg-slate-100 text-slate-900 font-medium' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)}>
                <Button className="mt-2 w-full" size="sm">Get a Free Sourcing Quote</Button>
              </Link>
              <div className="mt-3 space-y-1 text-xs text-slate-500">
                <div className="flex items-center gap-2 px-3">
                  <Phone className="h-3.5 w-3.5" />
                  <span>+86 10-8888-6666</span>
                </div>
                <div className="flex items-center gap-2 px-3">
                  <Mail className="h-3.5 w-3.5" />
                  <span>info@ssourcingchina.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
                  <span className="text-sm font-bold">SS</span>
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-slate-900">SSourcing China</div>
                  <div className="text-xs text-slate-500">Trusted China Sourcing Agent</div>
                </div>
              </div>
              <p className="mt-3 max-w-md text-sm text-slate-600">
                We help overseas buyers source reliable suppliers, verify factories, inspect quality, and coordinate shipping from China.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5"><Globe className="h-3.5 w-3.5" /> Serving 30+ countries</span>
                <span className="inline-flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> +86 10-8888-6666</span>
                <span className="inline-flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> info@ssourcingchina.com</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900">Services</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><Link to="/services" className="hover:text-slate-900">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="hover:text-slate-900">Factory Verification</Link></li>
                <li><Link to="/services" className="hover:text-slate-900">Quality Inspection</Link></li>
                <li><Link to="/services" className="hover:text-slate-900">Shipping Coordination</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900">Company</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><Link to="/how-it-works" className="hover:text-slate-900">How It Works</Link></li>
                <li><Link to="/case-studies" className="hover:text-slate-900">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-slate-900">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-slate-900">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/contact" className="hover:text-slate-900">Privacy Policy</Link>
              <Link to="/contact" className="hover:text-slate-900">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
