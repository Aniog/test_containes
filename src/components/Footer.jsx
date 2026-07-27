import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-[#0F172A] font-bold">SS</span>
              </div>
              <span className="font-semibold text-lg">SSourcing China</span>
            </div>
            <p className="text-sm text-white/70">
              Professional sourcing services connecting global buyers with verified Chinese suppliers.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/products" className="hover:text-white">Products We Source</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>info@ssourcingchina.com</li>
              <li>+86 21 5888 9999</li>
              <li>Shanghai, China</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-sm text-white/50">
          © {new Date().getFullYear()} SSourcing China. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
