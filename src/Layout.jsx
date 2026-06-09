import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

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
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Globe className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-900 tracking-tight">SSourcing<span className="text-blue-600">China</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-semibold bg-blue-600 text-white text-center"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Globe className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold text-white tracking-tight">SSourcing<span className="text-blue-400">China</span></span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Your professional sourcing partner in China. We help global businesses navigate the Chinese market with confidence and efficiency.
            </p>
            <div className="flex space-x-4">
              {/* Social icons placeholder */}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Product Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Supplier Verification</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Quality Control</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Production Monitoring</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Sourcing Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@ssourcingchina.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+86 123 4567 8901</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-blue-400 mt-0.5" />
                <span>Shenzhen, Guangdong Province, China</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-xs">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved. Professional China Sourcing Agent.</p>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white" ref={containerRef}>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
