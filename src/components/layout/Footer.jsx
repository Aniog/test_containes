import React from 'react';
import { Settings, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6 text-white">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight">
                ARTITECT<br/>
                <span className="text-sm font-semibold tracking-widest text-slate-400">MACHINERY</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Industrial-grade precision machinery. We specialize in robust, efficient, and user-friendly sheet metal folding solutions for professionals.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Products</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Double Folding Machines</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Sheet Metal Folders</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Custom Metal Solutions</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Accessories & Parts</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Service & Support</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Distributors</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>123 Industrial Parkway,<br/>Manufacturing District, TX 75001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span>+1 (800) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <span>sales@artitectmachinery.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Artitect Machinery. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;