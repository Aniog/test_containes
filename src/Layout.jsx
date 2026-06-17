import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-warm-100 text-navy-800">
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-end gap-6 px-6 lg:px-24 py-2 bg-navy-800 text-warm-200 text-sm">
        <a href="tel:+18005551234" className="flex items-center gap-1.5 hover:text-brass-400 transition-colors">
          <Phone className="w-3.5 h-3.5" />
          +1 (800) 555-1234
        </a>
        <a href="mailto:info@artitectmachinery.com" className="flex items-center gap-1.5 hover:text-brass-400 transition-colors">
          <Mail className="w-3.5 h-3.5" />
          info@artitectmachinery.com
        </a>
      </div>

      {/* Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-warm-100/95 backdrop-blur shadow-sm'
            : 'bg-warm-100'
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-24 py-4 container-wide">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl md:text-2xl font-bold tracking-wide text-navy-800">
              ARTITECT<span className="text-brass-500"> MACHINERY</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 hover:text-brass-600 ${
                  location.pathname === link.to
                    ? 'text-brass-600'
                    : 'text-navy-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary text-sm !py-2 !px-5">
              Get a Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-navy-800"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden bg-warm-100 border-t border-warm-200 px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium uppercase tracking-wide py-2 ${
                  location.pathname === link.to
                    ? 'text-brass-600'
                    : 'text-navy-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary text-sm text-center justify-center mt-2"
            >
              Get a Quote
            </Link>
          </nav>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-navy-800 text-warm-200">
        <div className="section-padding container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <span className="font-display text-xl font-bold text-white">
                ARTITECT<span className="text-brass-400"> MACHINERY</span>
              </span>
              <p className="mt-4 text-warm-300 text-sm leading-relaxed">
                Precision-engineered sheet metal folding machines built for
                reliability, accuracy, and industrial performance since 1985.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-warm-300 hover:text-brass-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Contact
              </h4>
              <div className="flex flex-col gap-2 text-warm-300 text-sm">
                <p>123 Industrial Parkway</p>
                <p>Chicago, IL 60601</p>
                <a href="tel:+18005551234" className="hover:text-brass-400 transition-colors mt-2">
                  +1 (800) 555-1234
                </a>
                <a href="mailto:info@artitectmachinery.com" className="hover:text-brass-400 transition-colors">
                  info@artitectmachinery.com
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-navy-700 mt-12 pt-6 text-center text-warm-300 text-xs">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
