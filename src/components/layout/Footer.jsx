import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold tracking-tight text-white">
                SSourcing<span className="text-blue-500">China</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Professional China sourcing agent helping global businesses navigate the Chinese market safely and efficiently since 2012.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><NavLink to="/services" className="hover:text-blue-500 transition-colors">Sourcing & Procurement</NavLink></li>
              <li><NavLink to="/services" className="hover:text-blue-500 transition-colors">Factory Audit & Verification</NavLink></li>
              <li><NavLink to="/services" className="hover:text-blue-500 transition-colors">Quality Control Inspection</NavLink></li>
              <li><NavLink to="/services" className="hover:text-blue-500 transition-colors">Shipping & Logistics</NavLink></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><NavLink to="/how-it-works" className="hover:text-blue-500 transition-colors">How It Works</NavLink></li>
              <li><NavLink to="/case-studies" className="hover:text-blue-500 transition-colors">Case Studies</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-blue-500 transition-colors">Sourcing Blog</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-blue-500 transition-colors">Contact Us</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span>1203, Block B, Century Tech Tower, Nanshan District, Shenzhen, China</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span>+86 755 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span>sales@ssourcingchina.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-slate-500">
          <p>© {currentYear} SSourcing China. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
