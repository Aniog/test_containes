import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Settings } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900">
                ARTITECT<br/>
                <span className="text-sm font-semibold text-slate-500 tracking-widest">MACHINERY</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Home</Link>
            <a href="#products" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Products</a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">About Us</a>
            <a href="#contact" className="px-5 py-2.5 bg-slate-900 text-white font-medium rounded hover:bg-amber-600 transition-colors shadow-sm">
              Contact Sales
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white shadow-lg overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-900 hover:bg-slate-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#products" 
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#about" 
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <div className="pt-2">
              <a 
                href="#contact" 
                className="block w-full text-center px-5 py-3 bg-slate-900 text-white font-medium rounded hover:bg-slate-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;