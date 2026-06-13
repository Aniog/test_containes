import React from 'react';
import { ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-brand-gold font-bold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white leading-tight">
                  ARTITECT
                </span>
                <span className="text-xs font-medium text-white/50 tracking-wider uppercase leading-tight">
                  Machinery
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              Premium metal folding machinery for industrial manufacturing. German engineering, global support, and uncompromising quality since 2012.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm text-brand-gold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Products', 'Why Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="text-brand-gold hover:text-brand-gold-light text-sm font-medium transition-colors duration-200">
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm text-brand-gold uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-3">
              {[
                'Double Folding Machine',
                'Double Folder',
                'Sheet Metal Folder',
                'Metal Folding Machine',
              ].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} ARTITECT Machinery. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-4 h-4 text-white/60" />
          </button>
        </div>
      </div>
    </footer>
  );
}