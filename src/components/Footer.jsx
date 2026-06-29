import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const handleNav = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-steel rounded-lg flex items-center justify-center">
                <span className="text-white font-extrabold text-sm">AM</span>
              </div>
              <span className="font-bold text-lg tracking-tight">
                ARTITECT <span className="text-amber">MACHINERY</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Precision-engineered metal folding solutions for industrial excellence. Trusted by manufacturers worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-slate-300">Products</h4>
            <ul className="space-y-2.5">
              {['Double Folding Machine', 'Sheet Metal Folder', 'Metal Folding Machine', 'Metal Folder Machine'].map((item) => (
                <li key={item}>
                  <a href="#products" onClick={(e) => handleNav(e, '#products')} className="text-slate-400 text-sm hover:text-steel transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-slate-300">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Features', href: '#features' },
                { label: 'About Us', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleNav(e, link.href)} className="text-slate-400 text-sm hover:text-steel transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-slate-300">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-steel mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">+1 (800) 555-0199</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-steel mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">info@artitectmachinery.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-steel mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">Industrial Zone, Suite 400<br />Shanghai, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 text-sm hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 text-sm hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
