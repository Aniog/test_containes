import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--primary)] text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                <span className="text-[var(--primary)] font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">SSourcing China</span>
            </div>
            <p className="text-white/80 text-sm mb-4">
              Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="text-white/80 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="text-white/80 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/case-studies" className="text-white/80 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-white/80 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors">Supplier Verification</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors">Factory Inspection</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors">Quality Control</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors">Production Follow-up</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/80">
                <Mail size={18} />
                <span>info@ssourcing-china.com</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Phone size={18} />
                <span>+86 123 4567 8900</span>
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <MapPin size={18} className="mt-0.5" />
                <span>Shanghai, China</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;