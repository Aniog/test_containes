import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const containerRef = useRef(null);

  useEffect(() => {
    // Load dynamic images if config exists and is enabled (or has image entries)
    const hasImages = strkImgConfig && (strkImgConfig.enabled !== false) && Object.keys(strkImgConfig).length > 0;
    if (containerRef.current && hasImages) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [location.pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/products', label: 'Products' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-white">
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-brand-navy rounded flex items-center justify-center">
                <span className="text-white font-semibold text-lg">SS</span>
              </div>
              <span className="font-semibold text-xl text-brand-navy">SSourcing China</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-brand-navy'
                      : 'text-slate-600 hover:text-brand-navy'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <Link to="/contact">
                <Button>Get a Free Quote</Button>
              </Link>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium py-1 ${
                    isActive(link.href) ? 'text-brand-navy' : 'text-slate-600'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full mt-2">Get a Free Quote</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-1">{children}</main>

      <footer className="bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-brand-navy font-semibold">SS</span>
                </div>
                <span className="font-semibold text-lg">SSourcing China</span>
              </div>
              <p className="text-slate-400 text-sm">
                Professional sourcing services connecting global buyers with reliable Chinese suppliers.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/services" className="hover:text-white">Services</Link></li>
                <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
                <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/products" className="hover:text-white">Products</Link></li>
                <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>info@ssourcingchina.com</li>
                <li>+86 21 5888 1234</li>
                <li>Shanghai, China</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-10 pt-6 text-sm text-slate-400">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
