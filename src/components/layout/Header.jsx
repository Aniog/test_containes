import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navigation } from '../../data/content';
import { cn } from '../../lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white',
        isScrolled ? 'shadow-md py-2' : 'py-4'
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#1E3A5F] leading-tight">SSourcing</span>
              <span className="text-xs text-[#6B7280] leading-tight">China</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-sm font-medium transition-colors duration-200 hover:text-[#E67E22]',
                  location.pathname === item.path
                    ? 'text-[#E67E22]'
                    : 'text-[#1F2937]'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E67E22] hover:bg-[#D35400] text-white font-semibold rounded-lg transition-all duration-200 hover:scale-[1.02]"
            >
              Get a Free Quote
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#1E3A5F] hover:bg-[#F8FAFC] rounded-lg transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 w-80 max-w-full bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-lg font-bold text-[#1E3A5F]">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-[#1E3A5F] hover:bg-[#F8FAFC] rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 flex-1">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-lg font-medium py-2 transition-colors duration-200 hover:text-[#E67E22]',
                  location.pathname === item.path
                    ? 'text-[#E67E22]'
                    : 'text-[#1F2937]'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-[#E5E7EB]">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#E67E22] hover:bg-[#D35400] text-white font-semibold rounded-lg transition-all duration-200"
            >
              Get a Free Quote
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
