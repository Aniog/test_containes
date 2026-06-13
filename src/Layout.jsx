import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Products', href: '/products' },
    { name: 'Case Studies', href: '/case-studies' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <span className="font-bold text-2xl text-blue-800">SSourcing China</span>
              </Link>
            </div>
            
            {/* Desktop menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    location.pathname === item.href
                      ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600 font-medium'
                  } py-2 transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                Get a Quote
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    location.pathname === item.href
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  } block px-3 py-2 rounded-md text-base font-medium`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <Link to="/" className="text-2xl font-bold mb-6 block text-white">SSourcing China</Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Your reliable partner on the ground in China. We help global buyers navigate the complexities of sourcing, quality control, and shipping.
              </p>
              <div className="text-gray-400 text-sm">
                <p className="mb-2"><strong>Location:</strong> Guangzhou, China</p>
                <p><strong>Email:</strong> info@ssourcingchina.com</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-6">Core Services</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link to="/services" className="hover:text-white transition-colors">Supplier Sourcing & Verification</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Sample Consolidation & Check</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Production Follow-up</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Pre-shipment Quality Inspection</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Shipping & Logistics Coordination</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-6">Company</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors">Products We Source</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Sourcing Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-6">Ready to start?</h3>
              <p className="text-sm text-gray-400 mb-4">
                Tell us about your sourcing needs and we'll get back to you with a free evaluation.
              </p>
              <Link to="/contact" className="inline-block px-4 py-2 border border-blue-500 rounded text-sm text-blue-400 hover:bg-blue-600 hover:text-white hover:border-transparent transition-colors">
                Contact Us Today
              </Link>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-300">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
