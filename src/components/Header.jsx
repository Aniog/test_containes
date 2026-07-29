import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products', path: '/products' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-text-primary font-bold text-lg tracking-tight">SSourcing</span>
              <span className="text-text-muted text-[10px] font-medium tracking-wider uppercase">China</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary bg-primary/5'
                    : 'text-text-secondary hover:text-primary hover:bg-surface'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+8613812345678" className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-primary">
              <Phone className="w-4 h-4" />
              <span>+86 138 1234 5678</span>
            </a>
            <Link
              to="/contact"
              className="bg-secondary hover:bg-secondary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <nav className="container-custom py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary bg-primary/5'
                    : 'text-text-secondary hover:text-primary hover:bg-surface'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-border flex flex-col gap-3">
              <a href="tel:+8613812345678" className="flex items-center gap-2 px-4 text-sm text-text-secondary">
                <Phone className="w-4 h-4" />
                <span>+86 138 1234 5678</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="bg-secondary hover:bg-secondary-dark text-white text-sm font-semibold px-5 py-3 rounded-md text-center transition-colors"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
