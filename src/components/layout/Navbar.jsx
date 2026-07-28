import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/products', label: 'Products We Source' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'text-accent'
        : 'text-b2b-text-medium hover:text-navy'
    }`;

  const mobileLinkClass = (path) =>
    `block px-4 py-3 text-base font-medium rounded-md transition-colors duration-200 ${
      location.pathname === path
        ? 'text-accent bg-accent/5'
        : 'text-b2b-text hover:text-navy hover:bg-b2b-gray'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-b2b-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-navy rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">SC</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-navy">SSourcing</span>
              <span className="text-lg font-light text-b2b-text-medium"> China</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClass} end={link.path === '/'}>
                <span className="px-3 py-2 block">{link.label}</span>
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-4 inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-md transition-colors duration-200"
            >
              Get a Free Quote
            </Link>
          </nav>

          <button
            className="lg:hidden p-2 text-b2b-text-medium hover:text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-b2b-border bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={mobileLinkClass(link.path)}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block w-full mt-1 text-center px-5 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-md transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}