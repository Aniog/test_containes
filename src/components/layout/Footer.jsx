import React from 'react';
import { Hammer, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Hammer className="w-8 h-8 text-amber-600" />
              <span className="text-xl font-bold tracking-tighter uppercase text-white font-['Playfair_Display']">
                Artitect
              </span>
            </Link>
            <p className="text-sm">
              Precision metal folding solutions for the modern fabrication industry. Engineering excellence since 1995.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-amber-500">Double Folding Machines</Link></li>
              <li><Link to="/products" className="hover:text-amber-500">Sheet Metal Folders</Link></li>
              <li><Link to="/products" className="hover:text-amber-500">Metal Folder Machines</Link></li>
              <li><Link to="/products" className="hover:text-amber-500">Double Folder Series</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-amber-500">Home</Link></li>
              <li><Link to="/about" className="hover:text-amber-500">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-amber-500">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>123 Industrial Way, Tech Park, CA</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-600" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-600" />
                <span>info@artitect-machinery.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Artitect Machinery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
