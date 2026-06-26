import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Globe className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold text-white tracking-tight">
                SSourcing<span className="text-amber-500">China</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Your trusted partner for sourcing in China. We help global businesses find reliable suppliers, ensure quality, and streamline their supply chain.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Sourcing Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">Our Process</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Sourcing Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><span className="hover:text-white transition-colors cursor-default">Product Sourcing</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">Factory Audit</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">Quality Inspection</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">Production Follow-up</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">Shipping Coordination</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                <span>Futian District, Shenzhen, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <span>contact@ssourcingchina.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span>+86 755 8XXX XXXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-400">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
