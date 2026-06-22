import React from 'react';
import { Microscope } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Microscope className="w-8 h-8 text-teal-400" />
            <span className="text-xl font-bold text-slate-50 tracking-tight">MicroCosmos</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-slate-300 hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#about" className="text-slate-300 hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
              <a href="#gallery" className="text-slate-300 hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Gallery</a>
              <a href="#facts" className="text-slate-300 hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Facts</a>
            </div>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button could go here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
