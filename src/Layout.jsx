import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-amber rounded-lg flex items-center justify-center">
              <span className="text-navy-900 font-extrabold text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-navy-900 font-bold text-sm lg:text-base tracking-tight leading-tight">ARTITECT</span>
              <span className="text-slate-500 text-xs tracking-widest uppercase">Machinery</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-brand-amber'
                    : 'text-slate-600 hover:text-navy-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="bg-brand-amber hover:bg-brand-amber-dark text-navy-900 font-semibold text-sm rounded-lg px-5 py-2.5 transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-navy-900 bg-transparent border-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-amber-50 text-brand-amber'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 bg-brand-amber text-navy-900 font-semibold text-sm rounded-lg px-4 py-3 text-center transition-colors hover:bg-brand-amber-dark"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brand-amber rounded-lg flex items-center justify-center">
                <span className="text-navy-900 font-extrabold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm tracking-tight leading-tight">ARTITECT</span>
                <span className="text-slate-400 text-xs tracking-widest uppercase">Machinery</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Precision sheet metal folding machines engineered for performance, reliability, and ease of use.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-slate-400 text-sm hover:text-brand-amber transition-colors">Double Folding Machines</Link></li>
              <li><Link to="/products" className="text-slate-400 text-sm hover:text-brand-amber transition-colors">Sheet Metal Folders</Link></li>
              <li><Link to="/products" className="text-slate-400 text-sm hover:text-brand-amber transition-colors">Metal Folding Machines</Link></li>
              <li><Link to="/products" className="text-slate-400 text-sm hover:text-brand-amber transition-colors">Custom Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-400 text-sm hover:text-brand-amber transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-slate-400 text-sm hover:text-brand-amber transition-colors">Our Products</Link></li>
              <li><Link to="/contact" className="text-slate-400 text-sm hover:text-brand-amber transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-brand-amber flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-brand-amber flex-shrink-0" />
                <span>info@artitectmachinery.com</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-brand-amber flex-shrink-0 mt-0.5" />
                <span>123 Industrial Blvd, Manufacturing District</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 ARTITECT MACHINERY. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Precision Engineering Since 2005
          </p>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
