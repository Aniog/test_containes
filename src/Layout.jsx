import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Products', path: '/products' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-inter text-slate-900">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-6">
            <a href="tel:+86123456789" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+86 123 4567 8901</span>
            </a>
            <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@ssourcingchina.com</span>
            </a>
          </div>
          <div className="hidden md:block">
            China Sourcing Agent | Serving Global Buyers Since 2012
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-slate-900">
                SSOURCING<span className="text-blue-600">CHINA</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      "text-sm font-medium transition-colors hover:text-blue-600",
                      isActive ? "text-blue-600" : "text-slate-600"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors"
              >
                Get a Free Quote
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block px-3 py-2 rounded-md text-base font-medium",
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 pb-2">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="col-span-1 lg:col-span-1">
              <Link to="/" className="text-2xl font-bold text-white mb-6 block">
                SSOURCING<span className="text-blue-500">CHINA</span>
              </Link>
              <p className="text-sm leading-relaxed mb-6">
                Your trusted partner for professional sourcing in China. We help global businesses simplify procurement, ensure quality, and optimize supply chains.
              </p>
              <div className="flex space-x-4">
                {/* Social icons could go here */}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Services</h3>
              <ul className="space-y-4 text-sm">
                <li><Link to="/services" className="hover:text-blue-400">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="hover:text-blue-400">Factory Audit</Link></li>
                <li><Link to="/services" className="hover:text-blue-400">Quality Inspection</Link></li>
                <li><Link to="/services" className="hover:text-blue-400">Production Monitoring</Link></li>
                <li><Link to="/services" className="hover:text-blue-400">Shipping Coordination</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Company</h3>
              <ul className="space-y-4 text-sm">
                <li><Link to="/how-it-works" className="hover:text-blue-400">How It Works</Link></li>
                <li><Link to="/case-studies" className="hover:text-blue-400">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-blue-400">Industry Blog</Link></li>
                <li><Link to="/contact" className="hover:text-blue-400">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Room 1205, Modern Tower, Shenzhen, Guangdong, China</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>info@ssourcingchina.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>+86 123 4567 8901</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 lg:mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
