import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <span className="text-2xl font-bold tracking-tight mb-6 block">SSourcing <span className="text-orange-600">China</span></span>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Your trusted partner for sourcing, QC, and logistics in China. We help global businesses scale by handling their entire supply chain locally.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-600 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-orange-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-orange-600 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-blue-100">
              <li><Link to="/services" className="hover:text-orange-600 transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-orange-600 transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-orange-600 transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-orange-600 transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-blue-100">
              <li>Supplier Verification</li>
              <li>Product Sourcing</li>
              <li>Quality Inspection</li>
              <li>Production Follow-up</li>
              <li>Shipping & Logistics</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-orange-600 flex-shrink-0 mt-1" />
                <span>Suite 801, Industrial Tower, Guangzhou, GD, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-orange-600 flex-shrink-0" />
                <span>info@ssourcingchina.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-orange-600 flex-shrink-0" />
                <span>+86 20 1234 5678</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-300">
          <p>© 2026 SSourcing China. All rights reserved.</p>
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
