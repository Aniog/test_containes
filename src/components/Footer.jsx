import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Twitter, Factory } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="text-secondary mr-2">S</span>
              SOURCING CHINA
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your professional China sourcing partner. We bridge the gap between global buyers and Chinese manufacturers with integrity and expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Our Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-white">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-white">Factory Verification</Link></li>
              <li><Link to="/services" className="hover:text-white">Quality Control</Link></li>
              <li><Link to="/services" className="hover:text-white">Production Monitoring</Link></li>
              <li><Link to="/services" className="hover:text-white">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-white">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white">Sourcing Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-secondary shrink-0 mt-1" />
                <span>Futian District, Shenzhen, Guangdong, China</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-secondary shrink-0" />
                <span>+86 755 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-secondary shrink-0" />
                <span>contact@ssourcingchina.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
