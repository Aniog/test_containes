import React from 'react';
import { cn } from '../lib/utils';
import { strings } from '../strings';

export const TopBar = () => {
  const s = strings.en.nav;
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--divider)] h-[60px] flex items-center">
      <div className="container-custom flex items-center justify-between w-full">
        <a href="/" className="flex items-center gap-2">
          <span className="text-[20px] font-bold tracking-tighter text-[var(--heading-dark)] uppercase" style={{ fontFamily: 'Josefin Sans' }}>
            strikingly <span className="ai-text-gradient">AI</span>
          </span>
        </a>
      </div>
    </header>
  );
};

export const Breadcrumb = () => {
  const s = strings.en.nav.breadcrumb;
  return (
    <nav aria-label="Breadcrumb" className="bg-white py-3">
      <div className="container-custom">
        <ol className="flex items-center space-x-2 text-[12px] text-[var(--body-text)]">
          <li>
            <a href="/" className="hover:text-[var(--brand-purple)] transition-colors">
              {s.root}
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-[var(--body-text)] opacity-50">&gt;</span>
            <span className="font-semibold text-[var(--body-text)]">{s.current}</span>
          </li>
        </ol>
      </div>
    </nav>
  );
};
