import React from 'react';
import strings from '@/data/strings.en';

export default function TopBar() {
  const s = strings.topBar;
  return (
    <header className="w-full bg-white border-b border-divider" style={{ borderColor: 'var(--divider)' }}>
      <div className="section-container flex items-center h-[60px]">
        <a href="/" className="flex items-center gap-2" aria-label="Strikingly home">
          <svg aria-hidden="true" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="6" fill="url(#topbar-logo-grad)" />
            <path d="M8 8h12v3H11v2h7v3H11v4H8V8z" fill="white" />
            <defs>
              <linearGradient id="topbar-logo-grad" x1="0" y1="0" x2="28" y2="28">
                <stop stopColor="#7671FF" />
                <stop offset="1" stopColor="#CB0C9F" />
              </linearGradient>
            </defs>
          </svg>
          <span className="font-heading font-bold text-[16px] text-hero tracking-wide" style={{ color: 'var(--hero-text)' }}>
            {s.logoText}
          </span>
        </a>
      </div>
    </header>
  );
}
