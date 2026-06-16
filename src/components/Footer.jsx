import React from 'react';
import { Settings, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Settings className="w-8 h-8 text-amber-500" />
              <span className="font-bold text-2xl tracking-tight text-white">ARTITECT<span className="text-amber-500 font-extrabold">MACHINERY</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Precision engineering and elegant solutions for modern sheet metal folding requirements. We deliver reliable, high-performance machinery across the globe.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-400 hover:text-amber-500 text-sm font-medium transition-colors">Home</a></li>
              <li><a href="#products" className="text-slate-400 hover:text-amber-500 text-sm font-medium transition-colors">Products</a></li>
              <li><a href="#features" className="text-slate-400 hover:text-amber-500 text-sm font-medium transition-colors">Features</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-amber-500 text-sm font-medium transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-slate-400 hover:text-amber-500 text-sm font-medium transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-amber-500 text-sm font-medium transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Our Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-amber-500 text-sm font-medium transition-colors">Double Folding Machines</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-500 text-sm font-medium transition-colors">Sheet Metal Folders</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-500 text-sm font-medium transition-colors">CNC Metal Folders</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-500 text-sm font-medium transition-colors">Hydraulic Folding Machines</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-500 text-sm font-medium transition-colors">Custom Machinery Solutions</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-500 text-sm font-medium transition-colors">Parts & Accessories</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  123 Industrial Parkway,<br />
                  Manufacturing District,<br />
                  NY 10001, USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <a href="tel:+18005551234" className="text-slate-400 hover:text-amber-500 text-sm transition-colors cursor-pointer">
                  +1 (800) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <a href="mailto:sales@artitectmachinery.com" className="text-slate-400 hover:text-amber-500 text-sm transition-colors cursor-pointer">
                  sales@artitectmachinery.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Artitect Machinery. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-amber-500 transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-amber-500 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;