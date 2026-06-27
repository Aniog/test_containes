import React from 'react';
import strings from '../strings';

export default function TopBar() {
  const t = strings.en;
  return (
    <header className="bg-white border-b border-[#E2E4E7] sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-5 h-[50px] flex items-center">
        <a
          href="/"
          className="font-heading font-bold text-sm uppercase tracking-wide text-[#2E2E2F] no-underline hover:text-brand-purple transition-colors"
        >
          {t.logo}
        </a>
      </div>
    </header>
  );
}
