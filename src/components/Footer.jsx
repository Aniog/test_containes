import React from 'react';
import { Hammer, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1 border-r border-slate-800 pr-8">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Hammer className="h-6 w-6 text-secondary" />
              <span className="font-bold text-xl tracking-tight text-white">ARTITECT</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Precision engineering and elegant design in every double folding machine and sheet metal folder we build.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Equipment</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/products" className="hover:text-secondary transition-colors">Double Folding Machines</Link></li>
              <li><Link to="/products" className="hover:text-secondary transition-colors">Sheet Metal Folders</Link></li>
              <li><Link to="/products" className="hover:text-secondary transition-colors">Metal Folding Machines</Link></li>
              <li><Link to="/products" className="hover:text-secondary transition-colors">Custom Solutions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Quality Standards</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-secondary shrink-0" />
                <span>100 Precision Way<br />Industrial Park<br />Manufacturing City, 10101</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-secondary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-secondary shrink-0" />
                <span>sales@artitectmachinery.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Artitect Machinery. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;