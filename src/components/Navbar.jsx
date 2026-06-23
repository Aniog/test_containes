import React from 'react';
import { Search, Globe, Microscope, Image as ImageIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-white/10 border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Microscope className="w-6 h-6 text-teal-400" />
          <span className="text-xl font-extrabold tracking-tighter uppercase italic">MicroCosmos</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-zinc-400">
          <a href="#hero" className="hover:text-teal-400 transition-colors">Home</a>
          <a href="#gallery" className="hover:text-teal-400 transition-colors">Gallery</a>
          <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
        </div>
        <button className="text-zinc-400 hover:text-white transition-colors">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
