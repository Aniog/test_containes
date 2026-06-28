import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-slate-800 pb-16">
        <div>
          <div className="text-2xl font-bold text-white mb-6">
            SSourcing<span className="text-blue-500">China</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Leading China sourcing agent providing end-to-end supply chain solutions. We bridge the gap between global buyers and top-tier Chinese manufacturers.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Facebook className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li><Link to="/services" className="hover:text-blue-400">Product Sourcing</Link></li>
            <li><Link to="/services" className="hover:text-blue-400">Supplier Verification</Link></li>
            <li><Link to="/services" className="hover:text-blue-400">Quality Inspection</Link></li>
            <li><Link to="/services" className="hover:text-blue-400">Production Management</Link></li>
            <li><Link to="/services" className="hover:text-blue-400">Shipping Coordination</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li><Link to="/how-it-works" className="hover:text-blue-400">How It Works</Link></li>
            <li><Link to="/products" className="hover:text-blue-400">Products We Source</Link></li>
            <li><Link to="/case-studies" className="hover:text-blue-400">Case Studies</Link></li>
            <li><Link to="/blog" className="hover:text-blue-400">Sourcing Blog</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Request a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <ul className="flex flex-col gap-5 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
              <span>Room 1205, Business Center, Futian District, Shenzhen, China</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-500 shrink-0" />
              <span>+86 123 4567 8910</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-500 shrink-0" />
              <span>info@ssourcingchina.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© {currentYear} SSourcing China. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
