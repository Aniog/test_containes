import React from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <Rocket className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-slate-900 tracking-tight">Nova Creative</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 py-4 px-4 space-y-4">
          <a href="#" className="block text-slate-600 hover:text-blue-600 font-medium">Services</a>
          <a href="#" className="block text-slate-600 hover:text-blue-600 font-medium">Portfolio</a>
          <a href="#" className="block text-slate-600 hover:text-blue-600 font-medium">About</a>
          <button className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg font-medium">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
