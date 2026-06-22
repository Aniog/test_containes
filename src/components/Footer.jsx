import React from 'react';
import { Microscope, Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Microscope className="w-6 h-6 text-blue-400" />
          <span className="text-white font-bold text-lg tracking-wider">MicroCosmos</span>
        </div>
        
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} MicroCosmos. Exploring the invisible.
        </p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
