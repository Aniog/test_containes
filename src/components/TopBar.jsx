import React from 'react';
import { strings } from '@/strings.en';

export default function TopBar() {
  return (
    <header className="bg-white border-b border-[#E2E4E7] sticky top-0 z-50">
      <div className="section-wrapper flex items-center h-14">
        <a href="/" className="flex items-center gap-2" aria-label="Strikingly home">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="#8159BB"/>
            <path d="M12 6l-6 3v6l6 3 6-3V9l-6-3z" fill="white"/>
          </svg>
          <span className="text-[#2E2E2F] font-bold text-base tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
            {strings.topBar.logoText}
          </span>
        </a>
      </div>
    </header>
  );
}
