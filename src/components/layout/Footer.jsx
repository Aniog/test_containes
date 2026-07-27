import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold text-white tracking-tight">
              SSourcing<span className="text-blue-500">China</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Leading China sourcing agent helping global businesses navigate complexity, minimize risk, and optimize their supply chain.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Quick Links</h4>
            <ul className="space-y-3 font-medium">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-blue-400 transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Our Services</h4>
            <ul className="space-y-3 font-medium text-gray-400">
              <li>Supplier Sourcing</li>
              <li>Factory Audit</li>
              <li>Quality Inspection</li>
              <li>Production Monitoring</li>
              <li>Shipping Consolidation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Futian District, Shenzhen, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-500 flex-shrink-0" />
                <span>+86 755 8888 8888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-500 flex-shrink-0" />
                <span>info@ssourcing-china.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} SSourcing China. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
