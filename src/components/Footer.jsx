import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Bio */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-extrabold tracking-tight text-white focus:outline-none">
              SSourcing<span className="text-accent">China</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Leading B2B China sourcing agent helping global businesses navigate the complexity of the Chinese supply chain with transparency and professionalism.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-white transition">Core Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition">Sourcing Process</Link></li>
              <li><Link to="/products" className="hover:text-white transition">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition">Success Stories</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">China Sourcing Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm">
              <li>Supplier Verification</li>
              <li>Price Negotiation</li>
              <li>Quality Control (QC)</li>
              <li>Factory Audits</li>
              <li>Logistics Coordination</li>
              <li>Sample Development</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0" />
                <span>Room 1502, Building A, Global Trade Plaza, Futian District, Shenzhen, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <span>+86 123 4567 8901</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <span>info@ssourcingchina.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
