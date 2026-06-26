import React from 'react';
import { Hammer, Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Hammer className="w-6 h-6 text-accent" />
              <span className="text-xl font-bold tracking-tighter">
                ARTITECT<span className="text-accent">MACHINERY</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading the industry in precision double folding and sheet metal folding technology. Engineered for excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-accent transition-colors">Machines</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>Double Folding Machine</li>
              <li>Sheet Metal Folder</li>
              <li>Double Folder Series</li>
              <li>Precision Metal Folder</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" /> 
                <span>info@artitect-machinery.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" /> 
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span>123 Industrial Way, Tech City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 ARTITECT MACHINERY. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
