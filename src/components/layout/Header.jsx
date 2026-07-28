import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="bg-slate-900 text-white py-2 text-xs hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center italic">
              <Globe className="w-3 h-3 mr-1" />
              Your Partner in China Sourcing
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+86138..." className="flex items-center hover:text-blue-400">
              <Phone className="w-3 h-3 mr-1 text-blue-400" />
              +86 123 4567 8910
            </a>
            <a href="mailto:info@ssourcingchina.com" className="flex items-center hover:text-blue-400">
              <Mail className="w-3 h-3 mr-1 text-blue-400" />
              info@ssourcingchina.com
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-black tracking-tighter text-slate-900">
                SSOURCING<span className="text-blue-600">CHINA</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "transition-colors hover:text-blue-600 border-b-2 py-1",
                  isActive(link.path) 
                    ? "text-blue-600 border-blue-600" 
                    : "text-slate-600 border-transparent"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 py-4 shadow-xl">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-lg font-medium py-2 transition-colors",
                  isActive(link.path) ? "text-blue-600" : "text-slate-600"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-bold text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
