import React from 'react';
import { Microscope, Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Microscope className="w-8 h-8 text-emerald-500" />
              <span className="text-2xl font-bold tracking-tight text-slate-50 font-serif">MicroCosmos</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              Dedicated to exploring and celebrating the invisible beauty of the microscopic world through science, art, and education.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-50 font-bold mb-6 font-serif">Explore</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Micro-organisms</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Cell Biology</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Crystallography</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Micro-photography</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-50 font-bold mb-6 font-serif">Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 MicroCosmos. All rights reserved. Made for the curious mind.
          </p>
          <p className="text-slate-500 text-sm">
            Science & Beauty intertwined.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
