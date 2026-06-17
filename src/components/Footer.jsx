import React from 'react';
import strings from '@/data/strings.en';

export default function Footer() {
  const s = strings.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-[40px]" style={{ backgroundColor: 'var(--light-bg)', borderTop: '1px solid var(--divider)' }}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-[30px] md:gap-[60px] mb-[30px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2" aria-label="Strikingly home">
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="6" fill="url(#footer-logo-grad)" />
                <path d="M8 8h12v3H11v2h7v3H11v4H8V8z" fill="white" />
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="28" y2="28">
                    <stop stopColor="#7671FF" />
                    <stop offset="1" stopColor="#CB0C9F" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-heading font-bold text-[14px]" style={{ color: 'var(--hero-text)' }}>
                strikingly
              </span>
            </a>
          </div>
          {/* Columns */}
          {s.columns.map((col, i) => (
            <div key={i} className="flex-1">
              <h4 className="font-heading font-bold text-[12px] mb-[10px]" style={{ color: 'var(--heading-text)' }}>
                {col.title}
              </h4>
              <ul className="flex flex-col gap-[6px]">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-[13px] hover:underline"
                      style={{ color: 'var(--body-text)' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="pt-[20px] text-[12px]"
          style={{ borderTop: '1px solid var(--divider)', color: 'var(--body-text)' }}
        >
          {s.copyright.replace('{year}', year)}
        </div>
      </div>
    </footer>
  );
}
