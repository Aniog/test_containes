import React from 'react';
import { strings } from '@/data/strings';

const t = strings.en;

const TopBar = () => (
  <header className="bg-white border-b border-divider sticky top-0 z-50">
    <div className="max-w-[1200px] mx-auto px-5 h-[50px] flex items-center">
      <a href="/" className="font-heading font-bold text-[18px] text-heading-dark tracking-wide">
        {t.topBar.logo}
      </a>
    </div>
  </header>
);

export default TopBar;
