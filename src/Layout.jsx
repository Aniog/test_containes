import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/products', label: 'Products We Source' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="text-primary font-bold text-lg tracking-tight">SSourcing China</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors no-underline ${
                  location.pathname === link.path
                    ? 'text-primary bg-blue-50'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors no-underline"
            >
              Get a Free Quote
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-gray-600 hover:text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium no-underline ${
                  location.pathname === link.path
                    ? 'text-primary bg-blue-50'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 text-center bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors no-underline"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-primary text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-sm">SS</span>
            </div>
            <span className="font-bold text-lg">SSourcing China</span>
          </div>
          <p className="text-blue-200 text-sm leading-relaxed">
            Your reliable China sourcing partner. We help global buyers find verified suppliers, manage quality, and coordinate shipping.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-blue-200">Services</h4>
          <ul className="space-y-2.5">
            {['Supplier Sourcing', 'Factory Verification', 'Quality Inspection', 'Production Follow-up', 'Shipping Coordination'].map((s) => (
              <li key={s}>
                <Link to="/services" className="text-sm text-blue-100 hover:text-white transition-colors no-underline">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-blue-200">Company</h4>
          <ul className="space-y-2.5">
            {[
              { label: 'About Us', path: '/' },
              { label: 'How It Works', path: '/how-it-works' },
              { label: 'Case Studies', path: '/case-studies' },
              { label: 'Blog', path: '/blog' },
              { label: 'Contact', path: '/contact' },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.path} className="text-sm text-blue-100 hover:text-white transition-colors no-underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-blue-200">Contact Us</h4>
          <div className="space-y-2.5 text-sm text-blue-100">
            <p>Guangzhou, Guangdong, China</p>
            <p>info@ssourcingchina.com</p>
            <p>+86 755 1234 5678</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 mt-4 bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors no-underline"
          >
            Get a Free Quote
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-blue-400/30 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-blue-200">&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-blue-200">
          <a href="#" className="hover:text-white transition-colors no-underline">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors no-underline">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-white">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
