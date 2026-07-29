import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-700 rounded-md flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                SSourcing <span className="text-amber-500">China</span>
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm">
              Helping global buyers navigate the Chinese supply chain with reliability, quality, and transparency. Your eyes and ears on the ground in China.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-600 transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">Factory Audits</Link></li>
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">Quality Control</Link></li>
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">Shipping Coordination</Link></li>
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">Production Following</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/how-it-works" className="hover:text-amber-500 transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-amber-500 transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-amber-500 transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-amber-500 transition-colors">Sourcing Blog</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contact</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-500 mt-1" />
              <p>Futian District, Shenzhen,<br />Guangdong Province, China</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-amber-500" />
              <p>+86 755 8888 9999</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-amber-500" />
              <p>info@ssourcingchina.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-sm text-slate-500">
          <p>© {currentYear} SSourcing China Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
