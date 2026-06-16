import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      {/* Top bar */}
      <div className="hidden md:block bg-slate-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="mailto:info@artitectmachinery.com" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@artitectmachinery.com</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+1 (234) 567-890</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Expert Support Available</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-amber-400 font-bold text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">ARTITECT</span>
              <span className="text-xs text-slate-500 font-medium tracking-widest -mt-1">MACHINERY</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-2.5 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-slate-800/25"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t border-slate-100 px-4 py-4 space-y-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="block py-3 px-4 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="block py-3 px-4 bg-slate-800 text-white rounded-lg font-semibold text-center mt-4"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;