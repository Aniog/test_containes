import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-white rounded flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg tracking-tight">SS</span>
              </div>
              <span className="text-white font-semibold text-xl tracking-tight">SSourcing China</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-6">
              A professional China-based sourcing agent helping overseas buyers find reliable suppliers, 
              verify factories, and manage production with confidence.
            </p>
            <div className="text-xs text-slate-500">
              Yiwu, Zhejiang, China<br />
              Serving buyers in 40+ countries
            </div>
          </div>

          <div>
            <div className="text-white font-semibold text-sm mb-4">Company</div>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
              <Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            </div>
          </div>

          <div>
            <div className="text-white font-semibold text-sm mb-4">Resources</div>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link to="/products" className="hover:text-white transition-colors">Products We Source</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Request a Quote</Link>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>
          </div>

          <div>
            <div className="text-white font-semibold text-sm mb-4">Contact</div>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">
                info@ssourcingchina.com
              </a>
              <a href="tel:+8657985588888" className="hover:text-white transition-colors">
                +86 579 8558 8888
              </a>
              <Link to="/contact" className="hover:text-white transition-colors mt-1">
                Contact Form →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>© {currentYear} SSourcing China. All rights reserved.</div>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Supplier Code of Conduct</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
