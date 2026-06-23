import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <h3 className="text-white text-xl font-bold mb-6">SSourcing China</h3>
          <p className="text-slate-400 mb-6 leading-relaxed">
            Your trusted B2B sourcing partner in China. We bridge the gap between global buyers and Chinese manufacturers with transparency, quality, and professionalism.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-500 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-amber-500 transition-colors"><Globe size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Our Services</h4>
          <ul className="space-y-3">
            <li><Link to="/services" className="hover:text-amber-500 transition-colors">Supplier Sourcing</Link></li>
            <li><Link to="/services" className="hover:text-amber-500 transition-colors">Factory Verification</Link></li>
            <li><Link to="/services" className="hover:text-amber-500 transition-colors">Quality Inspection</Link></li>
            <li><Link to="/services" className="hover:text-amber-500 transition-colors">Production Management</Link></li>
            <li><Link to="/services" className="hover:text-amber-500 transition-colors">Shipping Coordination</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link to="/how-it-works" className="hover:text-amber-500 transition-colors">How It Works</Link></li>
            <li><Link to="/products" className="hover:text-amber-500 transition-colors">Products We Source</Link></li>
            <li><Link to="/case-studies" className="hover:text-amber-500 transition-colors">Case Studies</Link></li>
            <li><Link to="/blog" className="hover:text-amber-500 transition-colors">Sourcing Blog</Link></li>
            <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Request a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <MapPin className="text-amber-500 shrink-0" size={20} />
              <span>Guangzhou, Guangdong province, China</span>
            </li>
            <li className="flex gap-3">
              <Phone className="text-amber-500 shrink-0" size={20} />
              <span>+86 123 4567 8901</span>
            </li>
            <li className="flex gap-3">
              <Mail className="text-amber-500 shrink-0" size={20} />
              <span>info@ssourcingchina.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-8 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between gap-4">
        <p>© {currentYear} SSourcing China. All rights reserved.</p>
        <div className="flex gap-6 justify-center">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
