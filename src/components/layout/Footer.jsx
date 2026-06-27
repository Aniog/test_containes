import React from 'react';
import { strings } from '../../lib/strings';

const Footer = () => {
  const s = strings.en.footer;
  const navStrings = strings.en.nav;

  return (
    <footer className="bg-white border-t border-divider pt-12 pb-8">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6">
              <span className="font-heading text-xl font-bold text-brand-purple italic">
                {navStrings.strikingly}
              </span>
              <span className="font-heading text-xl font-bold text-heading-dark">
                {navStrings.ai}
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-[240px]">
              AI-powered website builder for building any kind of site in seconds.
            </p>
          </div>
          
          <div>
            <h4 className="text-heading-dark mb-4 tracking-wider">Product</h4>
            <ul className="space-y-3">
              {s.links.slice(0, 3).map((link) => (
                <li key={link.name}>
                  <a href={link.url} className="text-sm hover:text-brand-purple transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-heading-dark mb-4 tracking-wider">Resources</h4>
            <ul className="space-y-3">
              {s.links.slice(3, 5).map((link) => (
                <li key={link.name}>
                  <a href={link.url} className="text-sm hover:text-brand-purple transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-heading-dark mb-4 tracking-wider">Legal</h4>
            <ul className="space-y-3">
              {s.links.slice(5).map((link) => (
                <li key={link.name}>
                  <a href={link.url} className="text-sm hover:text-brand-purple transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-divider flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-body-text/60">
            {s.copyright}
          </p>
          <div className="flex gap-6">
            {/* Social icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
