import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-brand-800" />
              </div>
              <span className="text-xl font-bold">
                SSourcing<span className="text-brand-300">China</span>
              </span>
            </Link>
            <p className="text-brand-200 text-sm leading-relaxed mb-6">
              Your trusted China sourcing agent. We help global buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="flex space-x-4">
              {/* Social media placeholders */}
              <a href="#" className="w-9 h-9 bg-brand-800 rounded-lg flex items-center justify-center hover:bg-brand-700 transition-colors">
                <span className="text-xs font-bold">Li</span>
              </a>
              <a href="#" className="w-9 h-9 bg-brand-800 rounded-lg flex items-center justify-center hover:bg-brand-700 transition-colors">
                <span className="text-xs font-bold">Fb</span>
              </a>
              <a href="#" className="w-9 h-9 bg-brand-800 rounded-lg flex items-center justify-center hover:bg-brand-700 transition-colors">
                <span className="text-xs font-bold">Tw</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-brand-200 hover:text-white transition-colors text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-brand-200 hover:text-white transition-colors text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-brand-200 hover:text-white transition-colors text-sm">
                  Products We Source
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-brand-200 hover:text-white transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-brand-200 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-brand-200 text-sm">Supplier Verification</li>
              <li className="text-brand-200 text-sm">Factory Audits</li>
              <li className="text-brand-200 text-sm">Quality Control</li>
              <li className="text-brand-200 text-sm">Production Monitoring</li>
              <li className="text-brand-200 text-sm">Shipping Coordination</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-300 mt-0.5 flex-shrink-0" />
                <span className="text-brand-200 text-sm">
                  Guangzhou, Guangdong, China
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-300 flex-shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-brand-200 hover:text-white transition-colors text-sm">
                  info@ssourcingchina.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-300 flex-shrink-0" />
                <a href="tel:+862012345678" className="text-brand-200 hover:text-white transition-colors text-sm">
                  +86 20 1234 5678
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-brand-300 text-sm">
              © {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-brand-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-brand-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-brand-800 text-white w-12 h-12 rounded-full shadow-lg hover:bg-brand-700 transition-colors flex items-center justify-center z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;