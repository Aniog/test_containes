import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Products We Source', to: '/products' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container-xl">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-navy-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-extrabold text-sm">S</span>
            </div>
            <div className="leading-tight">
              <span className="text-navy-800 font-extrabold text-lg tracking-tight">SSourcing</span>
              <span className="text-gold-600 font-extrabold text-lg tracking-tight"> China</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-navy-800 bg-navy-50 font-semibold'
                      : 'text-gray-600 hover:text-navy-800 hover:bg-gray-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-gold-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-gold-700 transition-colors duration-200"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-navy-800 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container-xl py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-navy-800 bg-navy-50 font-semibold'
                      : 'text-gray-700 hover:text-navy-800 hover:bg-gray-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 bg-gold-600 text-white px-4 py-3 rounded-lg font-semibold text-sm text-center hover:bg-gold-700 transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
