import React from 'react';
import { Link } from 'react-router-dom';
import { Ship, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
                <Ship className="w-5 h-5 text-navy" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                SSourcing<span className="text-gold">China</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, 
              verify factories, and manage quality from production to delivery.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-navy-light rounded-lg flex items-center justify-center text-gray-300 hover:bg-gold hover:text-navy transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-navy-light rounded-lg flex items-center justify-center text-gray-300 hover:bg-gold hover:text-navy transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-navy-light rounded-lg flex items-center justify-center text-gray-300 hover:bg-gold hover:text-navy transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link to="/services" className="text-gray-400 hover:text-gold text-sm transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-gold text-sm transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-gold text-sm transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-gold text-sm transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-gold text-sm transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              <li><span className="text-gray-400 text-sm">Supplier Identification</span></li>
              <li><span className="text-gray-400 text-sm">Factory Audits & Verification</span></li>
              <li><span className="text-gray-400 text-sm">Quality Control Inspection</span></li>
              <li><span className="text-gray-400 text-sm">Production Monitoring</span></li>
              <li><span className="text-gray-400 text-sm">Shipping & Logistics</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <span>Shenzhen, Guangdong, China</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <span>info@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <span>+86 755 1234 5678</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-light">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
