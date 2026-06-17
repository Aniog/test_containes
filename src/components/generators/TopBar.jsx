import React from 'react';
import { strings } from '@/data/strings';

const s = strings.en;

export default function TopBar() {
  return (
    <header className="w-full bg-white border-b border-divider">
      <div className="section-wrapper flex items-center h-[60px]">
        <a href="/" className="flex items-center gap-2 no-underline" aria-label="Strikingly home">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect width="28" height="28" rx="6" fill="#8159BB" />
            <path d="M8 8h12v3H11v2h7v3h-7v4H8V8z" fill="white" />
          </svg>
          <span className="font-heading font-bold text-[16px] text-heading-dark tracking-wide">
            {s.topBar.logo}
          </span>
        </a>
      </div>
    </header>
  );
}
