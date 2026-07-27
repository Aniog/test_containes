import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Products', href: '/products' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-primary">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold tracking-tight text-slate-900">SSourcing<span className="text-blue-600">China</span></span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive(item.href) ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md font-medium transition-colors text-sm"
              >
                Get a Quote
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    isActive(item.href) 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block w-full text-center mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        )}
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="md:col-span-1 border-b md:border-b-0 border-slate-800 pb-8 md:pb-0">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <Globe className="h-6 w-6 text-blue-500" />
                <span className="text-xl font-bold tracking-tight text-white">SSourcing<span className="text-blue-500">China</span></span>
              </Link>
              <p className="text-sm leading-relaxed text-slate-400 mb-6">
                Your reliable on-the-ground partner in China. We bridge the gap between global buyers and Chinese manufacturers, verifying suppliers and ensuring quality every step of the way.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4 lg:mb-6 uppercase tracking-wider text-sm">Services</h3>
              <ul className="space-y-3 lg:space-y-4 text-sm">
                <li><Link to="/services" className="hover:text-blue-400 transition-colors">Supplier Verification</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition-colors">Factory Audits</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition-colors">Quality Inspection</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition-colors">Production Monitoring</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition-colors">Shipping Coordination</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4 lg:mb-6 uppercase tracking-wider text-sm">Company</h3>
              <ul className="space-y-3 lg:space-y-4 text-sm">
                <li><Link to="/how-it-works" className="hover:text-blue-400 transition-colors">How It Works</Link></li>
                <li><Link to="/products" className="hover:text-blue-400 transition-colors">Products We Source</Link></li>
                <li><Link to="/case-studies" className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Insights & Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4 lg:mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
              <ul className="space-y-3 lg:space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="font-medium text-slate-300 w-16">Email:</span>
                  <a href="mailto:info@ssourcingchina.com" className="hover:text-blue-400 transition-colors break-words">info@ssourcingchina.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-medium text-slate-300 w-16">HQ:</span>
                  <span>Guangzhou, Guangdong<br/>China</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
