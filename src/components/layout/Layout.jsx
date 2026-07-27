import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Products', href: '/products' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-700 bg-white">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex space-x-6">
            <span className="flex items-center"><Mail className="w-4 h-4 mr-2" /> info@ssourcingchina.com</span>
            <span className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +86 123 4567 8900</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Shenzhen, China</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-slate-900 tracking-tight">SSourcing<span className="text-blue-600">China</span></span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 hover:text-blue-600 transition-colors ${
                    location.pathname === item.href
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="ml-8 inline-flex items-center justify-center px-6 py-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Get a Quote
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 absolute w-full left-0 shadow-lg">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block pl-3 pr-4 py-3 border-l-4 text-base font-medium ${
                    location.pathname === item.href
                      ? 'bg-blue-50 border-blue-600 text-blue-700'
                      : 'border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-3">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get a Quote
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
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <span className="text-2xl font-bold text-white tracking-tight">SSourcing<span className="text-blue-500">China</span></span>
              <p className="text-slate-400 text-base max-w-sm">
                Your reliable partner on the ground in China. We verify suppliers, inspect quality, and manage shipping so you can focus on growing your business.
              </p>
              <div className="flex space-x-6">
                {/* Social Links placeholders */}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Services</h3>
                  <ul className="mt-4 space-y-4">
                    <li><Link to="/services" className="text-base text-slate-400 hover:text-white transition-colors">Supplier Sourcing</Link></li>
                    <li><Link to="/services" className="text-base text-slate-400 hover:text-white transition-colors">Factory Audits</Link></li>
                    <li><Link to="/services" className="text-base text-slate-400 hover:text-white transition-colors">Quality Inspection</Link></li>
                    <li><Link to="/services" className="text-base text-slate-400 hover:text-white transition-colors">Shipping Logistics</Link></li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
                  <ul className="mt-4 space-y-4">
                    <li><Link to="/how-it-works" className="text-base text-slate-400 hover:text-white transition-colors">How It Works</Link></li>
                    <li><Link to="/case-studies" className="text-base text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
                    <li><Link to="/blog" className="text-base text-slate-400 hover:text-white transition-colors">Blog</Link></li>
                    <li><Link to="/contact" className="text-base text-slate-400 hover:text-white transition-colors">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Contact</h3>
                  <ul className="mt-4 space-y-4">
                    <li className="flex items-start text-base text-slate-400">
                      <MapPin className="flex-shrink-0 h-6 w-6 text-slate-500 mr-2" />
                      Futian District, Shenzhen, Guangdong, China
                    </li>
                    <li className="flex items-center text-base text-slate-400">
                      <Phone className="flex-shrink-0 h-5 w-5 text-slate-500 mr-2" />
                      +86 123 4567 8900
                    </li>
                    <li className="flex items-center text-base text-slate-400">
                      <Mail className="flex-shrink-0 h-5 w-5 text-slate-500 mr-2" />
                      info@ssourcingchina.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-slate-400 xl:text-center">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-slate-400">
                <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
