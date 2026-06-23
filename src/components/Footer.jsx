import React from 'react';
import { Microscope } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-zinc-500 font-medium uppercase tracking-widest">
        <div className="flex items-center gap-2 text-white">
          <Microscope className="w-5 h-5 text-teal-400" />
          <span className="font-bold tracking-tighter italic">MicroCosmos</span>
        </div>
        
        <div>
          © 2026 Exploring the Infinite Small
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="hover:text-teal-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-teal-400 transition-colors">Terms</a>
          <a href="#" className="hover:text-teal-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
