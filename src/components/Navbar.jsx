import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#products', label: 'Products' },
    { href: '#features', label: 'Features' },
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
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#hero" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0A1628] rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl tracking-tighter">AM</span>
              </div>
              <div>
                <div className="font-semibold text-xl tracking-tight text-[#0A1628]">ARTITECT</div>
                <div className="text-[10px] text-gray-500 -mt-1 tracking-[2px]">MACHINERY</div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-sm font-medium text-gray-600 hover:text-[#0A1628] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-2.5 bg-[#0A1628] text-white text-sm font-medium rounded hover:bg-[#1a2a42] transition-colors"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-[#0A1628]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="text-sm font-medium text-gray-600 hover:text-[#0A1628] py-1"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="mt-2 px-6 py-2.5 bg-[#0A1628] text-white text-sm font-medium rounded hover:bg-[#1a2a42] transition-colors w-full"
              >
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
