import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-[#0F172A] font-bold text-lg">SS</span>
              </div>
              <span className="font-semibold text-xl">SSourcing China</span>
            </div>
            <p className="text-sm text-[#94A3B8]">
              Professional sourcing services connecting global buyers with reliable Chinese suppliers.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li><Link to="/products" className="hover:text-white transition-colors">Products We Source</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Request a Quote</Link></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li>Shanghai, China</li>
              <li><a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">info@ssourcingchina.com</a></li>
              <li><a href="tel:+862150000000" className="hover:text-white transition-colors">+86 21 5000 0000</a></li>
            </ul>
          </div>
        </div>

        <div className="divider bg-[#334155] my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#64748B]">
          <p>&copy; {currentYear} SSourcing China. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Professional sourcing services since 2012.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
