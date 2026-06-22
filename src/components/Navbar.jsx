import React from 'react';
import { Microscope } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Microscope className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold text-slate-50 tracking-tighter">MicroCosmos</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <a href="#hero" className="text-slate-400 hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-medium">Home</a>
              <a href="#intro" className="text-slate-400 hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-medium">Discovery</a>
              <a href="#gallery" className="text-slate-400 hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-medium">Gallery</a>
              <a href="#features" className="text-slate-400 hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-medium">Realms</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
