import React from 'react';
import { cn } from '@/lib/utils';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[var(--subtle-divider)]">
      <div className="container-custom h-[60px] flex items-center">
        <a href="/" className="flex items-center gap-2">
          <span className="font-heading text-[20px] tracking-tight text-[var(--hero-h1-dark)]">
            strikingly <span className="ai-gradient-text">AI</span>
          </span>
        </a>
      </div>
    </header>
  );
};
