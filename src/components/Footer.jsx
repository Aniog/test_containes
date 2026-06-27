import React from 'react';
import { strings } from '@/strings.en';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#F4F6F8] border-t border-[#E2E4E7] py-10">
      <div className="section-wrapper">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-8">
          <div className="flex-shrink-0">
            <span className="text-[#2E2E2F] font-bold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
              {strings.footer.logoText}
            </span>
          </div>
          {strings.footer.columns.map((col, i) => (
            <div key={i} className="flex flex-col gap-2">
              <h4 className="text-xs font-bold text-[#4B5056] uppercase" style={{ fontFamily: 'var(--font-heading)' }}>
                {col.title}
              </h4>
              {col.links.map((link, j) => (
                <a
                  key={j}
                  href={link.href}
                  className="text-sm text-[#636972] hover:text-[#8159BB] transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t border-[#E2E4E7] pt-5">
          <p className="text-xs text-[#636972]" style={{ fontFamily: 'var(--font-body)' }}>
            {strings.footer.copyright.replace('{year}', year)}
          </p>
        </div>
      </div>
    </footer>
  );
}
