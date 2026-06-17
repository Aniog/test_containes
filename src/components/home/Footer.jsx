import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark-blue border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white">ARTITECT</span>
              <span className="text-xl font-light text-brand-gold tracking-wider">MACHINERY</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Precision metal folding solutions for industrial manufacturers worldwide.
              German engineering. Uncompromising quality.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {['Home', 'Products', 'Why Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-brand-gold text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Our Products
            </h4>
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
                    className="text-gray-400 hover:text-brand-gold text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-brand-gold text-xs transition-colors"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}