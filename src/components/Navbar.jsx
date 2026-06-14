import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#products', label: 'Products' },
    { href: '#engineering', label: 'Engineering' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl tracking-tighter">AM</span>
            </div>
            <div>
              <div className="font-semibold text-xl tracking-tight text-slate-900">ARTITECT</div>
              <div className="text-[10px] text-slate-500 -mt-1 tracking-[3px]">MACHINERY</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+18005551234" 
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>1-800-555-1234</span>
            </a>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
            >
              Request Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-slate-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left py-2 text-sm font-medium text-slate-600 hover:text-slate-900"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
                <a href="tel:+18005551234" className="flex items-center gap-2 text-sm text-slate-600 py-2">
                  <Phone className="w-4 h-4" />
                  1-800-555-1234
                </a>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
