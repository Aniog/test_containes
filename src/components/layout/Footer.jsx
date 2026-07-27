import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2540] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-[#0A2540] font-semibold text-lg tracking-tight">SS</span>
              </div>
              <span className="font-semibold text-lg">SSourcing China</span>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              Professional China sourcing agent helping global buyers find reliable suppliers since 2015.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wide">COMPANY</h4>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wide">SERVICES</h4>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              <li>Supplier Sourcing</li>
              <li>Factory Verification</li>
              <li>Quality Inspection</li>
              <li>Production Monitoring</li>
              <li>Shipping Coordination</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wide">CONTACT</h4>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              <li>Shanghai, China</li>
              <li>+86 21 5888 1234</li>
              <li>info@ssourcingchina.com</li>
              <li className="pt-2">
                <Link to="/contact" className="text-[#C5A46E] hover:underline">Request a Quote →</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1a3a5c] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#94a3b8]">
          <p>© {currentYear} SSourcing China. All rights reserved.</p>
          <p className="text-xs">Professional sourcing services for international buyers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
