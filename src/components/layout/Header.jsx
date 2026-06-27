import React from 'react';
import { strings } from '../../lib/strings';

const Header = () => {
  const s = strings.en.nav;
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-divider">
      <div className="max-w-[1200px] mx-auto px-5 h-[60px] flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <span className="font-heading text-xl font-bold text-brand-purple italic">
            {s.strikingly}
          </span>
          <span className="font-heading text-xl font-bold text-heading-dark">
            {s.ai}
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-heading text-sm font-bold uppercase tracking-wider text-heading-text">
          {/* Main Strikingly site nav placeholders could go here but brief says "No nav links beyond the logo" */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
