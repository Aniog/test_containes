import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tighter">
              ARTITECT<span className="text-amber-600">MACHINERY</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Precision engineering for high-performance sheet metal folding solutions. Architectural quality in every fold.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-amber-600 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-amber-600 transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-amber-600 transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-amber-600 transition-colors">Double Folding Machines</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Sheet Metal Folders</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Metal Folder Machines</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Digital Controls</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-amber-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Expertise</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-amber-600" />
                <span>123 Precision Industrial Way, Suite 100</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-amber-600" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-amber-600" />
                <span>info@artitectmachinery.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500 text-xs">
          <p>&copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
