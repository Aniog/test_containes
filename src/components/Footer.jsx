import { NavLink } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <Globe className="h-8 w-8 text-amber-500" />
              <span className="text-xl font-bold tracking-tight">SSourcing China</span>
            </div>
            <p className="text-sm leading-relaxed">
              Global buyers' trusted partner in China. We bridge the gap between you and reliable Chinese suppliers through expertise in sourcing, verification, and QC.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-amber-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/services" className="hover:text-amber-500 transition-colors">Supplier Sourcing</NavLink></li>
              <li><NavLink to="/services" className="hover:text-amber-500 transition-colors">Factory Verification</NavLink></li>
              <li><NavLink to="/services" className="hover:text-amber-500 transition-colors">Quality Control</NavLink></li>
              <li><NavLink to="/services" className="hover:text-amber-500 transition-colors">Production Monitoring</NavLink></li>
              <li><NavLink to="/services" className="hover:text-amber-500 transition-colors">Shipping Coordination</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/how-it-works" className="hover:text-amber-500 transition-colors">How It Works</NavLink></li>
              <li><NavLink to="/products" className="hover:text-amber-500 transition-colors">Products We Source</NavLink></li>
              <li><NavLink to="/case-studies" className="hover:text-amber-500 transition-colors">Case Studies</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-amber-500 transition-colors">Sourcing Blog</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-amber-500 transition-colors">Contact Us</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-amber-500" />
                <span>Unit 1205, North Tower, World Trade Center, Guangzhou, China</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 shrink-0 text-amber-500" />
                <span>+86 20 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 shrink-0 text-amber-500" />
                <span>contact@ssourcing-china.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs">
          <p>&copy; {currentYear} SSourcing China. All rights reserved. Professional Sourcing Agent in China.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
