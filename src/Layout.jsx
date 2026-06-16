import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-navy-900 text-slate-300 text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              +1 (555) 123-4567
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <Mail className="w-3 h-3" />
              info@artitectmachinery.com
            </span>
          </div>
          <span className="hidden md:block">Precision Engineering Since 1998</span>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-navy-900 font-bold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-navy-900 font-bold text-lg leading-tight tracking-tight">ARTITECT</span>
                <span className="text-slate-500 text-xs tracking-widest uppercase">Machinery</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-accent-500'
                      : 'text-slate-600 hover:text-navy-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-accent-500 hover:bg-accent-600 text-navy-900 font-semibold text-sm rounded-lg px-5 py-2.5 transition-colors"
              >
                Get a Quote
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-navy-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <nav className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2 ${
                    isActive(link.path)
                      ? 'text-accent-500'
                      : 'text-slate-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-accent-500 text-navy-900 font-semibold text-sm rounded-lg px-5 py-2.5 text-center mt-2"
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-navy-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-navy-900 font-bold text-base">A</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-base leading-tight">ARTITECT</span>
                  <span className="text-slate-400 text-xs tracking-widest uppercase">Machinery</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Industry-leading manufacturer of precision sheet metal folding machines. Engineering excellence since 1998.
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/products" className="text-slate-400 hover:text-accent-400 transition-colors">Double Folding Machines</Link></li>
                <li><Link to="/products" className="text-slate-400 hover:text-accent-400 transition-colors">Sheet Metal Folders</Link></li>
                <li><Link to="/products" className="text-slate-400 hover:text-accent-400 transition-colors">Metal Folding Machines</Link></li>
                <li><Link to="/products" className="text-slate-400 hover:text-accent-400 transition-colors">Custom Solutions</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-slate-400 hover:text-accent-400 transition-colors">About Us</Link></li>
                <li><Link to="/products" className="text-slate-400 hover:text-accent-400 transition-colors">Our Products</Link></li>
                <li><Link to="/contact" className="text-slate-400 hover:text-accent-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent-500" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent-500" />
                  info@artitectmachinery.com
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">&copy; 2026 ARTITECT MACHINERY. All rights reserved.</p>
            <p className="text-slate-500 text-sm">Precision. Performance. Perfection.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
