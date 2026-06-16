import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-4">ARTITECT MACHINERY</h2>
          <p className="max-w-md">
            Leading manufacturer of high-precision double folding machines and sheet metal folders. 
            Empowering fabrication shops worldwide with elegant and efficient machinery.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-amber-500 transition-colors">Home</a></li>
            <li><a href="/products" className="hover:text-amber-500 transition-colors">Products</a></li>
            <li><a href="/contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-500" />
              <span>info@artitect-machinery.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-500" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>123 Industrial Way, Tech City</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
