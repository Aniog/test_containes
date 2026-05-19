import React from 'react';
import { strings } from '@/data/strings';

const t = strings.en;

const Footer = () => (
  <footer className="py-10 bg-bg-light border-t border-divider">
    <div className="max-w-[1200px] mx-auto px-5">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">
        {/* Logo column */}
        <div className="md:col-span-1">
          <a href="/" className="font-heading font-bold text-[16px] text-heading-dark tracking-wide">
            strikingly
          </a>
        </div>
        {/* Link columns */}
        {t.footer.columns.map((col, index) => (
          <div key={index}>
            <h4 className="font-heading font-bold uppercase text-heading-section text-xs mb-4">
              {col.title}
            </h4>
            <ul className="list-none m-0 p-0 space-y-2.5">
              {col.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href={link.href}
                    className="text-body-text text-sm hover:text-brand-purple transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-divider pt-5">
        <p className="text-body-text text-xs text-center">
          {t.footer.copyright}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
