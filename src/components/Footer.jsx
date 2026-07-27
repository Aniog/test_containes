import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-white">
              <span className="text-2xl font-extrabold">SSourcing</span>
              <span className="text-2xl font-light text-slate-400">China</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Your Professional China Sourcing Agent. We simplify the supply chain process for global buyers, ensuring quality, compliance, and timely delivery.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-white">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white">Sourcing Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li>Product Sourcing</li>
              <li>Supplier Verification</li>
              <li>Quality Inspection</li>
              <li>Production Monitoring</li>
              <li>Shipping Coordination</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span>info@ssourcingchina.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span>+86 123 4567 8900</span>
              </li>
              <li className="flex items-center space-x-3 text-left">
                <MapPin className="h-5 w-5 text-accent" />
                <span>Guangzhou, Guangdong, China</span>
              </li>
            </ul>
            <div className="mt-8 flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white"><Linkedin className="h-6 w-6" /></a>
              <a href="#" className="text-slate-400 hover:text-white"><Twitter className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-xs">
          <p>© 2026 SSourcing China. All Rights Reserved. Professional Sourcing Agent in China.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
