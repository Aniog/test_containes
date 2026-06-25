import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="text-yellow-500 w-8 h-8" />
              <span className="text-2xl font-bold text-white tracking-tight">
                SSourcing<span className="text-yellow-500">China</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Your professional China sourcing partner. We bridge the gap between global buyers and reliable Chinese manufacturers with transparency and expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-yellow-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-yellow-500 transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-yellow-500 transition-colors">Sourcing Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-yellow-500 transition-colors">Our Process</Link></li>
              <li><Link to="/products" className="hover:text-yellow-500 transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-yellow-500 transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-yellow-500 transition-colors">Sourcing Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Our Services</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Supplier Verification</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Product Sourcing</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Quality Control</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Production Monitoring</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Logistics Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <div className="flex items-start space-x-3 text-sm">
              <MapPin className="w-5 h-5 text-yellow-500 shrink-0" />
              <span>123 Global Trade Center, Futian District, Shenzhen, Guangdong, China</span>
            </div>
            <div className="flex items-start space-x-3 text-sm">
              <Mail className="w-5 h-5 text-yellow-500 shrink-0" />
              <span>inquires@ssourcingchina.com</span>
            </div>
            <div className="flex items-start space-x-3 text-sm">
              <Phone className="w-5 h-5 text-yellow-500 shrink-0" />
              <span>+86 755 8888 8888</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:row justify-between items-center text-xs space-y-4 md:space-y-0">
          <p>© {currentYear} SSourcing China Co., Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;