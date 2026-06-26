import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Globe className="h-8 w-8 text-blue-500" />
              <span className="font-extrabold text-2xl text-white tracking-tight">SSourcing<span className="text-blue-500">China</span></span>
            </Link>
            <p className="text-slate-400 text-base leading-relaxed">
              Your trusted China sourcing agent. We help global buyers find reliable suppliers, verify factories, inspect quality, and follow production from start to finish.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors duration-200">Our Services</Link></li>
              <li><Link to="/how-it-works" className="text-slate-400 hover:text-white transition-colors duration-200">How It Works</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-white transition-colors duration-200">Products We Source</Link></li>
              <li><Link to="/case-studies" className="text-slate-400 hover:text-white transition-colors duration-200">Case Studies</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-white transition-colors duration-200">Blog</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li className="text-slate-400">Supplier Sourcing</li>
              <li className="text-slate-400">Factory Verification</li>
              <li className="text-slate-400">Sample Consolidation</li>
              <li className="text-slate-400">Production Follow-up</li>
              <li className="text-slate-400">Quality Inspection (QC)</li>
              <li className="text-slate-400">Shipping & Logistics</li>
              <li className="text-slate-400">Amazon FBA Prep</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  Futian District, Shenzhen,<br />Guangdong, China
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-slate-400">+86 (123) 4567-8900</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-slate-400 hover:text-white transition-colors duration-200">info@ssourcingchina.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-slate-500 hover:text-white text-sm transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 hover:text-white text-sm transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
