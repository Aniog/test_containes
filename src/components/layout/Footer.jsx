import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-industrial-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              ARTITECT<span className="font-light text-safety-orange ml-1">MACHINERY</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Precision engineering meets industrial excellence. We manufacture high-quality sheet metal folding machines 
              designed for durability, accuracy, and performance in demanding industrial environments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-safety-orange transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-safety-orange transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-safety-orange transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-safety-orange transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-safety-orange transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-safety-orange transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-safety-orange transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-safety-orange transition-colors">Technical Specs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-safety-orange mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Industrial Zone, Machinery District<br />Manufacturing Hub, MH 400001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-safety-orange mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-safety-orange mr-3 flex-shrink-0" />
                <a href="mailto:info@artitectmachinery.com" className="text-gray-300 hover:text-white transition-colors">info@artitectmachinery.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
