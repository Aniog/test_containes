import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
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

  const navLinks = [
    { label: 'Products', id: 'products' },
    { label: 'Features', id: 'features' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-steel/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-9 h-9 bg-brand-navy rounded flex items-center justify-center">
            <span className="text-white font-bold text-xl tracking-tighter">AM</span>
          </div>
          <div>
            <div className="font-semibold text-xl tracking-tight text-brand-navy">ARTITECT</div>
            <div className="text-[10px] text-brand-slate -mt-1.5 tracking-[3px]">MACHINERY</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-brand-charcoal hover:text-brand-bronze transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button variant="gold" size="sm" onClick={() => scrollToSection('contact')}>
            Request Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-brand-navy"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-brand-steel/10 bg-white px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left py-2 text-base font-medium text-brand-charcoal hover:text-brand-bronze"
            >
              {link.label}
            </button>
          ))}
          <Button variant="gold" className="mt-2" onClick={() => scrollToSection('contact')}>
            Request Quote
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
