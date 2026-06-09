import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-slate-900 tracking-tight">ARTITECT</span>
            <span className="ml-2 text-sm font-medium text-slate-500 hidden sm:block">MACHINERY</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-600 hover:text-slate-900 font-medium">Home</a>
            <a href="#products" className="text-slate-600 hover:text-slate-900 font-medium">Products</a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 font-medium">About</a>
            <a href="#contact" className="px-6 py-2 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors">Contact Us</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-slate-600 hover:text-slate-900 font-medium">Home</a>
            <a href="#products" className="block px-3 py-2 text-slate-600 hover:text-slate-900 font-medium">Products</a>
            <a href="#about" className="block px-3 py-2 text-slate-600 hover:text-slate-900 font-medium">About</a>
            <a href="#contact" className="block px-3 py-2 text-blue-600 font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
