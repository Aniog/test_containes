import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand and Description */}
          <div className="space-y-6">
            <NavLink to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-lg">
                SS
              </div>
              <span className="text-xl font-bold text-white">SSourcing China</span>
            </NavLink>
            <p className="text-sm leading-relaxed">
              Your professional China sourcing partner for global trade. Helping businesses find reliable suppliers, ensure quality standards, and streamline their supply chain.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><NavLink to="/services" className="hover:text-accent transition-colors">Supplier Sourcing</NavLink></li>
              <li><NavLink to="/services" className="hover:text-accent transition-colors">Factory Audits</NavLink></li>
              <li><NavLink to="/services" className="hover:text-accent transition-colors">Quality Control</NavLink></li>
              <li><NavLink to="/services" className="hover:text-accent transition-colors">Logistics Support</NavLink></li>
              <li><NavLink to="/services" className="hover:text-accent transition-colors">Product Development</NavLink></li>
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">Information</h3>
            <ul className="space-y-3 text-sm">
              <li><NavLink to="/how-it-works" className="hover:text-accent transition-colors">How It Works</NavLink></li>
              <li><NavLink to="/products" className="hover:text-accent transition-colors">Products We Source</NavLink></li>
              <li><NavLink to="/case-studies" className="hover:text-accent transition-colors">Case Studies</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-accent transition-colors">Blog</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-accent transition-colors">Request a Quote</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>15F, Trade Tower, Binjiang District, Hangzhou, Zhejiang, China 310051</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-accent transition-colors">info@ssourcingchina.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+8657188888888" className="hover:text-accent transition-colors">+86 571 8888 8888</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} SSourcing China Co., Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
