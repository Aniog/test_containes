import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand and Description */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white tracking-tight">SSourcing<span className="text-yellow-500">China</span></span>
            </Link>
            <p className="text-sm leading-relaxed">
              Your professional China sourcing partner. We help global buyers find reliable suppliers, verify quality, and manage logistics from China factories to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-yellow-500 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-yellow-500 transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-yellow-500 transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-yellow-500 transition-colors">Factory Audits</Link></li>
              <li><Link to="/services" className="hover:text-yellow-500 transition-colors">Quality Control</Link></li>
              <li><Link to="/services" className="hover:text-yellow-500 transition-colors">Amazon FBA Prep</Link></li>
              <li><Link to="/services" className="hover:text-yellow-500 transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/how-it-works" className="hover:text-yellow-500 transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-yellow-500 transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-yellow-500 transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-yellow-500 transition-colors">Sourcing Blog</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-500 mt-0.5" />
                <span>123 Sourcing Plaza, Futian District, Shenzhen, China</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-500" />
                <span>+86 123 4567 8901</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-500" />
                <span>contact@ssourcingchina.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-yellow-500" />
                <span>www.ssourcingchina.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs">
            © {new Date().getFullYear()} SSourcing China. All rights reserved. Professional Sourcing Agent in China.
          </p>
          <div className="flex space-x-6 text-xs font-medium">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
