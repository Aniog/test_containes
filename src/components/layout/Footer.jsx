import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-extrabold tracking-tight text-white italic">
                SSourcing<span className="text-accent">China</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Leading China sourcing agent helping global businesses navigate the Chinese market with confidence. Reliable, transparent, and professional.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Sourcing Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Latest Sourcing News</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Our Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Supplier Search</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Factory Audit</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Production Monitoring</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-accent shrink-0" />
                <span>Futian District, Shenzhen, Guangdong, China</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-accent shrink-0" />
                <span>+86 755 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-accent shrink-0" />
                <span>contact@ssourcingchina.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2026 SSourcing China. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
