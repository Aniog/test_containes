import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-9 h-9 bg-teal-700 rounded-md">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">SSourcing</span>
                <span className="text-[10px] text-teal-400 font-medium uppercase tracking-wider leading-tight">China</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your reliable China sourcing agent. We help global buyers find verified suppliers, manage quality control, and coordinate shipping.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {['Supplier Sourcing', 'Factory Verification', 'Quality Inspection', 'Production Monitoring', 'Shipping Coordination'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'How It Works', path: '/how-it-works' },
                { label: 'Products We Source', path: '/products' },
                { label: 'Case Studies', path: '/case-studies' },
                { label: 'Blog', path: '/blog' },
                { label: 'Contact Us', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">info@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">+86 755 XXXX XXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">Shenzhen, Guangdong, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/" className="text-sm text-slate-500 hover:text-teal-400 transition-colors">Privacy Policy</Link>
            <Link to="/" className="text-sm text-slate-500 hover:text-teal-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
