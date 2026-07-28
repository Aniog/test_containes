import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <span className="text-xl font-extrabold text-white tracking-tight">
              SSourcing<span className="text-brand-400">China</span>
            </span>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              Your trusted China sourcing partner. We help overseas buyers find reliable suppliers, verify factories, and manage quality from production to delivery.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-full bg-navy-800 flex items-center justify-center hover:bg-brand-600 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-navy-800 flex items-center justify-center hover:bg-brand-600 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-navy-800 flex items-center justify-center hover:bg-brand-600 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-300 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-sm text-slate-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="text-sm text-slate-300 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="text-sm text-slate-300 hover:text-white transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="text-sm text-slate-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-sm text-slate-300 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-300 mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-slate-300">Supplier Sourcing</span></li>
              <li><span className="text-sm text-slate-300">Factory Audit & Verification</span></li>
              <li><span className="text-sm text-slate-300">Quality Control Inspection</span></li>
              <li><span className="text-sm text-slate-300">Production Follow-up</span></li>
              <li><span className="text-sm text-slate-300">Shipping Coordination</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-300 mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-300">Shenzhen, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a href="tel:+861234567890" className="text-sm text-slate-300 hover:text-white transition-colors">+86 123 4567 890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-sm text-slate-300 hover:text-white transition-colors">info@ssourcingchina.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
