import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">SS</span>
              </div>
              <span className="text-xl font-bold text-white">
                SSourcing<span className="text-slate-400">China</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Your trusted China-based sourcing agent for supplier verification, quality control, and logistics coordination.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2.5">
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">Factory Verification</Link></li>
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">Production Monitoring</Link></li>
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li><Link to="/how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/case-studies" className="text-sm text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-sm text-slate-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-slate-400 flex-shrink-0" />
                <span className="text-sm text-slate-400">Room 1208, Trade Center, Yiwu, Zhejiang, China</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-slate-400 flex-shrink-0" />
                <a href="tel:+8613800000000" className="text-sm text-slate-400 hover:text-white transition-colors">
                  +86 138 0000 0000
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-slate-400 flex-shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-sm text-slate-400 hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            {currentYear} SSourcing China. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
