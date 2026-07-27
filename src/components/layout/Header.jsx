import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navigation } from '@/lib/data';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#1E3A5F] leading-tight">SSourcing</span>
              <span className="text-xs text-gray-500 leading-tight">China</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'text-[#1E3A5F] bg-blue-50'
                    : 'text-gray-600 hover:text-[#1E3A5F] hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-[#0891B2] text-white text-sm font-medium rounded-lg hover:bg-[#0E7490] transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-600 hover:text-[#1E3A5F]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'text-[#1E3A5F] bg-blue-50'
                      : 'text-gray-600 hover:text-[#1E3A5F] hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-3 mx-4 inline-flex items-center justify-center px-5 py-2.5 bg-[#0891B2] text-white text-sm font-medium rounded-lg hover:bg-[#0E7490] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
