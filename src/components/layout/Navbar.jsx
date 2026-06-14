import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AM</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                ARTITECT MACHINERY
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-slate-900 hover:bg-slate-800 transition-colors"
            >
              Get a Quote
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 px-3 py-3 rounded-md text-base font-medium text-white bg-slate-900 hover:bg-slate-800 text-center"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
