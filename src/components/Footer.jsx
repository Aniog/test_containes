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
                <span className="text-slate-900 text-sm font-semibold">SS</span>
              </div>
              <span className="font-semibold text-xl text-white tracking-tight">SSourcing China</span>
            </div>
            <p className="text-sm text-slate-400 max-w-xs">
              Professional China sourcing agent helping global buyers find reliable suppliers, verify factories, and manage production and logistics.
            </p>
          </div>

          <div>
            <div className="text-white font-medium mb-4">Company</div>
            <div className="space-y-2 text-sm">
              <Link to="/services" className="block hover:text-white">Services</Link>
              <Link to="/how-it-works" className="block hover:text-white">How It Works</Link>
              <Link to="/case-studies" className="block hover:text-white">Case Studies</Link>
              <Link to="/blog" className="block hover:text-white">Blog</Link>
            </div>
          </div>

          <div>
            <div className="text-white font-medium mb-4">Resources</div>
            <div className="space-y-2 text-sm">
              <Link to="/products" className="block hover:text-white">Products We Source</Link>
              <Link to="/contact" className="block hover:text-white">Contact Us</Link>
              <Link to="/#faq" className="block hover:text-white">FAQ</Link>
            </div>
          </div>

          <div>
            <div className="text-white font-medium mb-4">Contact</div>
            <div className="space-y-2 text-sm text-slate-400">
              <p>Shanghai, China</p>
              <a href="mailto:info@ssourcingchina.com" className="block hover:text-white">info@ssourcingchina.com</a>
              <a href="tel:+862161234567" className="block hover:text-white">+86 21 6123 4567</a>
              <p className="pt-2 text-xs">Mon–Fri 8:30–18:00 (CST)</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row justify-between gap-2">
          <div>© {new Date().getFullYear()} SSourcing China. All rights reserved.</div>
          <div className="flex gap-4">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Supplier Code of Conduct</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
