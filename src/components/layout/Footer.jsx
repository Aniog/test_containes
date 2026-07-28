import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-black tracking-tighter text-white">
                SSOURCING<span className="text-blue-500">CHINA</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your professional sourcing partner in China. We help global businesses navigate the Chinese market with confidence, ensuring quality and reliability at every step.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-blue-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-blue-500 transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2" /> All Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-blue-500 transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2" /> Sourcing Process</Link></li>
              <li><Link to="/products" className="hover:text-blue-500 transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2" /> Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-blue-500 transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2" /> Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-blue-500 transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2" /> Sourcing Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-blue-500 transition-colors">Supplier Identification</li>
              <li className="hover:text-blue-500 transition-colors">Factory Verification</li>
              <li className="hover:text-blue-500 transition-colors">Price Negotiation</li>
              <li className="hover:text-blue-500 transition-colors">Quality Control</li>
              <li className="hover:text-blue-500 transition-colors">Amazon FBA Logistics</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                <span>Futian District, Shenzhen,<br />Guangdong, China 518000</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                <a href="tel:+86..." className="hover:text-blue-500">+86 123 4567 8910</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-blue-500">info@ssourcingchina.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {currentYear} SSourcing China Co., Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-500">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500">Terms of Service</a>
            <a href="#" className="hover:text-blue-500">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
