import React from 'react';
import { Menu, X, Settings } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <Settings className="w-8 h-8 text-blue-900" />
            <span className="font-bold text-2xl text-slate-800 tracking-tight">ARTITECT<span className="text-blue-900 font-extrabold">MACHINERY</span></span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-slate-600 hover:text-blue-900 font-medium transition-colors">Home</a>
            <a href="#products" className="text-slate-600 hover:text-blue-900 font-medium transition-colors">Products</a>
            <a href="#features" className="text-slate-600 hover:text-blue-900 font-medium transition-colors">Features</a>
            <a href="#contact" className="text-slate-600 hover:text-blue-900 font-medium transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a href="#contact" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-md font-medium transition-colors shadow-sm cursor-pointer">
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="text-slate-600 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-900 rounded-md p-2"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 shadow-lg">
            <a href="#home" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-900 hover:bg-slate-50">Home</a>
            <a href="#products" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-900 hover:bg-slate-50">Products</a>
            <a href="#features" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-900 hover:bg-slate-50">Features</a>
            <a href="#contact" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-900 hover:bg-slate-50">Contact</a>
            <a href="#contact" onClick={toggleMenu} className="block mt-4 text-center bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
