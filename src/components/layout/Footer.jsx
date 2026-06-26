import React from 'react';
import { Factory, Mail, Phone, MapPin, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Factory className="w-6 h-6 text-white" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-xl tracking-wide">ARTITECT</div>
                <div className="text-[10px] font-semibold tracking-[0.2em] text-brand-300 uppercase">
                  Machinery
                </div>
              </div>
            </div>
            <p className="text-brand-300 text-sm leading-relaxed">
              Precision-engineered sheet metal folding solutions for modern manufacturing. Built for performance, designed for reliability.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4 tracking-wide">Products</h3>
            <ul className="space-y-2.5 text-sm text-brand-300">
              <li><a href="#products" className="hover:text-white transition-colors">Double Folding Machine</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Double Folder</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Sheet Metal Folder</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Sheet Metal Folding Machine</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Metal Folder Machine</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4 tracking-wide">Company</h3>
            <ul className="space-y-2.5 text-sm text-brand-300">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4 tracking-wide">Contact</h3>
            <ul className="space-y-3 text-sm text-brand-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Industrial Zone, Manufacturing District</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@artitect-machinery.com" className="hover:text-white transition-colors">info@artitect-machinery.com</a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brand-400">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-brand-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
