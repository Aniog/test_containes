import React from 'react';
import { StrikinglyLogo } from './Icons';

const TopBar = () => (
  <header className="bg-white border-b border-[var(--color-divider)] sticky top-0 z-50">
    <div className="content-container flex items-center h-[52px]">
      <a href="/" aria-label="Strikingly home">
        <StrikinglyLogo />
      </a>
    </div>
  </header>
);

export default TopBar;
