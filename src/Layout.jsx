import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone, Mail, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products', path: '/products' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              Serving buyers in 40+ countries
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-1 hover:text-white transition">
              <Mail className="w-4 h-4" />
              info@ssourcingchina.com
            </a>
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              +86 755 8888 9999
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SS</span>
              </div>
              <div>
                <span className="text-slate-900 font-bold text-xl">SSourcing</span>
                <span className="text-blue-800 font-bold text-xl"> China</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    location.pathname === link.path
                      ? 'bg-blue-50 text-blue-800'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2.5 rounded-lg font-medium transition"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition ${
                    location.pathname === link.path
                      ? 'bg-blue-50 text-blue-800'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium text-center transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Free Sourcing Quote
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SS</span>
                </div>
                <div>
                  <span className="text-white font-bold text-xl">SSourcing</span>
                  <span className="text-blue-400 font-bold text-xl"> China</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your trusted partner for sourcing reliable suppliers, verifying factories, and managing quality control in China.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                Shenzhen, Guangdong, China
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="hover:text-white transition">Product Sourcing</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Supplier Verification</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Quality Inspection</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Production Monitoring</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Shipping Coordination</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/how-it-works" className="hover:text-white transition">How It Works</Link></li>
                <li><Link to="/products" className="hover:text-white transition">Products We Source</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-white transition">Blog & Resources</Link></li>
                <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 text-blue-400" />
                  <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition">info@ssourcingchina.com</a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 text-blue-400" />
                  <span>+86 755 8888 9999</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-blue-400" />
                  <span>Room 1201, Building A, Nanshan District, Shenzhen, China</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
