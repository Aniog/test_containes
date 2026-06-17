import React from 'react';
import { strings } from '../../strings';

const s = strings.en.topBar;

const StrikinglyLogo = () => (
  <svg aria-hidden="true" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="4" fill="url(#logo-grad)" />
    <path d="M8 8L14 14L8 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 8L20 14L14 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
    <defs>
      <linearGradient id="logo-grad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7671FF"/>
        <stop offset="1" stopColor="#CB0C9F"/>
      </linearGradient>
    </defs>
  </svg>
);

export default function TopBar() {
  return (
    <header className="w-full bg-white border-b border-subtle-divider" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="max-w-content mx-auto px-5 h-14 flex items-center">
        <a href="/" className="flex items-center gap-2 no-underline" aria-label="Strikingly home">
          <StrikinglyLogo />
          <span className="font-heading font-bold text-heading-dark text-base tracking-wide" style={{ textTransform: 'uppercase' }}>
            {s.logoText}
          </span>
        </a>
      </div>
    </header>
  );
}
