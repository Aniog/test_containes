import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '@/components/ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#products', label: 'Products' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#1a1f2e] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">AM</span>
          </div>
          <span className="font-semibold text-xl tracking-tight text-[#1a1f2e]">ARTITECT MACHINERY</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-[#4a5568] hover:text-[#1a1f2e] transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
          <Button onClick={() => scrollToSection('#contact')} size="sm">
            Get Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#e2e8f0] bg-white px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-left text-[#4a5568] hover:text-[#1a1f2e] py-2 font-medium"
            >
              {link.label}
            </button>
          ))}
          <Button onClick={() => scrollToSection('#contact')} className="mt-2">
            Get Quote
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;