import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-lg text-white font-bold text-lg">
                SS
              </div>
              <span className="text-xl font-bold text-white tracking-tight">SSourcing <span className="text-accent">China</span></span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Professional B2B China sourcing agent helping overseas businesses find reliable suppliers, verify factories, and manage quality control since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all"><Linkedin size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all"><Twitter size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all"><Instagram size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-primary transition-colors">Product Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Supplier Verification</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Factory Audits</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Quality Control</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Shipping & Logistics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/how-it-works" className="hover:text-primary transition-colors">Sourcing Process</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog & Guides</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Request a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary shrink-0" />
                <span>Shenzhen, Guangdong Province, China</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span>+86 755 XXXX XXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary shrink-0" />
                <span>info@ssourcingchina.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 SSourcing China. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
