import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-white p-1.5 rounded-lg">
                <Hammer className="w-5 h-5 text-slate-900" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight uppercase">
                  Artitect
                </span>
                <span className="text-[10px] font-medium text-slate-400 tracking-widest uppercase">
                  Machinery
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Leading manufacturer of high-precision metal folding and forming machinery. Engineering excellence for the modern workshop.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h3>
            <ul className="flex flex-col gap-2 shadow-none">
              <li><Link to="/products" className="text-sm hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/specs" className="text-sm hover:text-white transition-colors">Technical Specs</Link></li>
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Machine types</h3>
            <ul className="flex flex-col gap-2 shadow-none">
              <li><Link to="/products?category=Double folding machine" className="text-sm hover:text-white transition-colors">Double Folding Machines</Link></li>
              <li><Link to="/products?category=Sheet metal folder" className="text-sm hover:text-white transition-colors">Sheet Metal Folders</Link></li>
              <li><Link to="/products?category=Metal folder machine" className="text-sm hover:text-white transition-colors">Metal Folding Machines</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Get in Touch</h3>
            <ul className="flex flex-col gap-4 shadow-none">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-sm">123 Industrial Ave, Engineering District, Tech City 54321</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-sm">info@artitectmachinery.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} Artitect Machinery. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
