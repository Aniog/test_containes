import React from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center">
                <span className="text-navy font-extrabold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-wide leading-tight">
                  ARTITECT
                </span>
                <span className="text-gold text-[10px] font-semibold tracking-[0.25em] uppercase leading-tight">
                  Machinery
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Precision-engineered metal folding machines for industrial excellence. 
              Trusted by manufacturers worldwide for quality and reliability.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {['Double Folding Machine', 'Sheet Metal Folder', 'Metal Folding Machine', 'Double Folder'].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-slate-400 hover:text-gold text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Products', href: '#products' },
                { label: 'Features', href: '#features' },
                { label: 'About Us', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-400 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">Industrial Zone, Manufacturing District</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span className="text-slate-400 text-sm">+1 (800) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span className="text-slate-400 text-sm">info@artitectmachinery.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-gold text-sm transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
