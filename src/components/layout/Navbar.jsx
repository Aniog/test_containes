import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="bg-primary text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Phone size={14} className="mr-1" /> +86 123 4567 8901</span>
            <span className="flex items-center"><Mail size={14} className="mr-1" /> info@ssourcingchina.com</span>
          </div>
          <div>Professional Sourcing Solutions from China</div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary flex items-center">
              SSourcing<span className="text-secondary">China</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive(link.path) 
                      ? "text-primary border-b-2 border-primary rounded-none" 
                      : "text-gray-600 hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="bg-secondary hover:bg-secondary-dark text-white px-4 py-2 rounded-md font-medium transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  isActive(link.path) ? "text-primary bg-gray-50" : "text-gray-600 hover:text-primary hover:bg-gray-50"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="block w-full bg-secondary text-white px-3 py-2 rounded-md text-base font-medium mt-4"
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

export default Navbar;
