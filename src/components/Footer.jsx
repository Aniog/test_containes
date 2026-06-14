import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg">SS</span>
              </div>
              <span className="font-semibold text-xl text-white">SSourcing China</span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Professional China-based sourcing agent helping global buyers find reliable suppliers.
            </p>
            <p className="text-xs text-slate-500">
              Yiwu, Zhejiang, China
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-white transition-colors">Products We Source</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Request a Quote</Link></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </li>
              <li>
                <a href="tel:+8657985588888" className="hover:text-white transition-colors">
                  +86 579 8558 8888
                </a>
              </li>
              <li className="pt-2">
                <Link to="/contact" className="text-white hover:text-slate-200 font-medium">
                  Send us a message →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-xs text-slate-500 flex flex-col md:flex-row justify-between gap-2">
          <p>© {currentYear} SSourcing China. All rights reserved.</p>
          <p>Professional sourcing services for international B2B buyers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;