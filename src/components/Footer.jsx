import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-slate-900 font-semibold text-sm">SS</span>
              </div>
              <span className="font-semibold text-xl text-white tracking-tight">SSourcing China</span>
            </div>
            <p className="text-sm text-slate-400 max-w-xs">
              Professional China sourcing agent helping global buyers find reliable suppliers, verify factories, and manage production and logistics.
            </p>
          </div>

          <div>
            <div className="text-white font-medium mb-3">Company</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-white font-medium mb-3">Resources</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-white">Products We Source</Link></li>
              <li><Link to="/contact" className="hover:text-white">Request a Quote</Link></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>

          <div>
            <div className="text-white font-medium mb-3">Contact</div>
            <ul className="space-y-2 text-sm">
              <li>Shanghai, China</li>
              <li><a href="mailto:info@ssourcingchina.com" className="hover:text-white">info@ssourcingchina.com</a></li>
              <li><a href="https://wa.me/8613812345678" target="_blank" rel="noreferrer" className="hover:text-white">+86 138 1234 5678 (WhatsApp)</a></li>
            </ul>
            <div className="mt-4 text-xs text-slate-500">
              Mon–Fri 9:00–18:00 (GMT+8)
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>© {new Date().getFullYear()} SSourcing China. All rights reserved.</div>
          <div className="flex gap-4">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
