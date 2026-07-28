import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
             <Link to="/" className="flex items-center gap-2 mb-6">
                <Globe className="h-8 w-8 text-blue-500" />
                <span className="font-bold text-xl text-white tracking-tight">SSourcing<span className="text-blue-500">China</span></span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Your trusted partner on the ground in China. We connect global buyers with reliable manufacturers, ensuring quality, compliance, and smooth logistics.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services#supplier-sourcing" className="text-sm text-slate-400 hover:text-white transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services#factory-audit" className="text-sm text-slate-400 hover:text-white transition-colors">Factory Audits</Link></li>
              <li><Link to="/services#quality-control" className="text-sm text-slate-400 hover:text-white transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services#shipping" className="text-sm text-slate-400 hover:text-white transition-colors">Shipping & Logistics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/case-studies" className="text-sm text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/products" className="text-sm text-slate-400 hover:text-white transition-colors">Products We Source</Link></li>
              <li><Link to="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-slate-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">Guangzhou, Guangdong,<br />China 510000</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-slate-500 mr-3 flex-shrink-0" />
                <span className="text-sm text-slate-400">+86 123 4567 8900</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-slate-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-sm text-slate-400 hover:text-white transition-colors">info@ssourcingchina.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-slate-800 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <p className="text-sm text-slate-500">
               Privacy Policy | Terms of Service
            </p>
          </div>
          <p className="mt-8 text-sm text-slate-500 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;