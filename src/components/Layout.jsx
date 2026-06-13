import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/products', label: 'Products' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+862162345678" className="flex items-center gap-2 hover:text-slate-300">
              <Phone className="w-4 h-4" /> +86 21 6234 5678
            </a>
            <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 hover:text-slate-300">
              <Mail className="w-4 h-4" /> info@ssourcingchina.com
            </a>
          </div>
          <div className="hidden md:block text-slate-400">
            Shanghai, China | Serving Buyers Worldwide
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">SS</span>
              </div>
              <div>
                <div className="font-semibold text-xl text-slate-900">SSourcing China</div>
                <div className="text-xs text-slate-500 -mt-1">China Sourcing Agent</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-slate-900'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-slate-900 text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-medium px-2 py-1 ${
                      isActive(link.href) ? 'text-slate-900' : 'text-slate-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-slate-900 text-white px-5 py-2.5 rounded text-sm font-medium text-center mt-2"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-white rounded flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-lg">SS</span>
                </div>
                <span className="font-semibold text-lg">SSourcing China</span>
              </div>
              <p className="text-slate-400 text-sm">
                Professional sourcing services connecting global buyers with verified Chinese suppliers.
              </p>
            </div>
            <div>
              <div className="font-semibold mb-4">Services</div>
              <div className="space-y-2 text-sm text-slate-400">
                <div>Supplier Sourcing</div>
                <div>Factory Verification</div>
                <div>Quality Inspection</div>
                <div>Production Monitoring</div>
                <div>Shipping Coordination</div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-4">Company</div>
              <div className="space-y-2 text-sm text-slate-400">
                <Link to="/how-it-works" className="block hover:text-white">How It Works</Link>
                <Link to="/case-studies" className="block hover:text-white">Case Studies</Link>
                <Link to="/blog" className="block hover:text-white">Blog</Link>
                <Link to="/contact" className="block hover:text-white">Contact</Link>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-4">Contact</div>
              <div className="space-y-2 text-sm text-slate-400">
                <div>Shanghai, China</div>
                <a href="tel:+862162345678" className="block hover:text-white">+86 21 6234 5678</a>
                <a href="mailto:info@ssourcingchina.com" className="block hover:text-white">info@ssourcingchina.com</a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-slate-500 text-center">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;