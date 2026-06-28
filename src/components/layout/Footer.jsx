import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-slate-900 font-bold">SS</span>
              </div>
              <span className="font-semibold text-white">SSourcing China</span>
            </div>
            <p className="text-sm">
              Professional China sourcing services for international buyers since 2015.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-white transition-colors">Products We Source</Link></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Shanghai, China</li>
              <li>+86 21 5888 0000</li>
              <li>info@ssourcingchina.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-center">
          © {new Date().getFullYear()} SSourcing China. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;