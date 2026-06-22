import React from 'react';
import { Microscope, Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <Microscope className="w-6 h-6 text-teal-400" />
          <span className="text-xl font-bold text-slate-50">MicroCosmos</span>
        </div>
        
        <div className="text-slate-500 text-sm font-light">
          © 2026 MicroCosmos Exploration Foundation. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-slate-500 hover:text-teal-400 transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="text-slate-500 hover:text-teal-400 transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="text-slate-500 hover:text-teal-400 transition-colors"><Github className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
