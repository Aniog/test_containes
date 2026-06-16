import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-xl font-bold tracking-widest text-slate-50 mb-4 block">
              ARTITECT MACHINERY
            </span>
            <p className="text-sm leading-relaxed max-w-sm">
              We design and manufacture elegant, user-friendly, and highly efficient sheet metal folding machines for modern industrial applications.
            </p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider font-bold text-slate-50 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><NavLink to="/" className="text-sm hover:text-blue-400 transition-colors">Home</NavLink></li>
              <li><NavLink to="/products" className="text-sm hover:text-blue-400 transition-colors">Products</NavLink></li>
              <li><NavLink to="/contact" className="text-sm hover:text-blue-400 transition-colors">Contact Us</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider font-bold text-slate-50 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>123 Industrial Way</li>
              <li>Tech City, TC 10101</li>
              <li>info@artitectmachinery.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-center">
          &copy; {new Date().getFullYear()} Artitect Machinery. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
