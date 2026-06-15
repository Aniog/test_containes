import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1 border-b md:border-b-0 pb-8 md:pb-0 border-gray-800">
            <Link to="/" className="text-2xl font-bold tracking-tight text-white mb-6 block">
              SSourcing<span className="text-[#D97706]">China</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Your professional boots-on-the-ground sourcing partner in China. We help global businesses navigate the Chinese market safely and efficiently.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#D97706] transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#D97706] transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#D97706] transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-[#D97706] transition-colors">Product Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-[#D97706] transition-colors">Factory Audits</Link></li>
              <li><Link to="/services" className="hover:text-[#D97706] transition-colors">Quality Control</Link></li>
              <li><Link to="/services" className="hover:text-[#D97706] transition-colors">Production Monitoring</Link></li>
              <li><Link to="/services" className="hover:text-[#D97706] transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          {/* Business Hours & Support */}
          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/how-it-works" className="hover:text-[#D97706] transition-colors">How It Works</Link></li>
              <li><Link to="/case-studies" className="hover:text-[#D97706] transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-[#D97706] transition-colors">Sourcing Blog</Link></li>
              <li><Link to="/contact" className="hover:text-[#D97706] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-[#D97706] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#D97706] flex-shrink-0" />
                <span>Room 802, Sourcing Plaza, Futian District, Shenzhen, China</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#D97706] flex-shrink-0" />
                <span>info@ssourcing-china.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#D97706] flex-shrink-0" />
                <span>+86 755 8888 9999</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs tracking-wider uppercase">
          <p>© {currentYear} SSourcing China. All Rights Reserved. Professional China Sourcing Agency.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
