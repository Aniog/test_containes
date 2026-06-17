import React from 'react';
import { strings } from '../../strings';

const s = strings.en.footer;

const FooterLogo = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="3" fill="url(#footer-logo-grad)" />
    <path d="M6 6L12 12L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6L18 12L12 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
    <defs>
      <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7671FF"/><stop offset="1" stopColor="#CB0C9F"/>
      </linearGradient>
    </defs>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-heading-dark py-10">
      <div className="max-w-content mx-auto px-5">
        <div className="flex items-center gap-2 mb-8">
          <FooterLogo />
          <span className="font-heading font-bold text-white text-sm" style={{ textTransform: 'uppercase' }}>
            Strikingly
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {s.columns.map((col, i) => (
            <div key={i}>
              <h4 className="font-heading font-bold text-white text-xs mb-4" style={{ textTransform: 'uppercase' }}>
                {col.title}
              </h4>
              <ul className="list-none m-0 p-0 flex flex-col gap-2">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href} className="text-sm no-underline" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-5">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {s.copyright.replace('{year}', year)}
          </p>
        </div>
      </div>
    </footer>
  );
}
