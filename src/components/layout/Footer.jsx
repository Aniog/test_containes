import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-7 h-7 text-brand-blue" />
              <span className="text-lg font-bold tracking-tight">SSourcing China</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from production to delivery.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Services</h4>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors no-underline">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors no-underline">Factory Verification</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors no-underline">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors no-underline">Production Follow-up</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors no-underline">Shipping Coordination</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Company</h4>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li><Link to="/how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors no-underline">How It Works</Link></li>
              <li><Link to="/products" className="text-sm text-gray-400 hover:text-white transition-colors no-underline">Products We Source</Link></li>
              <li><Link to="/case-studies" className="text-sm text-gray-400 hover:text-white transition-colors no-underline">Case Studies</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-400 hover:text-white transition-colors no-underline">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors no-underline">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Contact</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">info@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">+86 138 0000 0000</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">Guangzhou, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400 m-0">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 m-0">
            Helping global buyers source from China since 2015.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
