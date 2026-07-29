import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">SSourcing<span className="text-blue-400">China</span></h3>
            <p className="text-slate-400">
              Your trusted sourcing partner in China. We help global businesses scale by handling the complexities of China sourcing with transparency and professionalism.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/services" className="hover:text-white transition-colors">Sourcing Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Our Expertise</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Supplier Verification</li>
              <li>Quality Inspection</li>
              <li>Production Monitoring</li>
              <li>Logistics & Shipping</li>
              <li>Product Customization</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <span>info@ssourcingchina.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <span>+86 123 4567 8901</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <MapPin size={24} className="text-blue-400 shrink-0" />
                <span>Floor 12, Sourcing Plaza, Futian District, Shenzhen, China</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
