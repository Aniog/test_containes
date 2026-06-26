import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { Truck, Search, ShieldCheck, Factory, Globe, Menu, X, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Toaster } from 'sonner';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/products', label: 'Products' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Toaster position="top-right" />
      
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400" />
              +86 123 4567 8910
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              contact@ssourcingchina.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Trusted China Sourcing Partner</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 p-1.5 rounded-lg group-hover:bg-blue-700 transition-colors">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900 uppercase">
              SSourcing<span className="text-blue-600">China</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors hover:text-blue-600",
                    isActive ? "text-blue-600" : "text-slate-600"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all shadow-md active:scale-95"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "text-lg font-medium py-2",
                      isActive ? "text-blue-600" : "text-slate-600"
                    )
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-5 py-4 rounded-md text-center font-semibold hover:bg-blue-700 transition-colors mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Free Quote
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
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Globe className="w-6 h-6 text-blue-500" />
                <span className="text-xl font-bold tracking-tight text-white uppercase">
                  SSourcing<span className="text-blue-500">China</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Your reliable sourcing partner in China. We help businesses worldwide find high-quality suppliers, ensure product quality, and streamline their supply chain.
              </p>
              <div className="flex gap-4">
                {/* Social icons placeholder */}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="hover:text-blue-400 transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Our Services</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/services" className="hover:text-blue-400 transition-colors">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition-colors">Factory Audits</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition-colors">Quality Control</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition-colors">Order Follow-up</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition-colors">Shipping Coordination</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>contact@ssourcingchina.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>+86 123 4567 8910</span>
                </li>
                <li className="flex items-start gap-3 text-slate-400 italic">
                  <span>Shenzhen, Guangdong Province, China</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} SSourcing China. All Rights Reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-slate-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
