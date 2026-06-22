import React from 'react';
import { Microscope } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Microscope className="w-8 h-8 text-blue-400" />
            <span className="text-white font-bold text-xl tracking-wider">MicroCosmos</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#cellular" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Cellular</a>
              <a href="#insects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Insects</a>
              <a href="#textures" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Textures</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
