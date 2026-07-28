import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-navy font-extrabold text-lg">
                S
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                SSourcing China
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              A China-based sourcing agent helping overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-5">Services</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link to="/services" className="hover:text-white transition-colors">Supplier Discovery</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Factory Verification</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Production Follow-Up</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-5">Company</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-5">Contact</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                <a href="mailto:hello@ssourcingchina.com" className="hover:text-white transition-colors">hello@ssourcingchina.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                <a href="tel:+8613812345678" className="hover:text-white transition-colors">+86 138 1234 5678</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                <span>Guangzhou, Guangdong, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-light mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-300">
          <p>© {currentYear} SSourcing China. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
