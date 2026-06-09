import React from 'react';
import { StrikinglyLogo } from './Icons';

export default function TopBar() {
  return (
    <header className="bg-white border-b border-divider">
      <div className="section-container flex items-center h-[56px]">
        <a href="/" aria-label="Strikingly home">
          <StrikinglyLogo />
        </a>
      </div>
    </header>
  );
}
