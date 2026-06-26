import React from 'react';
import { Hammer, Mail, Phone, Globe, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Hammer className="w-8 h-8 text-brand-accent" />
              <span className="text-2xl font-extrabold tracking-tight">
                ARTITECT <span className="text-slate-400">MACHINERY</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Global leader in precision sheet metal folding technology. We empower fabricators with high-performance machinery engineered for excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-sm hover:bg-brand-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-sm hover:bg-brand-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-sm hover:bg-brand-accent transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-brand-accent">Products</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/products" className="hover:text-white transition-colors flex items-center gap-2"><ExternalLink className="w-3 h-3" /> Double Folding Machines</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors flex items-center gap-2"><ExternalLink className="w-3 h-3" /> Sheet Metal Folders</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors flex items-center gap-2"><ExternalLink className="w-3 h-3" /> CNC Folding Centers</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors flex items-center gap-2"><ExternalLink className="w-3 h-3" /> Manual Folders</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-brand-accent">Resources</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Our Tech</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Request a Demo</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Service & Parts</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Technical Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-brand-accent">Headquarters</h4>
            <ul className="space-y-6 text-slate-400">
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <span>sales@artitectmachinery.com</span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                <span>+1 (800) ARTITECT</span>
              </li>
              <li className="flex gap-4">
                <Globe className="w-5 h-5 text-brand-accent shrink-0" />
                <span>Precision Park, Valley Tech, USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2026 ARTITECT MACHINERY. All rights reserved.</p>
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
