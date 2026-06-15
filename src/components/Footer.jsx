import React from 'react';
import { strings } from '@/lib/strings';

export const Footer = () => {
  const t = strings.en.footer;

  return (
    <footer className="bg-[var(--light-bg)] pt-[60px] pb-[40px] border-t border-[var(--subtle-divider)]">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-[40px]">
          <div className="col-span-2 lg:col-span-1">
            <a href="/" className="font-heading text-[20px] text-[var(--hero-h1-dark)]">
              {t.logo}
            </a>
          </div>
          
          {t.columns.map((col, idx) => (
            <div key={idx} className="flex flex-col gap-[15px]">
              <h4 className="text-[12px] font-bold text-[var(--hero-h1-dark)]">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-[10px]">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href={link.href} className="text-[14px] text-[var(--body-text)] hover:text-[var(--brand-purple)]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-[60px] pt-[20px] border-t border-[var(--subtle-divider)] text-center md:text-left">
          <p className="text-[12px] text-[var(--body-text)]">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
