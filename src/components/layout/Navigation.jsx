import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-3">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl ${
                isScrolled ? 'bg-steel-blue text-white' : 'bg-white text-steel-blue'
              }`}>
                AM
              </div>
              <div>
                <h1 className={`text-xl font-bold ${
                  isScrolled ? 'text-deep-navy' : 'text-white'
                }`}>
                  ARTITECT
                </h1>
                <p className={`text-xs font-semibold tracking-wider ${
                  isScrolled ? 'text-steel-blue' : 'text-gray-200'
                }`}>
                  MACHINERY
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-steel-blue' 
                      : 'text-white hover:text-copper'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className={`font-semibold px-6 py-2 rounded-md transition-all duration-300 ${
                  isScrolled
                    ? 'bg-steel-blue text-white hover:bg-deep-navy'
                    : 'bg-white text-steel-blue hover:bg-gray-100'
                }`}
              >
                Get Quote
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-deep-navy' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-steel-blue hover:bg-gray-50 rounded-md font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 mt-4 bg-steel-blue text-white text-center rounded-md font-semibold hover:bg-deep-navy transition-colors duration-300"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
