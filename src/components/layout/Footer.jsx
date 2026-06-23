import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold tracking-tight text-white">SSourcing <span className="text-primary">China</span></span>
            </Link>
            <p className="text-sm text-slate-400">
              Your trusted partner in China. We help global buyers find reliable suppliers, verify factories, and manage the entire sourcing process from production to delivery.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-sm hover:text-primary transition-colors">Supplier Identification</Link></li>
              <li><Link to="/services" className="text-sm hover:text-primary transition-colors">Factory Audits</Link></li>
              <li><Link to="/services" className="text-sm hover:text-primary transition-colors">Sample Consolidation</Link></li>
              <li><Link to="/services" className="text-sm hover:text-primary transition-colors">Quality Control (QC)</Link></li>
              <li><Link to="/services" className="text-sm hover:text-primary transition-colors">Shipping & Logistics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/how-it-works" className="text-sm hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link to="/case-studies" className="text-sm hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm">Rm 1205, Business Center, Guangzhou, Guangdong, China</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm">+86 123 4567 8900</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-sm hover:text-primary transition-colors">info@ssourcingchina.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-sm text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
