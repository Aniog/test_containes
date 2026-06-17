import React from 'react';
import { Hammer, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Hammer className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-extrabold tracking-tighter text-white uppercase">
                Artitect
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Leading provider of precision folding machines and sheet metal manipulation solutions. Built for durability, designed for mastery.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">Products</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/products" className="hover:text-white transition-colors">Double Folding Machines</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Sheet Metal Folders</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Hydraulic Systems</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Manual Folders</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Portfolio</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>info@artitect-machinery.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Industrial Zone 4, Steel City</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 ARTITECT MACHINERY. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-white">Privacy Policy</Link>
            <Link to="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
