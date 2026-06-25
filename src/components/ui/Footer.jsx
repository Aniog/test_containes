import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-brand-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg leading-tight">SSourcing</span>
                <span className="text-xs text-slate-400 leading-tight -mt-0.5">China</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Your trusted China-based sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality control from factory floor to final shipment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="text-sm text-slate-400 hover:text-white transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="text-sm text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-sm text-slate-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2.5">
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">Factory Verification</Link></li>
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">Production Monitoring</Link></li>
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">Shipping & Logistics</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">Guangzhou, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-sm text-slate-400 hover:text-white transition-colors">info@ssourcingchina.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="tel:+861234567890" className="text-sm text-slate-400 hover:text-white transition-colors">+86 123 4567 890</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">Mon - Fri: 9:00 - 18:00 (CST)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}