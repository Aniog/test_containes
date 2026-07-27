import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-300">
      {/* Main Footer */}
      <div className="container mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary-400 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-lg tracking-tight">SSourcing</span>
                <span className="text-slate-400 text-[10px] font-medium tracking-wider uppercase">China</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Your reliable China sourcing agent. We help global buyers find verified suppliers, manage quality control, and coordinate shipping from China.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {[
                'Supplier Sourcing',
                'Factory Verification',
                'Quality Inspection',
                'Production Monitoring',
                'Shipping Coordination',
                'Custom Clearance',
              ].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">
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
                { name: 'Home', path: '/' },
                { name: 'How It Works', path: '/how-it-works' },
                { name: 'Products We Source', path: '/products' },
                { name: 'Case Studies', path: '/case-studies' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact Us', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.name}
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
                <MapPin className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                <span className="text-sm text-slate-400">
                  Room 1205, Block A, Fortune Plaza<br />
                  Futian District, Shenzhen 518000, China
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="tel:+8613812345678" className="text-sm text-slate-400 hover:text-white transition-colors">
                  +86 138 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-sm text-slate-400 hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" className="w-9 h-9 rounded bg-slate-700 flex items-center justify-center hover:bg-primary-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded bg-slate-700 flex items-center justify-center hover:bg-primary-500 transition-colors" aria-label="WeChat">
                <MessageCircle className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;