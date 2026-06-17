import React from 'react';
import { Hammer, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2">
              <Hammer className="h-6 w-6 text-slate-900" />
              <span className="text-lg font-bold tracking-tight text-slate-900">ARTITECT MACHINERY</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-slate-600">
              Leading manufacturer of high-precision folding machines and sheet metal folders. 
              Engineering excellence for architectural and industrial metalwork.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/products" className="text-sm text-slate-600 hover:text-slate-900">Products</a></li>
              <li><a href="/about" className="text-sm text-slate-600 hover:text-slate-900">About Us</a></li>
              <li><a href="/contact" className="text-sm text-slate-600 hover:text-slate-900">Contact</a></li>
              <li><a href="#" className="text-sm text-slate-600 hover:text-slate-900">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-slate-600">sales@artitect.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-slate-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-start">
                <MapPin className="h-4 w-4 text-slate-400 shrink-0" />
                <span className="text-sm text-slate-600">123 Industrial Way, Metal City, MC 98765</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Artitect Machinery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
