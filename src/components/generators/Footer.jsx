import React from 'react';
import { StrikinglyLogo } from './Icons';
import strings from '../../strings';

const s = strings.en;

const footerLinks = {
  [s.footerProduct]: [
    { label: 'AI Site Builder', href: s.builderPath },
    { label: 'Templates', href: '/templates' },
    { label: 'Pricing', href: '/pricing' },
  ],
  [s.footerCompany]: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Support', href: '/support' },
  ],
  [s.footerResources]: [
    { label: 'Generators', href: '/generators' },
    { label: 'Help Center', href: '/support' },
  ],
  [s.footerLegal]: [
    { label: 'Terms', href: '/terms' },
    { label: 'Privacy', href: '/privacy' },
  ],
};

const Footer = () => (
  <footer className="bg-[var(--color-light-bg)] border-t border-[var(--color-divider)] py-[40px]">
    <div className="content-container">
      {/* Logo and description */}
      <div className="mb-[30px]">
        <div className="mb-[10px]">
          <StrikinglyLogo />
        </div>
        <p className="text-[13px] text-[var(--color-body-text)] max-w-[300px]">
          {s.footerDesc}
        </p>
      </div>

      {/* Link columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px] mb-[30px]">
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4
              className="text-[12px] font-bold text-[var(--color-heading-text)] uppercase mb-[12px]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {heading}
            </h4>
            <ul className="list-none m-0 p-0 space-y-[8px]">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-[var(--color-body-text)] hover:text-[var(--color-brand-purple)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="border-t border-[var(--color-divider)] pt-[20px]">
        <p className="text-[12px] text-[var(--color-card-border)]">
          {s.copyright}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
