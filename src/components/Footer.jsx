import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-900 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-bronze-light/10 flex items-center justify-center">
                <span className="text-bronze-light font-heading text-lg font-bold">A</span>
              </div>
              <div>
                <span className="font-heading text-lg font-bold text-white tracking-tight">
                  ARTITECT
                </span>
                <span className="block text-xs text-navy-400 tracking-widest uppercase -mt-1">
                  Machinery
                </span>
              </div>
            </div>
            <p className="text-navy-400 text-sm leading-relaxed">
              Precision metal folding solutions for industrial fabrication worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {['Home', 'Products', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-navy-400 hover:text-bronze-light text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Products</h4>
            <ul className="space-y-2.5">
              {[
                'Double Folding Machine',
                'Double Folder',
                'Sheet Metal Folder',
                'Metal Folding Machine',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    className="text-navy-400 hover:text-bronze-light text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2.5 text-navy-400 text-sm">
              <li>Industriestraße 42</li>
              <li>53113 Bonn, Germany</li>
              <li>
                <a href="tel:+492281234567" className="hover:text-bronze-light transition-colors">
                  +49 228 123 4567
                </a>
              </li>
              <li>
                <a href="mailto:info@artitect-machinery.com" className="hover:text-bronze-light transition-colors">
                  info@artitect-machinery.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-navy-500 text-sm">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-navy-400 hover:text-bronze-light text-sm transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}