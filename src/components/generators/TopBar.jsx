import React from 'react';
import strings from '@/data/strings.en.js';

export default function TopBar() {
  return (
    <header className="bg-white border-b border-subtle-divider">
      <div className="max-content flex items-center h-[56px] section-padding" style={{ paddingInline: '20px' }}>
        <a
          href="/"
          className="flex items-center gap-[10px] font-heading font-bold text-[22px] text-hero-dark uppercase tracking-wide focus-ring"
          aria-label={strings.logoAlt}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="6" fill="url(#topbar-grad)" />
            <path d="M8 12h6v2H8zM8 16h10v2H8zM8 20h8v2H8z" fill="#fff" />
            <defs>
              <linearGradient id="topbar-grad" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#7671FF" />
                <stop offset="1" stopColor="#CB0C9F" />
              </linearGradient>
            </defs>
          </svg>
          strikingly AI
        </a>
      </div>
    </header>
  );
}