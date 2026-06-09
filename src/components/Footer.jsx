import React from 'react';
import { footerLinks, strings } from '../data/generators';
import { StrikinglyLogo } from './Icons';

const s = strings.en;

export default function Footer() {
  return (
    <footer className="bg-light-bg border-t border-divider">
      <div className="section-container py-[40px]">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-[30px] mb-[30px]">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1 mb-[10px]">
            <a href="/" aria-label="Strikingly home">
              <StrikinglyLogo />
            </a>
            <p className="text-body-gray text-[12px] mt-[12px] leading-[1.6] max-w-[200px]">
              Build any kind of website with AI, in an instant.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[12px] font-heading font-bold text-heading-gray mb-[12px] tracking-wide">
                {heading}
              </h4>
              <ul className="list-none m-0 p-0 space-y-[8px]">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        className="text-body-gray text-[13px] hover:text-brand-purple transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span className="text-body-gray text-[13px] opacity-60">
                        {link.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-divider pt-[20px]">
          <p className="text-body-gray text-[12px] text-center">
            {s.footerCopyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
