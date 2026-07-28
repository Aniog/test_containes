import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">SSourcing<span className="text-secondary">China</span></h3>
            <p className="text-gray-300 mb-6">
              Your professional China sourcing partner. We bridge the gap between global buyers and reliable Chinese manufacturers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Factory Verification</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Shipping Coordination</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Amazon FBA Prep</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors">Success Stories</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Sourcing Blog</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-secondary shrink-0" />
                <span className="text-gray-300">Room 801, Haichuang Tower, Guangzhou, China</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-secondary shrink-0" />
                <span className="text-gray-300">+86 123 4567 8901</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-secondary shrink-0" />
                <span className="text-gray-300">info@ssourcingchina.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
