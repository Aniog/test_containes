import React, { useEffect, useRef } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const containerRef = useRef(null);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (containerRef.current) {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Products We Source', path: '/products-we-source' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans" ref={containerRef}>
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 px-4 md:px-8 text-sm flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="mailto:info@ssourcingchina.com" className="flex items-center hover:text-white">
            <Mail className="w-4 h-4 mr-2" />
            <span className="hidden md:inline">info@ssourcingchina.com</span>
          </a>
          <a href="tel:+860000000000" className="flex items-center hover:text-white">
            <Phone className="w-4 h-4 mr-2" />
            <span className="hidden md:inline">+86 (0)00 0000 0000</span>
          </a>
        </div>
        <div className="flex space-x-4">
          <Link to="/contact" className="hover:text-white">Get a Free Quote</Link>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
                 <span className="bg-blue-600 text-white rounded px-2 py-1 mr-2">SS</span>
                 Sourcing<span className="text-slate-800">China</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    location.pathname === link.path
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center">
                <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
                    Get a Free Quote
                </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    location.pathname === link.path
                      ? 'bg-blue-50 border-blue-500 text-blue-700'
                      : 'border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
               <div className="px-4 py-3">
                  <Link to="/contact" className="w-full flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
                      Get a Free Quote
                  </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="text-2xl font-bold text-white mb-4 block flex items-center">
                 <span className="bg-blue-600 text-white rounded px-2 py-1 mr-2 text-xl">SS</span>
                 SSourcingChina
              </Link>
              <p className="text-sm mt-4 text-slate-400">
                Your reliable China sourcing agent. We help global buyers find suppliers, verify factories, inspect quality, and coordinate shipping.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="hover:text-white">Our Services</Link></li>
                <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
                <li><Link to="/products-we-source" className="hover:text-white">Products We Source</Link></li>
                <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services#supplier-verification" className="hover:text-white">Supplier Verification</Link></li>
                <li><Link to="/services#product-sourcing" className="hover:text-white">Product Sourcing</Link></li>
                <li><Link to="/services#quality-control" className="hover:text-white">Quality Control (QC)</Link></li>
                <li><Link to="/services#shipping" className="hover:text-white">Shipping & Logistics</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start"><Mail className="w-4 h-4 mr-2 mt-0.5 text-slate-400" /> info@ssourcingchina.com</li>
                <li className="flex items-start"><Phone className="w-4 h-4 mr-2 mt-0.5 text-slate-400" /> +86 (0)00 0000 0000</li>
                <li>Shenzhen, Guangdong, China</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-slate-400">&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-slate-400 hover:text-white">Privacy Policy</Link>
              <Link to="#" className="text-slate-400 hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;