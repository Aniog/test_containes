import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils'; // if configured, otherwise define it.

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Products We Source', path: '/products' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@ssourcingchina.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+86 123 4567 8900</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Shenzhen, China - Sourcing Hub</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-8 h-20 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 text-2xl font-extrabold text-blue-700 tracking-tight">
            <Globe className="w-8 h-8" />
            <span>SSourcing<span className="text-slate-800">China</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 text-base font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "hover:text-blue-600 transition-colors",
                  location.pathname === link.path ? "text-blue-600" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md transition-colors flex items-center space-x-2"
            >
              <span>Get a Quote</span>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-slate-600 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
            <nav className="flex flex-col container mx-auto px-4 py-4 space-y-4 font-medium text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "block px-4 py-2 rounded-md hover:bg-slate-50",
                    location.pathname === link.path ? "text-blue-600 bg-blue-50" : "text-slate-700"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-center flex items-center justify-center space-x-2 w-full mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Get a Free Sourcing Quote</span>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <Link to="/" className="flex items-center space-x-3 text-2xl font-extrabold text-white tracking-tight mb-6">
                <Globe className="w-8 h-8 text-blue-500" />
                <span>SSourcing<span className="text-slate-300">China</span></span>
              </Link>
              <p className="text-slate-400 leading-relaxed mb-6">
                Your reliable partner in China. We help global buyers find verified suppliers, ensure quality, and manage shipping with full transparency.
              </p>
              <div className="flex space-x-4">
                {/* Social icons could go here */}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-blue-400 transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
              <ul className="space-y-4">
                <li><Link to="/services" className="hover:text-blue-400 transition-colors">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition-colors">Factory Audit</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition-colors">Quality Control</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition-colors">Logistics & Shipping</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition-colors">Sample Consolidation</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 text-blue-500 mt-1" />
                  <span>Room 101, Business Center, Futian District, Shenzhen, Guangdong, China</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 flex-shrink-0 text-blue-500" />
                  <span>+86 123 4567 8900</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 flex-shrink-0 text-blue-500" />
                  <span>info@ssourcingchina.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
            <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}