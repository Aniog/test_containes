import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-width-container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 text-white">
              <div className="bg-primary p-2 rounded-lg font-bold text-xl">SS</div>
              <span className="font-extrabold text-2xl tracking-tight">SSourcing China</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Your professional boots on the ground in China. We bridge the gap between global buyers and reliable Chinese manufacturers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-primary transition-colors">Product Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Factory Audits</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Quality Control</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Shipping & Logistics</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contact Info</h4>
            <div className="flex items-start gap-4">
              <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
              <p>Room 802, Building 3, Fortune Plaza, Guangzhou, China</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-primary flex-shrink-0" size={20} />
              <p>+86 123 4567 8900</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-primary flex-shrink-0" size={20} />
              <p>inquiry@ssourcing-china.com</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
          <p>© 2026 SSourcing China. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
